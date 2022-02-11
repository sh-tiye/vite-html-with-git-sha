// vite.config.js

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
