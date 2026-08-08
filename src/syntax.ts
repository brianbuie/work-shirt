import {
  red,
  yellow,
  orange,
  green,
  cyan,
  blue,
  purple,
  pink,
  white,
  comment,
  denim,
} from "./palette.ts";

// undefined placeholder
let i;
const punctuation = purple;
const keywords = purple;
const functions = blue;
const classes = orange;
const builtIns = cyan;
const propRef = white;
const propDef = pink;
const variables = white;
const params = white;
const types = denim;

export const semantic = {
  namespace: i,
  class: classes,
  "class.defaultLibrary": builtIns,
  "interface.defaultLibrary": types,
  type: types,
  "type.declaration": types,
  interface: types,
  "interface.declaration": types,
  enum: classes,
  struct: classes,
  typeParameter: {
    foreground: types,
    italic: true,
  },
  parameter: {
    foreground: params,
    italic: true,
  },
  variable: variables,
  "variable.defaultLibrary": builtIns,
  "variable.declaration": variables,
  property: propRef,
  "property.defaultLibrary": propRef,
  "property.declaration": propDef,
  enumMember: i,
  decorator: i,
  event: i,
  function: functions,
  "function.defaultLibrary": builtIns,
  method: functions,
  "method.defaultLibrary": builtIns,
  macro: i,
  label: i,
  comment: i,
  string: i,
  keyword: keywords,
  number: i,
  regexp: i,
  operator: punctuation,
};

export const syntax = [
  {
    name: "Language Keywords",
    scope: [
      "keyword",
      "punctuation.definition.keyword",
      "variable.language",
      "variable.parameter.function.language.special",
      "storage",
      "storage.modifier",
    ],
    settings: {
      foreground: keywords,
    },
  },
  {
    name: "Operators (=, +, -), Punctuation (;,)",
    scope: [
      "keyword.operator",
      "storage.type.function.arrow",
      "punctuation.terminator",
      "meta.delimiter.comma",
    ],
    settings: {
      foreground: punctuation,
    },
  },
  {
    name: "Specials, language support, magic, Regex",
    scope: [
      "support.function.magic",
      "support.variable",
      "support.type.object.module",
      "variable.other.predefined",
      "string.regexp",
      "constant.character.escape",
      "constant.regexp",
      "constant.other.date",
      "constant.other.timestamp",
    ],
    settings: {
      foreground: builtIns,
    },
  },
  {
    name: "CSS Constants",
    scope: ["support.constant.property-value.css", "support.function.misc.css"],
    settings: {
      foreground: orange,
    },
  },
  {
    name: "Variables",
    scope: ["meta.function-call variable.other.readwrite"],
    settings: {
      foreground: variables,
    },
  },
  {
    name: "Keys",
    scope: ["constant.other.object.key"],
    settings: {
      foreground: propRef,
    },
  },
  {
    name: "JSON properties, HTML attributes, CSS properties",
    scope: [
      "support.type.property-name",
      "entity.other.attribute-name",
      "meta.definition.property",
    ],
    settings: {
      foreground: propDef,
    },
  },
  {
    name: "Primitives (strings, numbers, boolean, null)",
    scope: [
      "constant",
      "string",
      "punctuation.definition.string",
      "meta.property-value.css",
      "keyword.other.unit",
    ],
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "Classes",
    scope: ["variable.language.this"],
    settings: {
      foreground: classes,
    },
  },
  {
    name: "Function parameters",
    scope: ["variable.parameter", "meta.function.parameters"],
    settings: {
      fontStyle: "italic",
      foreground: params,
    },
  },
  {
    name: "HTML Tags, React Components",
    scope: [
      "entity.name.tag",
      "support.class.component.open",
      "support.class.component.close",
      "punctuation.definition.tag",
      "meta.selector",
    ],
    settings: {
      foreground: green,
    },
  },
  {
    name: "Comments",
    scope: [
      "comment",
      "storage.type.class.jsdoc",
      "entity.name.type.instance.jsdoc",
    ],
    settings: {
      foreground: comment,
      fontStyle: "italic",
    },
  },
  {
    name: "Types",
    scope: ["support.type.primitive", "support.type.builtin"],
    settings: {
      foreground: types,
    },
  },
  {
    name: "Separators",
    scope: ["punctuation.separator"],
    settings: {
      foreground: purple,
    },
  },
  {
    name: "Brackets, braces, parens, etc.",
    scope: [
      "meta.brace",
      "punctuation.definition.arguments",
      "punctuation.definition.entity",
      "punctuation.definition.type",
      "punctuation.section.scope",
    ],
    settings: {
      foreground: white,
    },
  },
  /**
   * Logs
   */
  {
    scope: ["log.error"],
    settings: {
      foreground: red,
    },
  },
  {
    scope: ["log.warning"],
    settings: {
      foreground: yellow,
    },
  },
  {
    scope: ["log.info"],
    settings: {
      foreground: cyan,
    },
  },
  {
    scope: ["log.debug"],
    settings: {
      foreground: comment,
    },
  },
  {
    scope: ["log.constant"],
    settings: {
      foreground: white,
    },
  },
  /**
   * Markdown
   */
  {
    scope: ["emphasis", "markup.italic"],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: ["strong", "markup.bold"],
    settings: {
      fontStyle: "bold",
    },
  },
  {
    scope: ["markup.inserted"],
    settings: {
      foreground: green,
    },
  },
  {
    scope: ["markup.deleted"],
    settings: {
      foreground: red,
    },
  },
  {
    scope: ["markup.error"],
    settings: {
      foreground: red,
    },
  },
  {
    scope: ["markup.changed"],
    settings: {
      foreground: yellow,
    },
  },
  {
    scope: ["markup.underline"],
    settings: {
      fontStyle: "underline",
    },
  },
  {
    scope: ["invalid"],
    settings: {
      foreground: red,
      fontStyle: "underline italic",
    },
  },
  {
    name: "Markup headings",
    scope: ["markup.heading"],
    settings: {
      foreground: pink,
    },
  },
  {
    name: "Inline code (prose)",
    scope: ["markup.inline.raw"],
    settings: {
      foreground: purple,
    },
  },
  {
    name: "Links (prose)",
    scope: [
      "markup.underline.link",
      "string.other.link.description",
      "string.other.link.title",
    ],
    settings: {
      foreground: blue,
    },
  },
  {
    name: "Blockquotes (prose)",
    scope: ["markup.quote"],
    settings: {
      foreground: yellow,
      fontStyle: "italic",
    },
  },
  {
    name: "Code blocks",
    scope: [
      "fenced_code.block.language",
      "markup.fenced_code.block.markdown punctuation.definition.markdown",
    ],
    settings: {
      foreground: denim,
    },
  },
];
