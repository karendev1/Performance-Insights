# Performance Insights

A web application that analyzes website performance and provides detailed insights into performance, accessibility, SEO, and best practices.

## 🚀 Overview

Performance Insights allows users to submit a website URL and receive a comprehensive performance report, helping developers identify optimization opportunities and improve the overall user experience.

This project also serves as a showcase of modern Front-End architecture, scalability, maintainability, and development best practices.

---

## ✨ Features

### MVP

* Analyze a website URL
* Display performance metrics
* Display accessibility metrics
* Display SEO metrics
* Display best practices metrics
* Highlight optimization opportunities
* Visualize scores with intuitive UI components

### Future Enhancements

* Analysis history
* Report comparison
* Report export (PDF)
* Analytics dashboard
* Report sharing
* User authentication

---

## 🛠️ Tech Stack

### Front-End

* React
* TypeScript
* Vite
* React Router
* TanStack Query
* Tailwind CSS
* Shadcn/UI
* Axios

### Code Quality

* ESLint
* Prettier
* Husky
* Commitlint

---

## 📁 Project Structure

```text
src/
├── app/
│   └── providers/
│
├── pages/
│
├── features/
│
├── routes/
│
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── services/
│   ├── types/
│   └── utils/
│
├── App.tsx
├── main.tsx
└── index.css
```

### Folder Responsibilities

* `pages`: application pages and route entry points.
* `features`: business features and domain logic.
* `shared`: reusable components, hooks, utilities, and services.
* `routes`: routing configuration.
* `app`: global providers and application setup.

---

## ⚙️ Getting Started

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project directory

```bash
cd performance-insights
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

### Fix ESLint issues

```bash
npm run lint:fix
```

### Format code

```bash
npm run format
```

### Check formatting

```bash
npm run format:check
```

---

## 🧾 Commit Convention

This project follows the Conventional Commits specification.

Examples:

```text
feat: add URL analysis form
fix: handle API timeout
docs: update README
refactor: extract audit service
chore: configure husky
```

---

## 🏗️ Architecture

The project follows a feature-oriented architecture focused on scalability and maintainability.

### Principles

* Separation of Concerns
* Reusable Components
* Feature-Based Organization
* Clean Code
* SOLID Principles
* DRY
* KISS

---

## 🎯 Roadmap

### Phase 1 — Foundation

* [x] React + TypeScript
* [x] ESLint
* [x] Prettier
* [x] Path Aliases
* [x] Tailwind CSS
* [x] Shadcn/UI
* [x] React Router
* [x] TanStack Query
* [x] Commitlint + Husky

### Phase 2 — MVP

* [ ] Landing page
* [ ] URL analysis form
* [ ] API integration
* [ ] Performance report
* [ ] Error handling
* [ ] Loading states

### Phase 3 — Enhancements

* [ ] Analysis history
* [ ] Report comparison
* [ ] PDF export
* [ ] Analytics dashboard

---

## 👩‍💻 Author

Karen Santana

Software Engineer | Front-End Developer

---

## 📄 License

This project is licensed under the MIT License.
