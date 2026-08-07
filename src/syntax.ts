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
  subtle,
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
const primitives = yellow;
const params = white;
const tags = green;
const types = subtle;
const separators = purple;
const brackets = white;
const cssConsts = orange;

export const semantic = {
  namespace: i,
  class: i,
  "class.defaultLibrary": builtIns,
  "interface.defaultLibrary": types,
  type: types,
  "type.declaration": white,
  interface: types,
  "interface.declaration": white,
  enum: i,
  struct: i,
  typeParameter: {
    foreground: types,
    italic: true,
  },
  parameter: {
    italic: true,
  },
  variable: variables,
  "variable.defaultLibrary": builtIns,
  "variable.declaration": i,
  property: i,
  "property.defaultLibrary": propRef,
  "property.declaration": propDef,
  enumMember: i,
  decorator: i,
  event: i,
  function: i,
  "function.defaultLibrary": builtIns,
  method: i,
  "method.defaultLibrary": builtIns,
  macro: i,
  label: i,
  comment: i,
  string: i,
  keyword: i,
  number: i,
  regexp: i,
  operator: i,
};

export const syntax = [
  {
    name: "Language Keywords",
    scope: [
      // Keywords
      "keyword",
      "punctuation.definition.keyword",
      "keyword.expressions-and-types.swift",
      "keyword.operator.new",
      "keyword.operator.of",
      "keyword.operator.delete",
      "variable.language",
      "variable.language punctuation.definition.variable.php",
      "variable.other.readwrite.instance.ruby",
      "variable.parameter.function.language.special",
      // Storage (const, let)
      "storage",
      "meta.implementation storage.type.objc",
      "meta.interface-or-protocol storage.type.objc",
      "source.groovy storage.type.def",
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
      "punctuation.terminator.statement",
      "punctuation.terminator.rule",
      "meta.delimiter.comma",
    ],
    settings: {
      foreground: punctuation,
    },
  },
  {
    name: "Specials, language support, magic, Regex",
    scope: [
      // Language Built-ins, magic, constants
      "support.variable.other.property",
      "support.function.magic",
      "support.function.method",
      "support.variable",
      "support.type.object.module",
      "support.type.object.module keyword.operator",
      "variable.other.predefined",
      "support.type.property-name",
      "string.regexp",
      "constant.other.character-class.set.regexp",
      "constant.character.escape.backslash.regexp",
      "constant.character.escape",
      "constant.character.string.escape",
      "constant.regexp",
      // Dates / Timestamps (serializable languages)
      "constant.other.date",
      "constant.other.timestamp",
      // YAML aliases
      "variable.other.alias.yaml",
    ],
    settings: {
      foreground: builtIns,
    },
  },
  {
    name: "CSS Constants, units, keywords",
    scope: [
      "support.constant.property-value.css",
      "support.constant.font-name.css",
      "support.constant.vendored.property-value.css",
      "support.constant.color.w3c-standard-color-name.css",
      "support.function.misc.css",
      "support.function.transform.css",
    ],
    settings: {
      foreground: cssConsts,
    },
  },
  {
    name: "Variables",
    scope: [
      "constant.other.key.perl",
      "variable.other.object",
      "meta.selectionset.graphql variable",
      "meta.function-call variable.other.readwrite",
      "constant.other.database-name.sql",
      "constant.other.table-name.sql",
    ],
    settings: {
      foreground: variables,
    },
  },
  {
    name: "Keys",
    scope: [
      "entity.name.tag.yaml",
      // Objects
      "constant.other.object.key",
      "meta.property.object",
      "entity.name.function.accessor",
      "variable.other.property",
      // CSS properties
      "support.type.property-name",
    ],
    settings: {
      foreground: propRef,
    },
  },
  {
    name: "JSON properties, HTML attributes, CSS properties",
    scope: [
      "support.type.property-name.json",
      "entity.other.attribute-name",
      "meta.property-name support.type.property-name",
      "meta.structure.dictionary.json punctuation.support.type.property-name",
      "meta.definition.property",
    ],
    settings: {
      foreground: propDef,
    },
  },
  {
    name: "Function names",
    scope: [
      "entity.name.function.method",
      "entity.name.function",
      "entity.name.fragment.graphql",
      "variable.fragment.graphql",
      "support.function",
    ],
    settings: {
      foreground: functions,
    },
  },
  {
    name: "Primitives (strings, numbers, boolean, null)",
    scope: [
      "constant",
      "string.quoted",
      "string.template",
      "punctuation.definition.string.begin",
      "punctuation.definition.string.end",
      // CSS Values
      "meta.property-value.css",
      "keyword.other.unit",
    ],
    settings: {
      foreground: primitives,
    },
  },
  {
    name: "Classes",
    scope: [
      // 'entity.name.type.class',
      "entity.name.class",
      "entity.other.inherited-class",
      "variable.other.class",
      "variable.language.this",
      "entity.name.type.instance",
    ],
    settings: {
      foreground: classes,
    },
  },
  {
    name: "Function parameters",
    scope: [
      "variable.parameter",
      "meta.function.parameters",
      "entity.name.variable.parameter",
      "meta.at-rule.function variable",
      "meta.at-rule.mixin variable",
      "meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql",
      "meta.selectionset.graphql meta.arguments variable",
    ],
    settings: {
      fontStyle: "italic",
      foreground: params,
    },
  },
  {
    name: "HTML Tags, React Components",
    scope: [
      "entity.name.tag.html",
      "entity.name.tag.css",
      "entity.name.tag.reference.scss",
      "entity.name.tag.tsx",
      "entity.name.tag.open.jsx",
      "entity.name.tag.open.tsx",
      "entity.name.tag.close.jsx",
      "entity.name.tag.close.tsx",
      "support.class.component.open",
      "support.class.component.close",
      "punctuation.definition.tag",
      // CSS Generic Selectors
      "meta.selector",
      "meta.attribute-selector.scss",
      // CSS attribute parent selectors ('&')
      "meta.selector entity.other.attribute-name",
    ],
    settings: {
      foreground: tags,
    },
  },
  {
    name: "Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)",
    scope: [
      "constant.other.symbol.hashkey punctuation.definition.constant.ruby",
      "entity.other.attribute-name.placeholder punctuation",
      "entity.other.attribute-name.pseudo-class punctuation",
      "entity.other.attribute-name.pseudo-element punctuation",
      "meta.object-binding-pattern-variable punctuation.destructuring",
      "punctuation.colon.graphql",
      "punctuation.definition.block.scalar.folded.yaml",
      "punctuation.definition.block.scalar.literal.yaml",
      "punctuation.definition.block.sequence.item.yaml",
      "punctuation.definition.entity.other.inherited-class",
      "punctuation.function.swift",
      "punctuation.separator.dictionary.key-value",
      "punctuation.separator.hash",
      "punctuation.separator.inheritance",
      "punctuation.separator.key-value",
      "punctuation.separator.key-value.mapping.yaml",
      "punctuation.separator.namespace",
      "punctuation.separator.pointer-access",
      "punctuation.separator.slice",
      "string.unquoted.heredoc punctuation.definition.string",
      "support.other.chomping-indicator.yaml",
      "punctuation.separator.annotation",
    ],
    settings: {
      foreground: separators,
    },
  },
  {
    name: "Brackets, braces, parens, etc.",
    scope: [
      "keyword.operator.other.powershell",
      "keyword.other.statement-separator.powershell",
      "meta.brace.round",
      // 'meta.brace.square',
      "meta.brace.curly",
      "meta.function-call punctuation",
      "punctuation.definition.arguments.begin",
      "punctuation.definition.arguments.end",
      "punctuation.definition.entity.begin",
      "punctuation.definition.entity.end",
      "punctuation.definition.tag.cs",
      "punctuation.definition.type.begin",
      "punctuation.definition.type.end",
      "punctuation.section.scope.begin",
      "punctuation.section.scope.end",
      "punctuation.terminator.expression.php",
      "storage.type.generic.java",
      "string.template meta.brace",
      "string.template punctuation.accessor",
      "punctuation.definition.attribute-selector.end.bracket.square.scss",
      "punctuation.definition.attribute-selector.begin.bracket.square.scss",
    ],
    settings: {
      foreground: brackets,
    },
  },
  {
    name: "Comments",
    scope: [
      "comment",
      "punctuation.definition.comment",
      "unused.comment",
      "wildcard.comment",
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
    scope: [
      "support.type.primitive",
      "support.type.builtin",
      "meta.type.parameters",
      "meta.return.type",
      "meta.type.annotation",
    ],
    settings: {
      foreground: types,
    },
  },
  {
    name: "Edge cases (foreground color resets)",
    scope: [
      "constant.other.symbol.hashkey.ruby",
      "keyword.operator.dereference.java",
      "keyword.operator.navigation.groovy",
      "meta.scope.for-loop.shell punctuation.definition.string.begin",
      "meta.scope.for-loop.shell punctuation.definition.string.end",
      "meta.scope.for-loop.shell string",
      "storage.modifier.import",
      "punctuation.section.embedded.begin.tsx",
      "punctuation.section.embedded.end.tsx",
      "punctuation.section.embedded.begin.jsx",
      "punctuation.section.embedded.end.jsx",
      "punctuation.separator.list.comma.css",
      "constant.language.empty-list.haskell",
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
    scope: [
      "markup.heading",
      "markup.heading.markdown punctuation.definition.string.begin",
      "markup.heading.markdown punctuation.definition.string.end",
    ],
    settings: {
      fontStyle: "bold",
      foreground: pink,
    },
  },
  {
    name: "Bullets, lists (prose)",
    scope: [
      "beginning.punctuation.definition.list.markdown",
      "beginning.punctuation.definition.quote.markdown",
      "punctuation.definition.link.restructuredtext",
    ],
    settings: {
      foreground: blue,
    },
  },
  {
    name: "Inline code (prose)",
    scope: ["markup.inline.raw", "markup.raw.restructuredtext"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "Links (prose)",
    scope: ["markup.underline.link", "markup.underline.link.image"],
    settings: {
      foreground: blue,
    },
  },
  {
    name: "Link text, image alt text (prose)",
    scope: [
      "meta.link.reference.def.restructuredtext",
      "punctuation.definition.directive.restructuredtext",
      "string.other.link.description",
      "string.other.link.title",
    ],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Blockquotes (prose)",
    scope: [
      "entity.name.directive.restructuredtext",
      "markup.quote",
      "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin",
      "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end",
    ],
    settings: {
      foreground: yellow,
      fontStyle: "italic",
    },
  },
  {
    name: "Horizontal rule (prose)",
    scope: ["meta.separator.markdown"],
    settings: {
      foreground: purple,
    },
  },
  {
    name: "Code blocks",
    scope: [
      "fenced_code.block.language",
      "markup.raw.inner.restructuredtext",
      "markup.fenced_code.block.markdown punctuation.definition.markdown",
    ],
    settings: {
      foreground: green,
    },
  },
  {
    name: "Prose constants",
    scope: ["punctuation.definition.constant.restructuredtext"],
    settings: {
      foreground: pink,
    },
  },
  {
    name: "Braces in markdown paragraphs",
    scope: [
      "meta.paragraph.markdown punctuation.definition.string.begin",
      "meta.paragraph.markdown punctuation.definition.string.end",
    ],
    settings: {
      foreground: white,
    },
  },
];
