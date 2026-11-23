# he_is_the_cat

Portfolio site listing all my projects with screenshots. Plain HTML/CSS/JS, no build step, made for GitHub Pages.

## Put it online (GitHub Pages)

1. Create a new public repo on GitHub named **`heisthecat31.github.io`**
   (that exact name makes the site live at `https://heisthecat31.github.io`).
2. Upload everything in this folder to it (or push with git).
3. In the repo go to **Settings → Pages**, set *Source* to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Wait a minute, then open `https://heisthecat31.github.io`.

Want it at `heisthecat31.github.io/he_is_the_cat` instead? Name the repo `he_is_the_cat` and do the same steps.

## Adding or editing a project

Everything is in [`projects.js`](projects.js). Copy a block and change it:

```js
{
  name: "My New Thing", repo: "My-New-Thing", category: "mod", lang: "C++",
  desc: "One line about what it does.",
  images: ["images/my-new-thing/1.webp"],   // optional
  featured: true,                            // optional: show at the top
},
```

- `category`: `mod`, `tool`, `lone` or `other`. Add `fork: true` for forks/contributions.
- Images go in `images/<folder>/`. Any format works; `.webp` keeps it small.
- Projects without images get a generated colour cover.

Star counts load live from the GitHub API, so they stay up to date on their own.
