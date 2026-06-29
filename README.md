# 📷 Pixstock

> A digital stock media library built to explore, search, and favorite high-quality photos and videos through a fluid, fast, and responsive user experience.

---

## 🚀 About the Project

**Pixstock** is a modular multi-page application (MPA) focused on performance and asynchronous data consumption. The platform integrates directly with the Pexels API to provide real-time photo and video collections. It features a persistent favorites management system and native support for dynamic themes (Light/Dark mode).

💻 **Access the live project:** [Live Deploy on Vercel](https://pixstock-git-main-yasmims-projects-4433e724.vercel.app/)

---

## 🛠️ Technologies & Tools

The application's ecosystem was built using the following technologies:

*   **Front-end:** HTML5, CSS3 (Native variables, Flexbox, CSS Grid), and Vanilla JavaScript (ES6+ Modules).
*   **Build Tool & Bundler:** Vite (Configured to manage multiple HTML entry points).
*   **Integrations:** Pexels API (Asynchronous data fetching).
*   **UI Components:** Google Material Symbols & Google Fonts.
*   **Deploy & Hosting:** Vercel (Configured via `vercel.json` for route handling).

---

## 📦 Key Features

*   **Smart Theme Toggle:** An isolated Light and Dark mode system with local preference persistence.
*   **Structured Navigation (MPA):** Modular separation of pages and specific scripts for Photos, Videos, Collections, and Favorites.
*   **Advanced Search:** Dynamic filters and segment buttons to refine API search results.
*   **Local Favorites Management:** Real-time saving and deleting of media using the browser's local storage.
*   **Adaptive Layout:** An optimized responsive grid designed to render media flawlessly across mobile, tablet, and desktop devices.




## 🔧 Directory Structure

The project architecture is organized as follows:

```text
├── assets/         # Static images and support icons
├── css/            # Global stylesheets (style.css)
├── js/             # Core logic modules and JavaScript components
│   ├── utils/      # Utility helper functions
│   ├── app.js
│   ├── global.js
│   └── search.js
├── pages/          # Secondary HTML pages with their respective scripts
│   ├── collections/
│   ├── favorite/
│   ├── photos/
│   └── videos/
├── public/         # Static files copied directly to the build root
│   └── js/
│       └── theme.js
├── index.html      # Home Page
├── package.json    # Project manifest and automation scripts
└── vercel.json     # Route rewrite rules for the production environment

```

---

## ⚙️ How to Run the Project Locally
  1. **Clone the repository:**

  ```bash
    git clone [https://github.com/YasmimRodrigues/pixstock.git](https://github.com/YasmimRodrigues/pixstock.git)
  ```
  2. **Navigate to the project directory:**

  ```bash
    cd pixstock
  ```
  3. **Install the required dependencies:**

  ```bash
    npm install
  ```
  4. **Start the local development server (Vite):**

  ```bash
    npm run dev
  ```
  5. **To build and test the production environment locally:**
  
  ```bash
    npm run build
    npm run preview
  ```

---
