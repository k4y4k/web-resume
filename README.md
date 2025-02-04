# web-resume

this project is how I generate PDFs of my resume.


## Step one: Get

You need Node.js, so sort that out first.

Clone this repo (via git, GitHub Desktop, or download as ZIP).

Delete the `.git/` folder.

Run `yarn install` (or `npm install`)

Run `yarn fake` to generate fake data. **!! This is important !!** Without this data, your site won't build.

## Step two: Set

Change the data in `src/data/data.json` to describe you.

You might want to replace `src/images/hero.jpg` as well, but that's on you.

## Step three: Net

Run `yarn build && yarn serve`.

Open the address it gives you in your browser (probably `http://localhost:9000`) and print the page to PDF.

Done!
