const start = Date.now();
import Color from "color";
import { cwd, Log, Format } from "@brianbuie/node-kit";
import { flatten } from "flat";
import yaml from "yaml";
import { syntax, semantic } from "./syntax.ts";
import { workbench } from "./workbench.ts";
import { primary, bg, white, ansi } from "./palette.ts";

/**
 * Traverse input and convert all ColorInstances to hex strings
 */
export function hexify(i: unknown): any {
  if (!i || typeof i !== "object") return i;
  if (Array.isArray(i)) return i.map(hexify);
  if (i instanceof Color) return i.object().alpha ? i.hexa() : i.hex();
  return Object.entries(i).reduce(
    (all, [key, val]) => ({
      ...all,
      [key]: hexify(val),
    }),
    {},
  );
}

const outDir = cwd.dir("themes");

/**
 * VS Code
 */
const pkg = cwd
  .file("package")
  .json<{ author: { name: string }; displayName: string }>()
  .read()!;

outDir.file("work-shirt-vscode").json({
  $schema: "vscode://schemas/color-theme",
  name: pkg.displayName,
  author: pkg.author.name,
  semanticHighlighting: true,
  semanticTokenColors: hexify(semantic),
  colors: flatten(hexify(workbench)),
  tokenColors: hexify(syntax),
});

/**
 * Warp
 */
outDir.file("work-shirt-warp.yaml").writeText(
  yaml.stringify(
    hexify({
      accent: primary.mix(bg),
      background: bg,
      details: "darker",
      foreground: white,
      terminal_colors: ansi,
    }),
  ),
);

/**
 * Done
 */
Log.info(`Built in ${Format.ms(Date.now() - start)}`);
