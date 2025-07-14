# URL Shortener - Design Notes

## Tech Used
- React for frontend SPA.
- React Router DOM for pages.
- Material UI for UI.
- LocalStorage for storing URLs and click stats.
- Logging Middleware as given (no console.log used).

## How It Works
- App has two pages:  
  - `/` is for shortening URLs (up to 5 at once).  
  - `/stats` shows stats of all created URLs.
- User can add long URL, optional validity (minutes), and optional shortcode.
- If validity is not given, defaults to 30 mins.
- If shortcode is not given, random one is generated.
- Checks for unique shortcode.
- Clicks & stats saved in LocalStorage.

## Routing
- Uses react-router-dom for routes and redirection.
- No backend routing, only client-side.

## Logging
- Every time a shortcode is created, it calls the Logging Middleware.
- Logs sent to given API with Bearer token.
- No console.log used for main logs.

## UI/UX
- Used Material UI for form inputs, buttons, and stats list.
- Kept the UI simple and minimal.
- Used Box, Paper, Typography from MUI.

## Assumptions
- No user login needed.
- Stats only stored in LocalStorage.
- Click tracking is basic — just timestamp, source, and location (mock).

## Notes
- Everything runs on `localhost:3000`.
- No external CSS frameworks used except MUI.
- Error handling done for invalid URLs and duplicate shortcodes.

## Final Thoughts
Kept the app simple as per instructions.  
Code is readable and easy to extend.  
All logs use given Logging Middleware.

---
