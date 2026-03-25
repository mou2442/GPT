# Power System v0.1

A small static system for low-power days.

## Purpose

This repo hosts a lightweight "power supply" interface for days when energy is low but not fully collapsed. It is designed to work in two modes:

1. **Local**: open the site directly or serve it locally.
2. **GitHub Pages**: publish the `docs/` folder as a static site.

## Core idea

This is not a productivity dashboard. It is a **low-voltage operating panel**.

It separates inputs into four channels:

- visual
- audio
- mechanical
- curiosity

It also keeps a simple `drops/` folder where new fragments can be added over time. A fragment can be a note, prompt, image reference, mini task, or a small piece of preloaded unknown material.

## Repo structure

```text
/docs
  index.html
  styles.css
  app.js
  data/
    panel.json
/drops
  2026-03-25-welcome.md
```

## How to use

### Local

Option 1: open `docs/index.html` directly.

Option 2:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/docs/`.

### GitHub Pages

Set GitHub Pages to deploy from the `docs/` folder on the target branch or after merging to `main`.

## Update pattern

When new material is added later, prefer these paths:

- `docs/data/panel.json` for structured panel entries
- `drops/*.md` for looser fragments

This keeps the front end stable while allowing ongoing deposits.
