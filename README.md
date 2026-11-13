# NEXORA — SaaS Landing Page Template

A responsive React + Vite landing page starter with a violet cosmic background, theme switching, GSAP scroll reveals, reusable components, local data arrays, and an optional API content layer.

## Requirements

- Node.js 18+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/       Reusable page sections and UI
├── data/             Local editable content arrays
├── hooks/            Theme and GSAP animation hooks
├── services/         API client and content source selector
├── styles/           Design tokens, global styles, responsive rules
├── App.jsx
└── main.jsx
```

## Customize local content

Edit the files in `src/data/`:

- `features.js`
- `pricing.js`
- `testimonials.js`
- `faq.js`

The UI maps over these arrays, so you can add, remove, or reorder entries without editing the section components.

## Use remote API content

1. Copy `.env.example` to `.env`.
2. Set `VITE_USE_REMOTE_CONTENT=true`.
3. Set `VITE_API_BASE_URL` to your backend base URL.
4. Implement these endpoints on your server:

| Endpoint | Expected response |
|---|---|
| `GET /api/features` | `[{ "id": 1, "title": "...", "description": "...", "icon": "sparkles" }]` |
| `GET /api/pricing` | `[{ "id": 1, "name": "...", "price": 19, "period": "month", "description": "...", "features": [], "highlighted": false }]` |
| `GET /api/testimonials` | `[{ "id": 1, "name": "...", "role": "...", "quote": "...", "initials": "JD" }]` |
| `GET /api/faq` | `[{ "id": 1, "question": "...", "answer": "..." }]` |

If remote content is enabled, the page requests all sections concurrently. If the API is unavailable, it falls back to local data and displays the page normally.

**Important:** Vite environment variables prefixed with `VITE_` are exposed in the browser. Never put private API keys or secrets in them. Authenticate protected requests through your backend.

## Theme

The theme toggle stores the selected preference in `localStorage`. CSS variables are defined in `src/styles/variables.css`.

## Animations

GSAP + ScrollTrigger handles reveal animations. The hook respects the user's reduced-motion preference. Add `data-reveal` to an element to opt it into the default reveal animation.

## Accessibility notes

- Semantic sections and buttons are used throughout.
- Navigation has an accessible mobile toggle.
- FAQ items use native buttons with expanded state.
- Reduced motion is respected.
- Theme toggle has an accessible label.

## License

MIT. You may use, modify, and distribute this template. Keep the license notice with copies of the project.
