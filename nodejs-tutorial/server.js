/**
 * server.js — Express application entry point for the Node.js tutorial.
 *
 * This is the core of the tutorial feature: a minimal Node.js HTTP service
 * built on the Express.js framework that exposes two GET endpoints.
 *
 *   GET /              -> responds with the plain text "Hello world"
 *   GET /good-evening  -> responds with the plain text "Good evening"
 *
 * The module uses CommonJS (`require`) because the accompanying package.json
 * does not declare `"type": "module"`. It depends only on `express` and is
 * fully self-contained — it shares no process, binding, or call path with the
 * surrounding Berkeley ABC C/C++ toolchain.
 *
 * Run with:  npm start   (equivalently: node server.js)
 * The listening port is configurable via the PORT environment variable and
 * defaults to 3000, e.g.  PORT=4000 node server.js
 */

'use strict';

// Import the Express web application framework (the project's only runtime
// dependency, declared in package.json as express ^5.2.1).
const express = require('express');

// Instantiate the Express application that will host the route handlers.
const app = express();

// Security hardening: disable Express's default "X-Powered-By: Express"
// response header. Advertising the framework provides no functional benefit
// and needlessly fingerprints the server for potential attackers. This is a
// header-only change — it does not alter any response body (constraint C2).
app.disable('x-powered-by');

// Resolve the listening port: honor process.env.PORT when provided, otherwise
// fall back to the conventional development default of 3000.
const PORT = process.env.PORT || 3000;

// R2 — "Hello world" endpoint.
// Responds with the byte-for-byte exact string "Hello world" (constraint C2):
// no trailing punctuation, no casing changes, no HTML/JSON wrapping.
app.get('/', (req, res) => {
  res.send('Hello world');
});

// R3 — "Good evening" endpoint.
// Responds with the byte-for-byte exact string "Good evening" (constraint C2).
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and log the listening URL for tutorial clarity.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
