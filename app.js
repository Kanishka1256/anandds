/**
 * DS Lab Portal - Core Application Logic
 * Department of Computer Science & Engineering
 */

// ==================== DEFAULT INITIAL SEED DATA ====================
const DEFAULT_PROFILE = {
  name: "M. Anand",
  rollNo: "24102A030058",
  section: "Section A",
  branch: "B.Tech CSE (Data Science)",
  professor: "S. Bosu Babu",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  skills: [
    "Python", "NumPy", "Pandas", "Matplotlib", "Seaborn",
    "Scikit-Learn", "SciPy", "SQL", "Exploratory Data Analysis",
    "Feature Engineering", "Machine Learning"
  ],
  photo: "assets/student_photo.jpg"
};

const DEFAULT_MODULES = [
  {
    id: 1,
    number: "Module 1",
    title: "Introduction to Data Science & The Analytical Lifecycle",
    summary: "Build the foundation of data science by understanding the problem-solving lifecycle, data quality, and how analytical questions turn into evidence-based decisions.",
    outcomes: ["Problem framing", "Data lifecycle", "Data quality & governance"],
    experiments: ["Experiment 1", "Experiment 2"],
    icon: "📊"
  },
  {
    id: 2,
    number: "Module 2",
    title: "Data Extraction, Web Scraping, APIs & Ingestion",
    summary: "Explore how raw information is collected from multiple sources, including structured files, public APIs, and web pages, before it is cleaned and prepared for analysis.",
    outcomes: ["Web scraping", "API integration", "Ingestion pipelines"],
    experiments: ["Experiment 1", "Experiment 2"],
    icon: "🕸️"
  },
  {
    id: 3,
    number: "Module 3",
    title: "Data Visualization, Visual Analytics & Storytelling",
    summary: "Learn to transform analytic findings into clear, intuitive visual narratives with effective charts, dashboards, and story-driven insights for decision makers.",
    outcomes: ["Chart design", "Dashboard thinking", "Visual storytelling"],
    experiments: ["Experiment 3", "Experiment 4"],
    icon: "📈"
  },
  {
    id: 4,
    number: "Module 4",
    title: "Statistical Thinking, Probability & Inferential Analytics",
    summary: "Apply statistical reasoning, probability concepts, hypothesis testing, and inference methods to evaluate evidence and communicate uncertainty confidently.",
    outcomes: ["Probability", "Hypothesis testing", "Model evaluation"],
    experiments: ["Experiment 5", "Experiment 6", "Experiment 7", "Experiment 8", "Experiment 9"],
    icon: "📉"
  },
  {
    id: 5,
    number: "Module 5",
    title: "Time Series Analysis, Decomposition & Forecasting",
    summary: "Model time-dependent data by decomposing patterns, detecting seasonality, and forecasting future outcomes using trend and residual analysis.",
    outcomes: ["Trend detection", "Seasonality", "Forecasting models"],
    experiments: ["Experiment 10"],
    icon: "⏳"
  }
];

const DEFAULT_EXPERIMENTS = [
  {
    id: 1,
    number: "Experiment 1",
    title: "Data Ingestion, Cleaning & Preprocessing",
    desc: "Handle missing values, duplicate elimination, type-casting, and outlier mitigation using NumPy and Pandas DataFrames.",
    tools: [
      { name: "Python", purpose: "Base scripting runtime and pipeline automation." },
      { name: "NumPy", purpose: "Vectorized computations, NaN detection, and multidimensional arrays." },
      { name: "Pandas", purpose: "DataFrame operations: isnull().sum(), fillna(), drop_duplicates()." }
    ],
    status: "Completed",
    outputTitle: "Preprocessing & Missing Value Matrix",
    outputImage: "assets/outputs/exp1_data_cleaning.svg",
    outputLog: ">>> import pandas as pd\n>>> import numpy as np\n>>> df = pd.read_csv('raw_dataset.csv')\n[INFO] Initial Shape: (10000, 14) with 1,360 null entries.\n[ACTION] Imputing missing numerical values with column median.\n[ACTION] Imputing missing categorical values with mode.\n[ACTION] Dropped 214 duplicate records.\n[SUCCESS] Final Clean Shape: (9786, 14). Total Null Values: 0.",
    lastUpdated: "Verified by Faculty"
  },
  {
    id: 2,
    number: "Experiment 2",
    title: "Exploratory Data Analysis & Descriptive Statistics",
    desc: "Compute central tendency, dispersion metrics, skewness, kurtosis, and feature correlation matrices.",
    tools: [
      { name: "Python", purpose: "Scientific calculation runtime." },
      { name: "Pandas", purpose: "Statistical summaries via df.describe(), quantiles, and groupby aggregates." },
      { name: "SciPy", purpose: "Statistical tests, skewness, kurtosis, and Pearson r coefficients." },
      { name: "Statsmodels", purpose: "Descriptive distribution modeling and summaries." }
    ],
    status: "Completed",
    outputTitle: "Feature Correlation Heatmap & Summary",
    outputImage: "assets/outputs/exp2_eda_summary.svg",
    outputLog: ">>> import scipy.stats as stats\n>>> corr_matrix = df.corr(method='pearson')\n[SUMMARY] Mean Age: 36.4 | Std: 9.8 | Skewness: 0.24 (Normal)\n[CORRELATION] Strong positive correlation: Age & Experience (r = 0.89, p < 0.001)\n[CORRELATION] Moderate negative correlation: Score & Errors (r = -0.64)\n[STATUS] Descriptive analysis completed and verified.",
    lastUpdated: "Verified by Faculty"
  },
  {
    id: 3,
    number: "Experiment 3",
    title: "Data Visualization with Matplotlib & Seaborn",
    desc: "Generate univariate histograms, bivariate scatter plots, categorical box plots, and multivariate pairplots.",
    tools: [
      { name: "Python", purpose: "Execution of statistical visualization workflows." },
      { name: "Matplotlib", purpose: "Core canvas, subplots configuration, axis formatting, and figure exporting." },
      { name: "Seaborn", purpose: "High-level statistical graphics, KDE curves, violin plots, and color palettes." }
    ],
    status: "Completed",
    outputTitle: "Multivariate Distribution & Boxplot Curves",
    outputImage: "assets/outputs/exp3_data_viz.svg",
    outputLog: ">>> import matplotlib.pyplot as plt\n>>> import seaborn as sns\n>>> sns.set_theme(style='darkgrid')\n[INFO] Generated 4-panel exploratory visualization suite:\n- Figure 1: Target distribution histogram with KDE curve.\n- Figure 2: Boxplot isolating upper-whisker outliers.\n- Figure 3: Heatmap with annotated Pearson correlation coefficients.\n[SUCCESS] Figures rendered at 300 DPI and saved.",
    lastUpdated: "Verified by Faculty"
  },
  {
    id: 4,
    number: "Experiment 4",
    title: "Feature Scaling, Transformation & Categorical Encoding",
    desc: "Standardize continuous features with StandardScaler and MinMaxScaler; encode categorical variables with OneHotEncoder.",
    tools: [
      { name: "Python", purpose: "Feature engineering scripting." },
      { name: "Scikit-learn", purpose: "StandardScaler, MinMaxScaler, RobustScaler, and OneHotEncoder." },
      { name: "Pandas", purpose: "Feature matrix assembly and column transformation pipelines." }
    ],
    status: "Completed",
    outputTitle: "Feature Distribution Before vs After Scaling",
    outputImage: "assets/outputs/exp4_feature_scaling.svg",
    outputLog: ">>> from sklearn.preprocessing import StandardScaler, OneHotEncoder\n>>> scaler = StandardScaler()\n>>> X_scaled = scaler.fit_transform(X_numeric)\n[TRANSFORM] Continuous features normalized to mean = 0.0 and variance = 1.0.\n[ENCODE] Categorical columns ('Department', 'Education') One-Hot encoded (+8 binary features).\n[VERIFIED] Feature scale dominance eliminated.",
    lastUpdated: "Verified by Faculty"
  },
  {
    id: 5,
    number: "Experiment 5",
    title: "Hypothesis Testing & Statistical Inference",
    desc: "Perform two-sample Student's t-test, Chi-Square independence test, and One-Way ANOVA to evaluate statistical significance.",
    tools: [
      { name: "Python", purpose: "Inference computing environment." },
      { name: "SciPy.stats", purpose: "ttest_ind(), chisquare(), f_oneway(), and critical value p-value calculations." },
      { name: "Statsmodels", purpose: "Confidence intervals and ANOVA summary tables." }
    ],
    status: "Completed",
    outputTitle: "Two-Sample T-Distribution & P-Value Curve",
    outputImage: "assets/outputs/exp5_hypothesis_test.svg",
    outputLog: ">>> from scipy import stats\n[HYPOTHESIS] H0: Mean test score of Group A == Mean test score of Group B.\n[HYPOTHESIS] H1: Mean test score of Group A != Mean test score of Group B.\n>>> t_stat, p_val = stats.ttest_ind(group_a, group_b)\n[RESULT] t-statistic = 2.414, p-value = 0.0178.\n[CONCLUSION] Since p-value (0.0178) < alpha (0.05), we reject the Null Hypothesis.\n[OUTCOME] Statistically significant variation confirmed.",
    lastUpdated: "Verified by Faculty"
  },
  {
    id: 6,
    number: "Experiment 6",
    title: "Simple & Multiple Linear Regression Modeling",
    desc: "Build linear regression models to predict continuous dependent variables; evaluate MAE, MSE, RMSE, and R² score.",
    tools: [
      { name: "Python", purpose: "Mathematical model computation." },
      { name: "Scikit-learn", purpose: "LinearRegression, train_test_split, mean_squared_error, r2_score." },
      { name: "Matplotlib", purpose: "Fitted regression line visualization and residual QQ-plot." }
    ],
    status: "Completed",
    outputTitle: "OLS Linear Regression Fit & Residuals",
    outputImage: "assets/outputs/exp6_linear_regression.svg",
    outputLog: ">>> from sklearn.linear_model import LinearRegression\n>>> from sklearn.metrics import mean_squared_error, r2_score\n>>> reg = LinearRegression().fit(X_train, y_train)\n>>> y_pred = reg.predict(X_test)\n[METRICS] R² Score = 0.892 (89.2% variance explained)\n[METRICS] Root Mean Squared Error (RMSE) = 3.421\n[EQUATION] Target = 2.84 * Feature1 + 1.15 * Feature2 + 14.20\n[STATUS] Regression parameters verified.",
    lastUpdated: "Verified by Faculty"
  },
  {
    id: 7,
    number: "Experiment 7",
    title: "Classification with Logistic Regression & Decision Trees",
    desc: "Train binary and multiclass classifiers; compute confusion matrix, precision, recall, F1-score, and ROC-AUC curve.",
    tools: [
      { name: "Python", purpose: "Predictive model pipeline." },
      { name: "Scikit-learn", purpose: "LogisticRegression, DecisionTreeClassifier, classification_report, roc_curve, auc." },
      { name: "Seaborn", purpose: "ConfusionMatrixDisplay heatmap formatting." }
    ],
    status: "Completed",
    outputTitle: "Confusion Matrix & ROC-AUC Curve",
    outputImage: "assets/outputs/exp7_classification_roc.svg",
    outputLog: ">>> from sklearn.linear_model import LogisticRegression\n>>> from sklearn.metrics import classification_report, roc_auc_score\n[MODEL] Logistic Regression (solver='lbfgs', max_iter=500)\n[METRICS] Overall Accuracy: 95.54%\n[METRICS] Precision: 0.94 | Recall: 0.96 | F1-Score: 0.95\n[METRICS] ROC-AUC Area: 0.941\n[STATUS] Classification bounds verified.",
    lastUpdated: "Verified by Faculty"
  },
  {
    id: 8,
    number: "Experiment 8",
    title: "Unsupervised Clustering with K-Means & Hierarchical Clustering",
    desc: "Partition unlabeled multidimensional data using K-Means; determine optimal clusters via Elbow method and Silhouette score.",
    tools: [
      { name: "Python", purpose: "Clustering algorithm execution." },
      { name: "Scikit-learn", purpose: "KMeans, silhouette_score, silhouette_samples." },
      { name: "SciPy", purpose: "Hierarchical linkage clustering and dendrogram visualization." }
    ],
    status: "Completed",
    outputTitle: "K-Means Cluster Segmentation & Centroids",
    outputImage: "assets/outputs/exp8_kmeans_clusters.svg",
    outputLog: ">>> from sklearn.cluster import KMeans\n>>> from sklearn.metrics import silhouette_score\n[ELBOW METHOD] Tested k from 2 to 9. Optimal inertia bend detected at k=3.\n>>> kmeans = KMeans(n_clusters=3, random_state=42).fit(X_scaled)\n[METRICS] Silhouette Score for k=3: 0.682\n[SEGMENTS] Cluster 0: 420 samples | Cluster 1: 310 samples | Cluster 2: 270 samples.\n[STATUS] Unsupervised segmentation completed.",
    lastUpdated: "Verified by Faculty"
  },
  {
    id: 9,
    number: "Experiment 9",
    title: "Dimensionality Reduction with Principal Component Analysis (PCA)",
    desc: "Reduce feature space dimensionality while preserving maximal variance; analyze eigenvalues, eigenvectors, and scree plots.",
    tools: [
      { name: "Python", purpose: "Vector computation and PCA transformation." },
      { name: "Scikit-learn", purpose: "PCA (sklearn.decomposition), explained_variance_ratio_." },
      { name: "Matplotlib", purpose: "Scree plot and 2D principal component scatter projections." }
    ],
    status: "Completed",
    outputTitle: "PCA Explained Variance & 2D Projection",
    outputImage: "assets/outputs/exp9_pca_reduction.svg",
    outputLog: ">>> from sklearn.decomposition import PCA\n>>> pca = PCA(n_components=2)\n>>> X_pca = pca.fit_transform(X_scaled)\n[VARIANCE] PC1: 58.2% explained variance | PC2: 24.1% explained variance.\n[CUMULATIVE] 2 Principal Components account for 82.3% of total variance.\n[REDUCTION] Dimensionality reduced from 16 features to 2 components.\n[STATUS] PCA projection validated and approved.",
    lastUpdated: "Verified by Faculty"
  },
  {
    id: 10,
    number: "Experiment 10",
    title: "Association Rule Mining with Apriori Algorithm",
    desc: "Discover co-occurrence relationships and market basket patterns using transaction data, Support, Confidence, and Lift.",
    tools: [
      { name: "Python", purpose: "Data mining script environment." },
      { name: "MLxtend", purpose: "TransactionEncoder, apriori, association_rules." },
      { name: "Pandas", purpose: "One-hot transaction encoding and rule filtering by Lift threshold." }
    ],
    status: "Completed",
    outputTitle: "Market Basket Support & Confidence Rules",
    outputImage: "assets/outputs/exp10_apriori_rules.svg",
    outputLog: ">>> from mlxtend.frequent_patterns import apriori, association_rules\n[CONFIG] min_support = 0.15, min_confidence = 0.60\n[OUTPUT] Identified 14 frequent itemsets.\n[TOP RULE] {Bread, Butter} -> {Milk} (Support: 0.245, Confidence: 0.820, Lift: 2.45)\n[TOP RULE] {Diapers} -> {Beer} (Support: 0.182, Confidence: 0.745, Lift: 3.12)\n[STATUS] Association rules analyzed and verified.",
    lastUpdated: "Verified by Faculty"
  }
];

// ==================== DATABASE LAYER (IndexedDB + LocalStorage Sync) ====================
class DSLabDatabase {
  constructor() {
    this.dbName = "DSLab_Portal_DB";
    this.dbVersion = 1;
    this.db = null;
    this.ready = this.init();
  }

  async init() {
    return new Promise((resolve) => {
      // Setup IndexedDB
      if (!window.indexedDB) {
        console.warn("IndexedDB not supported, relying on LocalStorage fallback.");
        resolve(false);
        return;
      }
      const request = window.indexedDB.open(this.dbName, this.dbVersion);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("profile")) {
          db.createObjectStore("profile", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("experiments")) {
          db.createObjectStore("experiments", { keyPath: "id" });
        }
      };
      request.onsuccess = (e) => {
        this.db = e.target.result;
        resolve(true);
      };
      request.onerror = (e) => {
        console.error("IndexedDB error:", e);
        resolve(false);
      };
    });
  }

  // Load Profile from DB (checks IndexedDB -> LocalStorage -> Default)
  async getProfile() {
    await this.ready;
    // 1. Try Backend API first if available
    try {
      const res = await fetch('/api/profile', { method: 'GET', headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        const data = await res.json();
        if (data && data.name) {
          this.saveProfileLocal(data);
          return data;
        }
      }
    } catch (_) {
      // Backend not running, normal for static/file mode
    }

    // 2. Try IndexedDB
    if (this.db) {
      try {
        const p = await new Promise((resolve) => {
          const tx = this.db.transaction("profile", "readonly");
          const store = tx.objectStore("profile");
          const req = store.get("student");
          req.onsuccess = () => resolve(req.result ? req.result.data : null);
          req.onerror = () => resolve(null);
        });
        if (p) return p;
      } catch (err) {
        console.warn("IndexedDB profile read failed:", err);
      }
    }

    // 3. Try LocalStorage
    const local = localStorage.getItem("dslab_profile");
    if (local) {
      try {
        return JSON.parse(local);
      } catch (_) {}
    }

    // 4. Fallback to default
    await this.saveProfile(DEFAULT_PROFILE);
    return DEFAULT_PROFILE;
  }

  // Save Profile to DB (IndexedDB + LocalStorage + Backend API)
  async saveProfile(profileData) {
    await this.ready;
    this.saveProfileLocal(profileData);

    // Save to IndexedDB
    if (this.db) {
      try {
        const tx = this.db.transaction("profile", "readwrite");
        const store = tx.objectStore("profile");
        store.put({ id: "student", data: profileData });
      } catch (err) {
        console.warn("IndexedDB profile write error:", err);
      }
    }

    // Save to Backend API if active
    try {
      fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData)
      }).catch(() => {});
    } catch (_) {}

    return true;
  }

  saveProfileLocal(profileData) {
    try {
      localStorage.setItem("dslab_profile", JSON.stringify(profileData));
    } catch (e) {
      console.warn("LocalStorage profile write error:", e);
    }
  }

  normalizeExperiments(experiments) {
    if (!Array.isArray(experiments) || experiments.length === 0) return DEFAULT_EXPERIMENTS;

    const synced = DEFAULT_EXPERIMENTS.map((defaultExp) => {
      const existing = experiments.find((exp) => exp.id === defaultExp.id) || {};
      return {
        ...defaultExp,
        ...existing,
        id: defaultExp.id,
        number: defaultExp.number,
        title: defaultExp.title,
        desc: defaultExp.desc,
        tools: Array.isArray(existing.tools) ? existing.tools : defaultExp.tools,
        status: defaultExp.status,
        outputTitle: defaultExp.outputTitle,
        outputImage: defaultExp.outputImage,
        outputLog: defaultExp.outputLog,
        lastUpdated: defaultExp.lastUpdated
      };
    });

    return synced;
  }

  // Load Experiments from DB
  async getExperiments() {
    await this.ready;

    // 1. Try Backend API
    try {
      const res = await fetch('/api/experiments', { method: 'GET', headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const normalized = this.normalizeExperiments(data);
          this.saveExperimentsLocal(normalized);
          return normalized;
        }
      }
    } catch (_) {}

    // 2. Try IndexedDB
    if (this.db) {
      try {
        const exps = await new Promise((resolve) => {
          const tx = this.db.transaction("experiments", "readonly");
          const store = tx.objectStore("experiments");
          const req = store.getAll();
          req.onsuccess = () => resolve(req.result && req.result.length ? req.result : null);
          req.onerror = () => resolve(null);
        });
        if (exps && exps.length === DEFAULT_EXPERIMENTS.length) {
          const normalized = this.normalizeExperiments(exps);
          this.saveExperimentsLocal(normalized);
          return normalized;
        }
      } catch (err) {
        console.warn("IndexedDB experiments read failed:", err);
      }
    }

    // 3. Try LocalStorage
    const local = localStorage.getItem("dslab_experiments");
    if (local) {
      try {
        const parsed = JSON.parse(local);
        if (Array.isArray(parsed) && parsed.length === DEFAULT_EXPERIMENTS.length) {
          const normalized = this.normalizeExperiments(parsed);
          this.saveExperimentsLocal(normalized);
          return normalized;
        }
      } catch (_) {}
    }

    // 4. Default Seed
    await this.saveExperiments(DEFAULT_EXPERIMENTS);
    return DEFAULT_EXPERIMENTS;
  }

  // Save all experiments
  async saveExperiments(experimentsArray) {
    await this.ready;
    this.saveExperimentsLocal(experimentsArray);

    if (this.db) {
      try {
        const tx = this.db.transaction("experiments", "readwrite");
        const store = tx.objectStore("experiments");
        experimentsArray.forEach((exp) => store.put(exp));
      } catch (err) {
        console.warn("IndexedDB experiments write error:", err);
      }
    }

    try {
      fetch('/api/experiments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(experimentsArray)
      }).catch(() => {});
    } catch (_) {}

    return true;
  }

  // Update a single experiment
  async updateExperiment(updatedExp) {
    const exps = await this.getExperiments();
    const index = exps.findIndex((e) => e.id === updatedExp.id);
    if (index !== -1) {
      exps[index] = updatedExp;
      await this.saveExperiments(exps);
    }
    return exps;
  }

  saveExperimentsLocal(experimentsArray) {
    try {
      localStorage.setItem("dslab_experiments", JSON.stringify(experimentsArray));
    } catch (e) {
      console.warn("LocalStorage experiments write error:", e);
    }
  }
}

// Global Database Instance
const DB = new DSLabDatabase();

// ==================== APP STATE & CONTROLLER ====================
let currentProfile = null;
let currentExperiments = [];
let currentFilter = 'all';
let currentSearch = '';
let selectedExpForModal = null;
let stagedPhotoBase64 = null;
let stagedOutputBase64 = null;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  setupNavigation();
  setupModals();
  setupEventListeners();

  // Load from database
  await loadAndRenderData();
});

async function loadAndRenderData() {
  currentProfile = await DB.getProfile();
  currentExperiments = await DB.getExperiments();

  renderAllViews();
}

function renderAllViews() {
  renderProfileViews(currentProfile);
  renderHomeStats(currentExperiments);
  renderModulesGrid(DEFAULT_MODULES);
  renderHomeAccordion(currentExperiments);
  renderLabExecutions(currentExperiments);
  renderToolsTable(currentExperiments);
  renderProgressBars(currentExperiments);
}

// ==================== THEME MANAGEMENT ====================
function initTheme() {
  const saved = localStorage.getItem('dslab_theme') || 'dark';
  applyTheme(saved);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('dslab_theme', next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  if (icon && label) {
    if (theme === 'light') {
      icon.textContent = '🌙';
      label.textContent = 'Dark';
    } else {
      icon.textContent = '☀️';
      label.textContent = 'Light';
    }
  }
}

// ==================== NAVIGATION CONTROLLER ====================
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const brandLink = document.getElementById('brand-link');
  const mobileToggle = document.getElementById('mobileToggleBtn');
  const navMenu = document.getElementById('navMenu');

  function switchTab(tabId) {
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === tabId);
    });

    navLinks.forEach(link => {
      const target = link.getAttribute('data-tab');
      link.classList.toggle('active', target === tabId);
    });

    if (navMenu) navMenu.classList.remove('open');
    window.location.hash = tabId.replace('tab-', '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-tab');
      if (target) switchTab(target);
    });
  });

  if (brandLink) {
    brandLink.addEventListener('click', () => switchTab('tab-home'));
  }

  // Quick jump buttons on Home
  const btnGoExec = document.getElementById('btnGoToExecutions');
  if (btnGoExec) btnGoExec.addEventListener('click', () => switchTab('tab-executions'));

  const btnGoTools = document.getElementById('btnGoToTools');
  if (btnGoTools) btnGoTools.addEventListener('click', () => switchTab('tab-tools'));

  const btnGoModules = document.getElementById('btnGoToModules');
  if (btnGoModules) btnGoModules.addEventListener('click', () => switchTab('tab-modules'));

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Hash Routing support on load
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const validTabs = ['home', 'executions', 'tools', 'modules', 'profile'];
    if (validTabs.includes(hash)) {
      switchTab('tab-' + hash);
    }
  }
}

// ==================== PROFILE RENDERING ====================
function renderProfileViews(p) {
  if (!p) return;

  // 1. Home Sidebar Student ID Card
  const asidePhoto = document.getElementById('asideStudentPhoto');
  if (asidePhoto) asidePhoto.src = p.photo || 'assets/student_photo.jpg';

  const setT = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val || '—';
  };

  setT('asideName', p.name);
  setT('asideRollNo', p.rollNo);
  setT('asideSection', p.section);
  setT('asideBranch', p.branch);
  setT('asideFaculty', p.professor);

  const asideGh = document.getElementById('asideGithub');
  if (asideGh) asideGh.href = p.github || 'https://github.com';

  const asideLi = document.getElementById('asideLinkedin');
  if (asideLi) asideLi.href = p.linkedin || 'https://linkedin.com';

  const homeGh = document.getElementById('homeGithubLink');
  if (homeGh) homeGh.href = p.github || 'https://github.com';

  // 2. Dedicated Profile Tab
  const profilePhotoLg = document.getElementById('profilePhotoLarge');
  if (profilePhotoLg) profilePhotoLg.src = p.photo || 'assets/student_photo.jpg';

  setT('profileNameLarge', p.name);
  setT('profileRollLarge', `${p.rollNo} • ${p.branch}`);
  setT('profileDetailName', p.name);
  setT('profileDetailRollNo', p.rollNo);
  setT('profileDetailSection', p.section);
  setT('profileDetailBranch', p.branch);
  setT('profileDetailProfessor', p.professor);

  const pGh = document.getElementById('profileDetailGithub');
  if (pGh) {
    pGh.href = p.github || 'https://github.com';
    pGh.textContent = p.github || 'https://github.com';
  }

  const pLi = document.getElementById('profileDetailLinkedin');
  if (pLi) {
    pLi.href = p.linkedin || 'https://linkedin.com';
    pLi.textContent = p.linkedin || 'https://linkedin.com';
  }

  // Skills Pills
  const skillsContainer = document.getElementById('profileSkillsList');
  if (skillsContainer) {
    skillsContainer.innerHTML = '';
    const skillsList = Array.isArray(p.skills) ? p.skills : (p.skills || '').split(',').map(s => s.trim()).filter(Boolean);
    skillsList.forEach(s => {
      const pill = document.createElement('span');
      pill.className = 'skill-pill';
      pill.textContent = s;
      skillsContainer.appendChild(pill);
    });
  }
}

// ==================== HOME STATS & ACCORDION ====================
function renderHomeStats(experiments) {
  const total = experiments.length;
  const completed = experiments.filter(e => e.status === 'Completed').length;
  const inProgress = experiments.filter(e => e.status === 'In Progress').length;
  const pending = experiments.filter(e => e.status === 'Pending').length;

  const setV = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setV('statTotalExps', total);
  setV('statCompletedExps', completed);
  setV('statInProgressExps', inProgress);
  setV('statPendingExps', pending);

  const asideProg = document.getElementById('asideProgressBadge');
  if (asideProg) {
    asideProg.textContent = `${completed} / ${total} Done`;
    asideProg.style.color = completed === total ? 'var(--success)' : 'var(--accent)';
  }
}

function renderModulesGrid(modules = DEFAULT_MODULES) {
  const container = document.getElementById('modulesGrid');
  if (!container) return;

  container.innerHTML = modules.map(module => `
    <article class="module-card card">
      <div class="module-header">
        <div class="module-icon">${module.icon || '📘'}</div>
        <div>
          <span class="module-number">${escapeHtml(module.number)}</span>
          <h3>${escapeHtml(module.title)}</h3>
        </div>
      </div>
      <p class="module-summary">${escapeHtml(module.summary)}</p>
      <div class="module-outcomes">
        ${(module.outcomes || []).map(outcome => `<span class="module-chip">${escapeHtml(outcome)}</span>`).join('')}
      </div>
      <div class="module-footer">
        <span class="module-experiments-label">Experiments</span>
        <span class="module-experiments">${(module.experiments || []).join(' • ')}</span>
      </div>
    </article>
  `).join('');
}

function renderHomeAccordion(experiments) {
  const container = document.getElementById('homeExpAccordionList');
  if (!container) return;

  const searchInput = document.getElementById('homeSearchInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = experiments.filter(e => {
    if (!query) return true;
    const toolsStr = (e.tools || []).map(t => t.name).join(' ').toLowerCase();
    return e.title.toLowerCase().includes(query) ||
           e.number.toLowerCase().includes(query) ||
           e.desc.toLowerCase().includes(query) ||
           toolsStr.includes(query);
  });

  const countBadge = document.getElementById('homeExpCountBadge');
  if (countBadge) countBadge.textContent = `${filtered.length} of ${experiments.length} Experiments`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px; color: var(--mute);">
        No matching experiments found for "${escapeHtml(query)}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((exp, idx) => {
    const badgeClass = exp.status === 'Completed' ? 'status-completed' : (exp.status === 'In Progress' ? 'status-inprogress' : 'status-pending');
    const toolsHtml = (exp.tools || []).map(t => `<span class="tool-tag">${escapeHtml(t.name)}</span>`).join('');

    return `
      <div class="exp-accordion" data-id="${exp.id}">
        <button class="exp-accordion-btn" aria-expanded="false">
          <div class="exp-num-badge">${exp.id}</div>
          <div class="exp-accordion-title">
            <b>${escapeHtml(exp.number)} — ${escapeHtml(exp.title)}</b>
            <span>${(exp.tools || []).length} Tools Used • Status: <strong style="color: currentColor;">${escapeHtml(exp.status)}</strong></span>
          </div>
          <span class="status-badge ${badgeClass}" style="margin-right: 8px;">${escapeHtml(exp.status)}</span>
          <span class="exp-chevron">›</span>
        </button>
        <div class="exp-accordion-content">
          <p style="margin-bottom: 8px;">${escapeHtml(exp.desc)}</p>
          <div class="exp-detail-pills">
            ${toolsHtml}
          </div>
          <div style="margin-top: 12px; display: flex; gap: 8px;">
            <button class="btn btn-secondary btn-sm" onclick="openOutputModalById(${exp.id})">
              Preview Execution Output ↗
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Accordion toggle clicks
  container.querySelectorAll('.exp-accordion-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parent = btn.closest('.exp-accordion');
      const isOpen = parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });
}

// ==================== LAB EXECUTIONS RENDERING ====================
function renderLabExecutions(experiments) {
  const container = document.getElementById('executionsList');
  if (!container) return;

  const searchInput = document.getElementById('executionsSearchInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = experiments.filter(e => {
    // Status filter
    if (currentFilter !== 'all' && e.status !== currentFilter) return false;
    // Search filter
    if (query) {
      const toolsStr = (e.tools || []).map(t => t.name).join(' ').toLowerCase();
      return e.title.toLowerCase().includes(query) ||
             e.number.toLowerCase().includes(query) ||
             e.desc.toLowerCase().includes(query) ||
             toolsStr.includes(query);
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="card" style="text-align: center; padding: 40px; color: var(--mute);">
        No lab experiments match the selected filter.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(exp => {
    const badgeClass = exp.status === 'Completed' ? 'status-completed' : (exp.status === 'In Progress' ? 'status-inprogress' : 'status-pending');
    const toolsTags = (exp.tools || []).map(t => `<span class="tool-tag">${escapeHtml(t.name)}</span>`).join('');

    return `
      <article class="exp-card card" data-id="${exp.id}">
        
        <!-- Left: Experiment Info -->
        <div class="exp-info">
          <div class="exp-card-top">
            <span class="exp-card-number">${escapeHtml(exp.number)}</span>
            <span class="status-badge ${badgeClass}">
              <span class="status-dot"></span>
              ${escapeHtml(exp.status)}
            </span>
          </div>

          <h3 class="exp-card-title">${escapeHtml(exp.title)}</h3>
          <p class="exp-card-desc">${escapeHtml(exp.desc)}</p>

          <div class="exp-card-tools">
            <span style="font-size: 11px; color: var(--mute); font-weight: 600;">TOOLS:</span>
            ${toolsTags}
          </div>

          <div class="exp-card-actions">
            <button class="btn btn-primary btn-sm" onclick="openOutputModalById(${exp.id})">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              View Output &amp; Details
            </button>

            <button class="btn btn-secondary btn-sm" onclick="triggerQuickUpload(${exp.id})">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Output
            </button>

            <!-- Quick Status Switcher Dropdown -->
            <select class="form-select" style="width: auto; padding: 4px 8px; font-size: 12px; height: 32px;" onchange="updateExpStatusQuick(${exp.id}, this.value)">
              <option value="Completed" ${exp.status === 'Completed' ? 'selected' : ''}>Status: Completed</option>
              <option value="In Progress" ${exp.status === 'In Progress' ? 'selected' : ''}>Status: In Progress</option>
              <option value="Pending" ${exp.status === 'Pending' ? 'selected' : ''}>Status: Pending</option>
            </select>
          </div>
        </div>

        <!-- Right: Output Preview Box -->
        <div class="exp-preview-box">
          <div class="preview-thumb-container" onclick="openOutputModalById(${exp.id})" title="Click to expand full output">
            <img class="preview-thumb-img" src="${exp.outputImage || 'assets/outputs/exp1_data_cleaning.svg'}" alt="Preview ${escapeHtml(exp.title)}" />
            <div class="preview-overlay">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              Click to Expand
            </div>
          </div>
          <div class="preview-meta">
            <span class="preview-title" title="${escapeHtml(exp.outputTitle || 'Execution Output')}">${escapeHtml(exp.outputTitle || 'Output Preview')}</span>
            <span>${escapeHtml(exp.lastUpdated || 'Saved')}</span>
          </div>
        </div>

      </article>
    `;
  }).join('');
}

// ==================== TOOLS TABLE RENDERING ====================
function renderToolsTable(experiments) {
  const tbody = document.getElementById('toolsTableBody');
  if (!tbody) return;

  tbody.innerHTML = experiments.map(exp => {
    const toolsChips = (exp.tools || []).map(t => `<span class="tool-tag" style="margin: 2px 2px 2px 0;">${escapeHtml(t.name)}</span>`).join('');

    const purposeList = (exp.tools || []).map(t => `
      <div class="tool-purpose-item">
        <span class="tool-name-badge">${escapeHtml(t.name)}</span>
        <span class="tool-desc-text">${escapeHtml(t.purpose)}</span>
      </div>
    `).join('');

    return `
      <tr>
        <td class="exp-num-cell">
          <strong>${escapeHtml(exp.number)}</strong>
        </td>
        <td class="exp-title-cell">
          <b>${escapeHtml(exp.title)}</b>
          <span>Experiment ID #${exp.id}</span>
        </td>
        <td>
          <div style="display: flex; flex-wrap: wrap;">
            ${toolsChips}
          </div>
        </td>
        <td>
          <div class="tool-purpose-list">
            ${purposeList}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ==================== PROGRESS BAR RENDERING ====================
function renderProgressBars(experiments) {
  const total = experiments.length;
  const completed = experiments.filter(e => e.status === 'Completed').length;
  const percent = Math.round((completed / total) * 100);

  const fillEl = document.getElementById('profileProgressFill');
  if (fillEl) fillEl.style.width = `${percent}%`;

  const textEl = document.getElementById('profileProgressText');
  if (textEl) textEl.textContent = `${completed} / ${total} Experiments Completed (${percent}%)`;

  const statusEl = document.getElementById('profileProgressStatus');
  if (statusEl) {
    if (completed === total) {
      statusEl.textContent = "Status: All Lab Experiments Completed & Ready for Evaluation";
      statusEl.style.color = "var(--success)";
    } else if (completed >= 7) {
      statusEl.textContent = "Status: Satisfactory Academic Progress";
      statusEl.style.color = "var(--text)";
    } else {
      statusEl.textContent = "Status: Lab Submissions Pending";
      statusEl.style.color = "var(--warning)";
    }
  }
}

// ==================== EDIT PROFILE CONTROLLER ====================
function setupModals() {
  // 1. Edit Profile Modal
  const editProfileModal = document.getElementById('editProfileModal');
  const closeEditBtn = document.getElementById('closeEditProfileBtn');
  const cancelEditBtn = document.getElementById('cancelEditProfileBtn');
  const editProfileForm = document.getElementById('editProfileForm');
  const photoInput = document.getElementById('formPhotoInput');
  const photoPreview = document.getElementById('formPhotoPreview');

  const openEditModal = () => {
    if (!currentProfile) return;
    document.getElementById('formName').value = currentProfile.name || '';
    document.getElementById('formRollNo').value = currentProfile.rollNo || '';
    document.getElementById('formSection').value = currentProfile.section || '';
    document.getElementById('formBranch').value = currentProfile.branch || '';
    document.getElementById('formProfessor').value = currentProfile.professor || '';
    document.getElementById('formGithub').value = currentProfile.github || '';
    document.getElementById('formLinkedin').value = currentProfile.linkedin || '';
    
    const skillsStr = Array.isArray(currentProfile.skills) ? currentProfile.skills.join(', ') : (currentProfile.skills || '');
    document.getElementById('formSkills').value = skillsStr;

    photoPreview.src = currentProfile.photo || 'assets/student_photo.jpg';
    stagedPhotoBase64 = null;

    editProfileModal.classList.add('active');
  };

  const closeEditModal = () => {
    editProfileModal.classList.remove('active');
  };

  const btnAsideEdit = document.getElementById('btnEditProfileAside');
  if (btnAsideEdit) btnAsideEdit.addEventListener('click', openEditModal);

  const btnMainEdit = document.getElementById('btnEditProfileMain');
  if (btnMainEdit) btnMainEdit.addEventListener('click', openEditModal);

  if (closeEditBtn) closeEditBtn.addEventListener('click', closeEditModal);
  if (cancelEditBtn) cancelEditBtn.addEventListener('click', closeEditModal);

  // Photo file picker
  if (photoInput) {
    photoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          stagedPhotoBase64 = event.target.result;
          photoPreview.src = stagedPhotoBase64;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Handle Form Submit
  if (editProfileForm) {
    editProfileForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const rawSkills = document.getElementById('formSkills').value;
      const skillsArray = rawSkills.split(',').map(s => s.trim()).filter(Boolean);

      const updated = {
        name: document.getElementById('formName').value.trim(),
        rollNo: document.getElementById('formRollNo').value.trim(),
        section: document.getElementById('formSection').value.trim(),
        branch: document.getElementById('formBranch').value.trim(),
        professor: document.getElementById('formProfessor').value.trim(),
        github: document.getElementById('formGithub').value.trim() || 'https://github.com',
        linkedin: document.getElementById('formLinkedin').value.trim() || 'https://linkedin.com',
        skills: skillsArray.length ? skillsArray : DEFAULT_PROFILE.skills,
        photo: stagedPhotoBase64 || currentProfile.photo || 'assets/student_photo.jpg'
      };

      currentProfile = updated;
      await DB.saveProfile(updated);

      renderProfileViews(currentProfile);
      closeEditModal();
      showToast('Profile details updated and saved to database successfully!');
    });
  }

  // 2. Output Preview & Upload Modal
  const outputModal = document.getElementById('outputModal');
  const closeOutputBtn = document.getElementById('closeOutputModalBtn');
  const outputFileInput = document.getElementById('outputModalFileInput');
  const outputModalImg = document.getElementById('outputModalImg');

  const closeOutputModal = () => {
    outputModal.classList.remove('active');
    selectedExpForModal = null;
    stagedOutputBase64 = null;
    if (outputFileInput) outputFileInput.value = '';
  };

  if (closeOutputBtn) closeOutputBtn.addEventListener('click', closeOutputModal);

  // File Upload inside Modal
  if (outputFileInput) {
    outputFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          stagedOutputBase64 = event.target.result;
          outputModalImg.src = stagedOutputBase64;
          showToast(`Loaded ${file.name}. Click 'Save Changes' to update database.`);
        };
        reader.readAsDataURL(file);
      } else {
        // Text / code / log file
        const reader = new FileReader();
        reader.onload = (event) => {
          const consoleEl = document.getElementById('outputModalConsole');
          if (consoleEl) {
            consoleEl.textContent = `[UPLOADED: ${file.name}]\n` + event.target.result;
          }
          showToast(`Loaded text content from ${file.name}.`);
        };
        reader.readAsText(file);
      }
    });
  }

  // Save changes button in Output Modal
  const saveExpBtn = document.getElementById('saveExecutionChangesBtn');
  if (saveExpBtn) {
    saveExpBtn.addEventListener('click', async () => {
      if (!selectedExpForModal) return;

      const newStatus = document.getElementById('outputStatusSelect').value;
      selectedExpForModal.status = newStatus;
      selectedExpForModal.lastUpdated = "Updated just now";

      if (stagedOutputBase64) {
        selectedExpForModal.outputImage = stagedOutputBase64;
        selectedExpForModal.outputTitle = "Custom Student Uploaded Output";
      }

      await DB.updateExperiment(selectedExpForModal);
      currentExperiments = await DB.getExperiments();

      renderAllViews();
      closeOutputModal();
      showToast(`Saved changes for ${selectedExpForModal.number} to database!`);
    });
  }

  // Close modals on escape key or backdrop click
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeEditModal();
      closeOutputModal();
    }
  });

  [editProfileModal, outputModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  });
}

// Open Output Modal for specific experiment
window.openOutputModalById = function(expId) {
  const exp = currentExperiments.find(e => e.id === Number(expId));
  if (!exp) return;

  selectedExpForModal = exp;
  stagedOutputBase64 = null;

  document.getElementById('outputModalTitle').textContent = `${exp.number} — Execution Details`;
  document.getElementById('outputExpName').textContent = `${exp.number} — ${exp.title}`;
  document.getElementById('outputExpDesc').textContent = exp.desc;

  const badge = document.getElementById('outputModalBadge');
  if (badge) {
    badge.className = `status-badge ${exp.status === 'Completed' ? 'status-completed' : (exp.status === 'In Progress' ? 'status-inprogress' : 'status-pending')}`;
    badge.textContent = exp.status;
  }

  const imgEl = document.getElementById('outputModalImg');
  if (imgEl) imgEl.src = exp.outputImage || 'assets/outputs/exp1_data_cleaning.svg';

  const consoleEl = document.getElementById('outputModalConsole');
  if (consoleEl) consoleEl.textContent = exp.outputLog || 'No console log output recorded.';

  const statusSelect = document.getElementById('outputStatusSelect');
  if (statusSelect) statusSelect.value = exp.status;

  const dlBtn = document.getElementById('downloadOutputBtn');
  if (dlBtn) {
    dlBtn.href = exp.outputImage || '#';
    dlBtn.download = `${exp.number.replace(/\s+/g, '_')}_output.svg`;
  }

  const outputModal = document.getElementById('outputModal');
  if (outputModal) outputModal.classList.add('active');
};

// Quick status updater from card dropdown
window.updateExpStatusQuick = async function(expId, newStatus) {
  const exp = currentExperiments.find(e => e.id === Number(expId));
  if (!exp) return;

  exp.status = newStatus;
  exp.lastUpdated = "Status updated just now";
  await DB.updateExperiment(exp);
  currentExperiments = await DB.getExperiments();

  renderAllViews();
  showToast(`Updated ${exp.number} status to "${newStatus}"!`);
};

// Quick file upload trigger directly from card
window.triggerQuickUpload = function(expId) {
  const exp = currentExperiments.find(e => e.id === Number(expId));
  if (!exp) return;

  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'file';
  hiddenInput.accept = 'image/*,.pdf,.txt,.py,.ipynb,.csv';
  hiddenInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        exp.outputImage = event.target.result;
        exp.outputTitle = `Uploaded: ${file.name}`;
        exp.status = 'Completed';
        exp.lastUpdated = `Uploaded ${file.name}`;

        await DB.updateExperiment(exp);
        currentExperiments = await DB.getExperiments();

        renderAllViews();
        showToast(`Successfully uploaded output for ${exp.number}!`);
      };
      reader.readAsDataURL(file);
    }
  };
  hiddenInput.click();
};

// ==================== EVENT LISTENERS (SEARCH & FILTERS) ====================
function setupEventListeners() {
  // Home Search Input
  const homeSearch = document.getElementById('homeSearchInput');
  if (homeSearch) {
    homeSearch.addEventListener('input', () => {
      renderHomeAccordion(currentExperiments);
    });
  }

  // Executions Search Input
  const execSearch = document.getElementById('executionsSearchInput');
  if (execSearch) {
    execSearch.addEventListener('input', () => {
      renderLabExecutions(currentExperiments);
    });
  }

  // Executions Filter Pills
  const filterPills = document.querySelectorAll('#executionFilterPills .filter-btn');
  filterPills.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderLabExecutions(currentExperiments);
    });
  });
}

// ==================== UTILITIES ====================
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return String(str || '');
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}
