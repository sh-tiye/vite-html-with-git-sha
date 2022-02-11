// vite.config.js

import { createHtmlPlugin } from "vite-plugin-html";

const { gitDescribeSync } = require("git-describe");

const gitInfo = gitDescribeSync({
  customArguments: ["--abbrev=16"],
});

console.log(gitInfo);

export default ({ mode }) => {
  return {
    plugins: [
      createHtmlPlugin({
        inject: {
          data: {
            sha: "TODO",
            tag: "TODO",
          },
        },
      }),
    ],
  };
};
