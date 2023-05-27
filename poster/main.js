// Read markdown post (passed as argument)

// Read post template

// Recognize post title (if possible)
// Convert markdown post to HTML
// Add post to posts/index.html
// Add post to blog.html (description as argument?)

import { hydrateFrom } from "./postHydrator.js";

const args = process.argv.slice(2)

const post = hydrateFrom(args[0])

console.log(post)
