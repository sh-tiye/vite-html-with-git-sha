> Insert Git SHA into index.html in Vite

### 实现

`vite.config.js` with:

```js
import { createHtmlPlugin } from "vite-plugin-html";

const { gitDescribeSync } = require("git-describe");

const gitInfo = gitDescribeSync({
  // customArguments: ["--abbrev=16"], // how long in SHA
  match: "[0-9]*", // tag name
});

console.log(gitInfo);

export default ({ mode }) => {
  return {
    plugins: [
      createHtmlPlugin({
        inject: {
          data: {
            sha: gitInfo.hash || "_NO_SHA_",
            tag: gitInfo.tag || "_NO_TAG_",
          },
        },
      }),
    ],
  };
};
```

Gets in `index.html`:

```html
<meta name="sha" content="g8d34b7c" />

<meta name="tag" content="0.0.1" />
```

### 参考

- https://stackoverflow.com/questions/68180648/string-replacements-in-index-html-in-vite
- https://stackoverflow.com/questions/64014694/git-describe-npm-not-providing-tag-information
- https://www.npmjs.com/package/git-describe
