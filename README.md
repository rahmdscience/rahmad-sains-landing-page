# Landing Page – Rahmad Sains
Siap. Ini **README.md** yang **rapi, jujur, dan relevan** dengan **index.html, style.css, app.js**, **tanpa emoji**, dan **jelas menyebutkan penggunaan foto/video lokal**.
Tinggal copy → save sebagai `README.md` di root repo kamu.

---

```md
# Personal Website – Rahmad Sains

This repository contains the source code for my personal website.  
The site is built as a static web project using HTML, CSS, and JavaScript, with a focus on simplicity, performance, and personal storytelling.

The website includes sections such as profile, interests, setup & gear, gallery (images and videos), and other personal content.

---


````

---

## Files Overview

### `index.html`
The main entry point of the website.

- Uses **Tailwind CSS (CDN)** for layout and design
- Defines the main layout structure (navbar, main content, footer)
- Mounting points for dynamic content rendered via JavaScript
- Optimised for responsive design and smooth scrolling
- Includes basic content protection (right-click disabled)

---

### `style.css`
Custom styling layer that complements Tailwind.

- Imports the **Inter** font
- Defines typography scaling (mobile-first)
- Custom scrollbar handling
- Background grain texture for visual depth
- Micro-interactions and animation keyframes
- Touch-friendly interaction sizing for mobile devices

---

### `app.js`
Handles all website logic and dynamic rendering.

- Renders sections dynamically (home, gallery, interests, setup & gear, etc.)
- Manages modal popups for gallery items
- Handles image and video gallery data
- Controls animations, transitions, and UI interactions
- Separates data (JSON-style objects) from rendering logic

---

## Gallery Assets

The website uses **local media assets** stored inside the `foto/` directory.

- Images: `.jpg`, `.webp`
- Videos: `.mp4`
- Video thumbnails: `.webp` generated from videos

All gallery items are referenced using **relative paths**, for example:

```js
src: "./foto/1.jpg"
videoSrc: "./foto/video5.mp4"
````

This ensures compatibility with **GitHub Pages**.

---

## Deployment

This project is deployed using **GitHub Pages**.

Important notes:

* All images and videos must be committed to the repository
* Media file paths must be relative
* Large video files should be compressed to avoid GitHub size limits

---

## Development Notes

* Tailwind is used via CDN for simplicity (no build step)
* JavaScript is written in vanilla ES6
* Designed to be easily extendable (new sections, gallery items, or modal content)

---

## License

This project is for personal use and learning purposes.
All media content belongs to the author unless stated otherwise.

```

---

Kalau mau next step:
- README versi **lebih profesional (portfolio-ready)**
- README **ringkas 1 halaman**
- atau **tambahin screenshot preview di README**

tinggal bilang.
```
