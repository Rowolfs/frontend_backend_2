# Frontend and Backend Practice — Node HTTP Server

A university exercise serving HTML and CSS through Node.js built-in HTTP and filesystem modules.

## Run

Install Node.js, then run from the repository root:

```sh
node server.js
```

Open `http://127.0.0.1:3000`. There are no declared runtime npm dependencies.

## Contents

- `server.js` — file serving, basic MIME selection and error responses.
- `index.html` — example page.
- `404.html` — missing-page response.
- `style.scss` and `style.css` — stylesheet source and compiled output.

The checked-in CSS is ready to serve; no Sass build script is configured.

## Scope

This is a learning implementation, not a general-purpose static server. Review URL/path handling before serving it outside a local development environment. `npm test` is only a placeholder script.

## License

See the [GPL-3.0 license text](LICENSE).
