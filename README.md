# Portfolio | Automata System Interface

A high-precision technical portfolio developed with **Astro** and **Tailwind CSS**, adhering to a "melancholic industrialism" aesthetic.

## Overview

This repository hosts a professional portfolio implemented as a web application that emulates a sophisticated, futuristic operating system interface. The architecture follows a brutalist-minimalist design philosophy, optimized for performance, structural visibility, and accessibility.

## Tech Stack

- **Framework:** [Astro 4](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typography:** Google Fonts (Newsreader, Inter, IBM Plex Mono)
- **Deployment:** GitHub Pages via GitHub Actions
- **i18n:** Custom internationalization framework for English and Spanish locales

## Key Features

- **Industrial Aesthetic:** Custom design system utilizing tonal layering, sharp geometric edges, and terminal-inspired textures.
- **Dynamic Project Rendering:** Automated project visualization from structured data, including sequential system ID generation.
- **Localization:** Comprehensive English/Spanish support with automated language detection and localized routing.
- **CI/CD Integration:** Automated deployment pipeline via GitHub Actions, triggered upon updates to the main branch.
- **Optimized Accessibility:** High-contrast color palettes and refined typography to ensure readability across diverse hardware.

## Project Structure

```text
├── .github/workflows/    # Automated deployment workflows (GitHub Actions)
├── src/
│   ├── components/       # Reusable UI modules
│   ├── i18n/             # Localization keys and logic
│   ├── layouts/          # Core page templates
│   ├── pages/            # Multi-language routing architecture
│   └── images/           # Optimized static assets and thumbnails
├── astro.config.mjs      # Framework configuration and i18n routing
└── tailwind.config.mjs   # Design system tokens and custom fonts
```

## Local Development

Execution of the following steps enables local environment setup:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/frodrigue60/frodrigue60.github.io.git
   cd frodrigue60.github.io
   ```

2. **Dependency Installation:**
   ```bash
   npm install
   ```

3. **Development Server Initialization:**
   ```bash
   npm run dev
   ```

4. **Production Build Generation:**
   ```bash
   npm run build
   ```

## Deployment

Continuous deployment is managed through **GitHub Pages** via GitHub Actions. The deployment logic is defined within `.github/workflows/deploy.yml`.

Deployment Process:
1. Commit and push modifications to the `main` branch.
2. Monitor progress within the **Actions** tab of the GitHub repository.
3. Upon completion, the application is accessible at `https://frodrigue60.github.io`.

## License

This software is open-source and distributed under the [MIT License](LICENSE).

---

_Built with precision for the desolate digital landscape._
