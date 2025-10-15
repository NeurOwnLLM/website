# neurown_website/AGENTS.md

## AI Coding Agent Instructions for `neurown_website`

### Project Overview

We are building the official website for **NeurOwn**, a German company specializing in **AI and machine learning hardware, software, and consulting**.
The website serves as a platform to:

* Present **NeurOwn’s mission, services, and team**
* Offer **contact options** for potential clients
* Communicate the philosophy of **owning AI infrastructure** instead of depending on cloud providers

---

## Technical Stack

| Category                 | Technologies                         |
| ------------------------ | ------------------------------------ |
| **Frontend Framework**   | React (TypeScript)                   |
| **Bundler / Build Tool** | Vite                                 |
| **Styling**              | **SCSS Modules**                     |
| **Package Manager**      | **pnpm**                             |
| **Architecture**         | Static Single Page Application (SPA) |
| **Languages**            | TypeScript, JavaScript, HTML, SCSS   |

> **Guideline:** The site must build statically and be fully deployable without a backend.

---

## Content Structure

A **single-page React application** with smooth navigation between sections:

1. **Hero Section**
   * Engaging headline, company slogan, and strong call-to-action button
   * Optional animations or transitions for visual appeal

2. **About Section**
   * Description of company mission and philosophy
   * Emphasis on **AI ownership and local infrastructure**

3. **Services Section**
   * Overview of:
     * Hardware for AI computing
     * Initial software configuration
     * Consulting and deployment services

4. **Contact Section**
   * Simple form or email link for inquiries
   * Optional embedded location map or contact information

---

## Design & UX Guidelines

* **Style:** Modern, clean, and professional
* **Aesthetic:** Light, minimalistic, and dynamic
* **Typography:** Sans-serif fonts, consistent sizing, and clear hierarchy
* **Color Scheme:** Modern muted tones with one accent color (AI/tech-inspired)
* **Animations:** Subtle fade, slide, or scale transitions — minimal but engaging
* **Responsiveness:** Mobile-first design that adapts gracefully to all screen sizes
* **Accessibility:** Follow best practices (contrast, keyboard navigation, alt text)

> Create reusable UI components for sections, buttons, navigation, and layout.
> Support dark/light theme switching via a **global ThemeContext**.
> Use lower case file names (e.g., `heroSection.tsx`).

---

## Global State Management

Use React’s **Context API** for shared state such as:

* Theme (dark/light)
* Possibly navigation or layout preferences

---

## Development Workflow

1. Always use **pnpm** as the package manager.
2. Enable **TypeScript strict mode** for full type safety.
3. Use **functional components** with hooks — no class components.
4. Use **SCSS modules** (`.module.scss`) for all styling:

   * Scoped per component
   * Define variables, mixins, and base styles in a global `styles/` folder
   * Follow BEM-like class naming for clarity

5. Use semantic HTML and maintain a clear component hierarchy.

6. **Lint and build** the project to verify correctness:

   ```
   pnpm run lint
   pnpm run build
   ```

---

## ⚡ AI Agent Coding Principles

* ✅ **Autonomy with communication:** Try to implement independently; ask the human developer when blocked.
* ✅ **Code readability:** Favor clarity over cleverness — self-documenting code is preferred.
* ✅ **Consistency:** Match existing file structure, naming, and style conventions.
* ✅ **Testing:** Ensure linting passes and builds succeed.
* ✅ **Documentation:** Add inline comments for non-obvious logic; update component-level docs as needed.
* ⚠️ **Do not** alter configuration files (Vite, tsconfig, etc.) unless necessary and explained.
* ⚠️ **Do not** add dependencies without clear justification.

---

## Collaboration Notes

* The **human developer (user)** is an experienced engineer — ask concise, technical questions if something is unclear.
* When making decisions, explain your reasoning briefly and clearly.
* Use **semantic commits**:

  * `feat: add hero section`
  * `fix: adjust mobile layout`
  * `style: update scss variables`
  * `refactor: extract theme context`

---

## Definition of Done (DoD)

A task is complete when:

* [ ] Code compiles and builds successfully (`pnpm run build`)
* [ ] Linting passes with no errors or warnings (`pnpm run lint`)
* [ ] Theme switching works correctly
* [ ] Layout is responsive on mobile, tablet, and desktop
* [ ] SCSS modules are used with no style leakage
* [ ] TypeScript passes with no errors or warnings
* [ ] Design aligns with NeurOwn’s modern, clean aesthetic
* [ ] All commits are clear and atomic
