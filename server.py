#!/usr/bin/env python3
"""
DS Lab Portal — Local SQLite & HTTP Server
Mohan Babu University · Department of Computer Science & Engineering
"""

import http.server
import os
import sys
import json
import sqlite3
import mimetypes

PORT = 8000
DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dslab.db")

# Initialize SQLite database
def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS profile (
            id TEXT PRIMARY KEY,
            data TEXT NOT NULL
        )
    ''')
    c.execute('''
        CREATE TABLE IF NOT EXISTS experiments (
            id INTEGER PRIMARY KEY,
            number TEXT,
            title TEXT,
            desc TEXT,
            tools TEXT,
            status TEXT,
            outputTitle TEXT,
            outputImage TEXT,
            outputLog TEXT,
            lastUpdated TEXT
        )
    ''')
    conn.commit()
    conn.close()

def get_db():
    return sqlite3.connect(DB_FILE)

class DSLabHandler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        # Enable CORS and disable aggressive caching for local dev
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Connection', 'close')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/profile':
            self.handle_get_profile()
        elif self.path == '/api/experiments':
            self.handle_get_experiments()
        else:
            if self.path == '/' or self.path == '':
                self.path = '/index.html'
            super().do_GET()

    def do_POST(self):
        if self.path == '/api/profile':
            self.handle_post_profile()
        elif self.path == '/api/experiments':
            self.handle_post_experiments()
        else:
            self.send_error(404, "API endpoint not found")

    def handle_get_profile(self):
        conn = get_db()
        c = conn.cursor()
        c.execute("SELECT data FROM profile WHERE id = 'student'")
        row = c.fetchone()
        conn.close()

        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        if row:
            self.wfile.write(row[0].encode('utf-8'))
        else:
            self.wfile.write(b"{}")

    def handle_post_profile(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_body = self.rfile.read(content_length).decode('utf-8')
        try:
            profile_data = json.loads(post_body)
            conn = get_db()
            c = conn.cursor()
            c.execute("INSERT OR REPLACE INTO profile (id, data) VALUES ('student', ?)", (json.dumps(profile_data),))
            conn.commit()
            conn.close()

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "message": "Profile saved to SQLite database"}).encode('utf-8'))
        except Exception as e:
            self.send_error(400, f"Invalid JSON: {e}")

    def handle_get_experiments(self):
        conn = get_db()
        c = conn.cursor()
        c.execute("SELECT id, number, title, desc, tools, status, outputTitle, outputImage, outputLog, lastUpdated FROM experiments ORDER BY id ASC")
        rows = c.fetchall()
        conn.close()

        experiments = []
        for r in rows:
            try:
                tools_parsed = json.loads(r[4])
            except:
                tools_parsed = []
            experiments.append({
                "id": r[0],
                "number": r[1],
                "title": r[2],
                "desc": r[3],
                "tools": tools_parsed,
                "status": r[5],
                "outputTitle": r[6],
                "outputImage": r[7],
                "outputLog": r[8],
                "lastUpdated": r[9]
            })

        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(experiments).encode('utf-8'))

    def handle_post_experiments(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_body = self.rfile.read(content_length).decode('utf-8')
        try:
            exps = json.loads(post_body)
            conn = get_db()
            c = conn.cursor()
            c.execute("DELETE FROM experiments")
            for exp in exps:
                tools_str = json.dumps(exp.get('tools', []))
                c.execute('''
                    INSERT INTO experiments (id, number, title, desc, tools, status, outputTitle, outputImage, outputLog, lastUpdated)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ''', (
                    exp.get('id'),
                    exp.get('number'),
                    exp.get('title'),
                    exp.get('desc'),
                    tools_str,
                    exp.get('status'),
                    exp.get('outputTitle'),
                    exp.get('outputImage'),
                    exp.get('outputLog'),
                    exp.get('lastUpdated')
                ))
            conn.commit()
            conn.close()

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "count": len(exps)}).encode('utf-8'))
        except Exception as e:
            self.send_error(400, f"Error saving experiments: {e}")

def run_server():
    init_db()
    mimetypes.add_type("image/svg+xml", ".svg")
    mimetypes.add_type("text/javascript", ".js")
    mimetypes.add_type("text/css", ".css")

    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    server_address = ('', PORT)
    try:
        httpd = http.server.ThreadingHTTPServer(server_address, DSLabHandler)
        print(f"==================================================")
        print(f"  DS Lab Portal — Threaded SQLite Web Server")
        print(f"  Department of Computer Science & Engineering")
        print(f"  URL: http://localhost:{PORT}")
        print(f"  SQLite Database: {DB_FILE}")
        print(f"==================================================")
        httpd.serve_forever()
    except OSError as e:
        if e.errno == 98 or e.errno == 10048:
            alt_port = 8080
            print(f"Port {PORT} busy, running at http://localhost:{alt_port}...")
            httpd = http.server.ThreadingHTTPServer(('', alt_port), DSLabHandler)
            httpd.serve_forever()
        else:
            raise e

if __name__ == '__main__':
    run_server()
