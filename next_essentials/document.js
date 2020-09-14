// ✅ Next?
// : The React Framework for Production
// => Next.js gives you the best developer experience with all the features you need for production: 
//    ex. hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

// ✅ Navigate between Pages
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

// ✨ code splitting 
// : Next.js does code splitting automatically, so each page only loads what’s necessary for that page.
// => This ensures that the homepage loads quickly even if you add hundreds of pages.
// => pages become isolated so that if a certain page throws an error, the rest of the application would still work.

// ✨ prefetching
// : Next.js automatically prefetches the code for the linked page in the background. 
// => By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

// ❗ Note: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
// ❗ Note: If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.