// ✅ Next?
// : The React Framework for Production
// => Next.js gives you the best developer experience with all the features you need for production: 
//    ex. hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

// ✅ Navigate between Pages : Next.js does page-based routing!
// ◽ creating another page
// => simply create a JS file under the pages directory, and the path to the file becomes the URL path.
// ◽ creating links to navigate between pages
// => in Next.js, you use the Link Component from next/link to wrap the <a> tag.
// => instead of <a href="…">, you use <Link href="…"> and put an <a> tag inside.

// ✨ client-side navigation: The Link component enables client-side navigation between two pages in the same Next.js app.
//: Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.
// => This shows that the browser does not load the full page and client-side navigation is working.
// => That is, code is not flickering on link clicks.
// cf. essentially, react routing supports client-side navigation.

// ✨ code splitting (related to js)
// : Next.js does code splitting automatically, so each page only loads what’s necessary for that page.
// => This ensures that the homepage loads quickly even if you add hundreds of pages.
// => pages become isolated so that if a certain page throws an error, the rest of the application would still work.

// ✨ prefetching
// : Next.js automatically prefetches the code for the linked page in the background. 
// => By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

// ❗ Note: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
// ❗ Note: If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.


// ✅ Pre-rendering (related to html)
// : Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.
// ✔ Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
// => faster
// ✔ Server-side Rendering is the pre-rendering method that generates the HTML on each request.
// => up-to-date

// ✨ Importantly, Next.js lets you choose which pre-rendering form to use for each page. 
// ⏩ Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.

// cf. In development mode (when you run npm run dev or yarn dev), every page is pre-rendered on each request — even for pages that use Static Generation.

// ✅ Static generation without and with Data
// : for some pages, you might not be able to render the HTML without first fetching some external data.
// => ex. Maybe you need to access the file system, fetch external API, or query your database at build time. 

// ◽ getStaticProps
// : when you export a page component, you can also export an async function called getStaticProps.
