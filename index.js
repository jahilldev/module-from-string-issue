import fs from "node:fs/promises";
import path from "node:path";
import { importFromString } from "module-from-string";

const filePath = "./input/handler.ts";

const directory = path.dirname(path.resolve(filePath));
const sourcePath = path.resolve(filePath);

const contents = await fs.readFile(sourcePath, {
  encoding: "utf8",
});

const { handler } = await importFromString(contents, {
  dirname: directory,
  filename: sourcePath,
  useCurrentGlobal: true,
  transformOptions: { loader: "ts" },
});

const result = handler();

console.log({ result });
