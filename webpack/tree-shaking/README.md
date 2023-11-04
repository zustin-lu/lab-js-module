# Testing Tree-shaking with CommonJS

I created this example with the purpose of have more understanding about **How to build tree-shakable library** when I'm building my personal UI library `@justinlu/web-ui`

Some references during my learning process:

- Webpack document: https://webpack.js.org/guides/tree-shaking/
- Reference blog: https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries

## Usage

- `cd` to `webpack` folder
- Run the `npm i` command to install `node_modules`
- Run the `npm run build:tree-shaking` command in your terminal  
(You can refer to other commands inside `package.json`)
- Inspect output bundled files
- Inside `dist/esm.bundle.js`  
You would find the `unused harmony export largeFunc` comment which added a notice to webpack minimizers that `largeFunc` is unused and should be removed from the production bundle.
- Inside `dist/cjs.bundle.js`  
You won't find something to annotate that the code could be eliminated later.

### How do you see the final result?

You can see the final bundle fully optimized by changing the `mode` property in `webpack.config.js` to `production`

## What do I see via this example?

**CommonJS**

CommonJS exports are resolved at runtime because CommonJS is designed to work in a synchronous, blocking manner, particularly in server-side environments like Node.js. CommonJS modules are required to import modules, and exports can be dynamically modified during **runtime**. This dynamic nature makes it difficult for static analysis to determine which parts of the code are used and which are not.

>> The bundled file size was not tree-shaking because CommonJS and bundled size were still larger than expected because it was not tree-shakable.

**ESModule**

With `Static Analytic` oriented module system design. Imports and exports are analyzed statically at build time.

This allows tools like bundlers and transpilers to understand the module dependencies and optimize the bundling process during development.
This analysis can help eliminate dead code, tree-shake unused modules, and perform various optimizations.

>> The bundled file size was smaller than expected because tree-shaking was eliminated from the unused code.

---
## Some other knowledge that I found when learning about tree-shaking

### Static analysis

`Static analysis` refers to examining and understanding code without actually executing it. It involves analyzing the structure and content of the code to extract information about its behavior, dependencies, and potential issues. This analysis is performed at compile or build time before the code is executed, and it's a critical step in various software development processes, including type checking, linting, and optimizing.

Here are some key points to help you understand static analysis better:

- No Code Execution: In static analysis, the code is not executed. Instead, tools and analyzers examine the code's source files to gain insights into its characteristics. This means that static analysis doesn't rely on the actual runtime behavior of the code.

- Compile or Build Time: Static analysis typically takes place during the compilation or build process of a program. Before the code is bundled, transpiled, or otherwise prepared for deployment, it can be statically analyzed to identify issues and make optimizations.

- Detecting Issues: Static analysis tools can identify various issues in the code, such as syntax errors, semantic errors, code style violations, potential bugs, and security vulnerabilities. For example, a linter can check code for consistent formatting, while a type checker can ensure that variables are used in a type-safe manner.

- Dependency Resolution: Static analysis can also identify and resolve dependencies between different parts of the code, such as modules or libraries. This is essential for bundlers to understand the structure of the code and optimize the resulting bundle.

- Optimizations: Static analysis can help identify opportunities for code optimizations, like dead code elimination (removing code that is never executed) and inlining (replacing function calls with the actual code). This leads to smaller, more efficient code bundles.

In the context of JavaScript modules, static analysis plays a crucial role in understanding how modules depend on each other and in optimizing the final bundled code. For example, tools like Webpack or Rollup use static analysis to determine which modules are actually used in a project and exclude unused code during the bundling process. This is commonly referred to as "tree-shaking."

Static analysis is a powerful technique for ensuring code quality, improving performance, and reducing the likelihood of runtime errors, and it's an integral part of modern software development practices.

### ESModule vs CommonJS in module system design - Comparison

**ES Modules (ESM)**

Static Analysis: ESM allows for static analysis, meaning that imports and exports are resolved and analyzed at build time. This makes it possible to understand the module structure without executing the code. This static analysis provides predictability and enables tools to optimize the code more effectively.

Tree-Shaking: ESM is well-suited for tree-shaking. Since imports are known at build time, bundlers can eliminate unused code and dependencies, resulting in a smaller and more efficient bundle. Unused exports are easily identified and excluded from the final output.

Predictability: ESM offers a high level of predictability. When you import something using import in ESM, you can be sure that the dependency is available and can be analyzed at that point in the code.

**CommonJS**

Runtime Resolution: CommonJS modules are resolved at runtime. When you require a module, it is loaded and executed immediately, and its exports can be modified during execution. This dynamic behavior means that the structure of the code isn't fully known until runtime.

Challenges in Static Analysis: Due to runtime resolution, CommonJS modules are less amenable to static analysis. Tools have a harder time identifying unused code and dependencies during the build process. This can limit the effectiveness of tree-shaking.

Less Predictability: In CommonJS, you can't always be certain about the state of a module when you require it. The exports of a module can change during runtime, making it less predictable compared to ESM.

In summary, the key difference between ESM and CommonJS lies in their handling of static analysis and optimization. ESM's static analysis at build time provides a significant advantage for tools like bundlers to eliminate dead code and optimize the final output, making it more predictable and efficient. On the other hand, CommonJS's runtime resolution can make it harder to achieve the same level of static analysis and optimization, leading to potential challenges in tree-shaking and predictability. This is one of the reasons why ESM is preferred in modern JavaScript development when maximum static analysis and optimization are desired.
