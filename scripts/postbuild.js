import { readFileSync, readdirSync, writeFileSync } from "fs";
import { parse } from "path";

const assets = readdirSync("./dist/assets").reduce(
  (prev, cur) => {
    const { ext, name } = parse(cur);

    if (ext === ".js") {
      prev.js = name;
    }

    if (ext === ".css") {
      prev.css = name;
    }

    return prev;
  },
  { js: "", css: "" }
);

const indexPhp = readFileSync("./public/index.php", "utf-8");
const updatedIndexPhp = indexPhp
  .replace("{js-file}", assets.js)
  .replace("{css-file}", assets.css);
writeFileSync("./dist/index.php", updatedIndexPhp);
