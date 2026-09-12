# Calvin Soe Frederick — Portfolio


Live site: https://calvinfrederick.github.io/my-portfolio


## Local development


```bash
npm install     # first time only, or after pulling dependency changes
npm run dev     # starts local dev server at http://localhost:8080
```


## Deploying to GitHub Pages


After making edits, follow these steps to publish them live:


1. **Commit and push your changes to `main`** (this keeps your source code backed up on GitHub):
  ```bash
  git add .
  git commit -m "Describe your changes"
  git push origin main
  ```


2. **Build and deploy to GitHub Pages:**
  ```bash
  npm run deploy
  ```
  This runs `vite build` to produce the `dist/` folder, then publishes it to the `gh-pages` branch, which GitHub Pages serves automatically.


3. **Verify:** wait ~1 minute, then refresh https://calvinfrederick.github.io/my-portfolio to see your changes live.


> Note: `main` is your source code, `gh-pages` is the built output that GitHub actually serves. Always push to `main` first so your work is saved, then run `npm run deploy` to publish it.



