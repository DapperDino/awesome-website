# Editing the website content

All the text and images Katie edits live in `src/content/`. You never need to touch the code in `src/pages/`.

## Home page — `src/content/home/home.md`

- The three images across the top. Each entry under `tiles:` has a `label` (the text shown over the picture) and an `image` (a file in `src/assets/`).
- Keep each entry's indentation the same as the others. You can add or remove entries.

## About page — `src/content/about/about.md`

- The section between the two `---` lines at the top holds the heading and the photo.
- Everything below the second `---` is the intro text. Leave a blank line between paragraphs.
- The photo is `src/assets/katie.jpg`. To change it, replace that file (or add a new one and update the `photo:` line).

## Gallery — `src/content/gallery/`

- One `.md` file per artwork. To add one, copy an existing file, rename it, and edit the fields:
  - `name`, `year`, `description`
  - `image`: path to the picture, e.g. `../../assets/my-piece.jpg` (put the image in `src/assets/`)
- To remove an artwork, delete its file.
- Wrap text containing a colon (`:`) in double quotes, e.g. `description: "Glazed stoneware: 20cm tall"`.

If something is wrong (a missing field, a bad image path), the site build will fail and say which file and field to fix.
