import fs from 'fs';
import { flatten } from 'flat';
import {
  red,
  yellow,
  orange,
  green,
  cyan,
  blue,
  purple,
  pink,
  black,
  bg,
  white,
  comment,
  primary,
  secondary,
  highlight,
  none,
  ansi,
  hexYeah,
} from './colors.js';

// undefined placeholder
let i;

const workbench = {
  activityBar: {
    activeBackground: primary.mix(bg, 1),
    activeBorder: primary,
    activeFocusBorder: i,
    background: bg.darken(0.2),
    border: black,
    dropBorder: i,
    foreground: primary,
    inactiveForeground: comment,
  },
  activityBarBadge: {
    background: primary,
    foreground: black,
  },
  activityBarItem: {
    settingsProfilesBackground: i,
    settingsProfilesForeground: i,
    settingsProfilesHoverForeground: i,
  },
  badge: {
    background: primary,
    foreground: black,
  },
  banner: {
    background: i,
    foreground: i,
    iconForeground: i,
  },
  breadcrumb: {
    activeSelectionForeground: i,
    background: i,
    focusForeground: i,
    foreground: i,
  },
  breadcrumbPicker: {
    background: i,
  },
  button: {
    background: i,
    border: i,
    foreground: i,
    hoverBackground: i,
    secondaryBackground: i,
    secondaryForeground: i,
    secondaryHoverBackground: i,
    separator: i,
  },
  charts: {
    blue: i,
    foreground: i,
    green: i,
    lines: i,
    orange: i,
    purple: i,
    red: i,
    yellow: i,
  },
  checkbox: {
    background: i,
    border: i,
    foreground: i,
  },
  commandCenter: {
    activeBackground: i,
    activeForeground: i,
    background: i,
    border: i,
    foreground: i,
    inactiveBorder: i,
    inactiveForeground: i,
  },
  contrastActiveBorder: i,
  contrastBorder: i,
  debugConsole: {
    errorForeground: i,
    infoForeground: i,
    sourceForeground: i,
    warningForeground: i,
  },
  debugConsoleInputIcon: {
    foreground: i,
  },
  debugExceptionWidget: {
    background: i,
    border: i,
  },
  debugIcon: {
    breakpointCurrentStackframeForeground: i,
    breakpointDisabledForeground: i,
    breakpointForeground: i,
    breakpointStackframeForeground: i,
    breakpointUnverifiedForeground: i,
    continueForeground: i,
    disconnectForeground: i,
    pauseForeground: i,
    restartForeground: i,
    startForeground: i,
    stepBackForeground: i,
    stepIntoForeground: i,
    stepOutForeground: i,
    stepOverForeground: i,
    stopForeground: i,
  },
  debugTokenExpression: {
    boolean: i,
    error: i,
    name: i,
    number: i,
    string: i,
    value: i,
  },
  debugToolBar: {
    background: i,
    border: i,
  },
  debugView: {
    exceptionLabelBackground: i,
    exceptionLabelForeground: i,
    stateLabelBackground: i,
    stateLabelForeground: i,
    valueChangedHighlight: i,
  },
  descriptionForeground: i,
  diffEditor: {
    border: i,
    diagonalFill: i,
    insertedLineBackground: i,
    insertedTextBackground: i,
    insertedTextBorder: i,
    removedLineBackground: i,
    removedTextBackground: i,
    removedTextBorder: i,
  },
  diffEditorGutter: {
    insertedLineBackground: i,
    removedLineBackground: i,
  },
  diffEditorOverview: {
    insertedForeground: i,
    removedForeground: i,
  },
  disabledForeground: comment,
  dropdown: {
    background: i,
    border: i,
    foreground: i,
    listBackground: i,
  },
  editor: {
    background: bg,
    findMatchBackground: secondary.fade(0.6),
    findMatchBorder: i,
    findMatchHighlightBackground: secondary.fade(0.8),
    findMatchHighlightBorder: i,
    findRangeHighlightBackground: i,
    findRangeHighlightBorder: i,
    focusedStackFrameHighlightBackground: i,
    foldBackground: bg.darken(0.1),
    foreground: white,
    hoverHighlightBackground: i,
    inactiveSelectionBackground: i,
    inlineValuesBackground: i,
    inlineValuesForeground: i,
    lineHighlightBackground: highlight,
    lineHighlightBorder: i,
    linkedEditingBackground: i,
    rangeHighlightBackground: i,
    rangeHighlightBorder: i,
    selectionBackground: primary.fade(0.65),
    selectionForeground: i,
    selectionHighlightBackground: white.fade(0.85),
    selectionHighlightBorder: i,
    snippetFinalTabstopHighlightBackground: i,
    snippetFinalTabstopHighlightBorder: i,
    snippetTabstopHighlightBackground: i,
    snippetTabstopHighlightBorder: i,
    stackFrameHighlightBackground: i,
    symbolHighlightBackground: i,
    symbolHighlightBorder: i,
    wordHighlightBackground: i,
    wordHighlightBorder: i,
    wordHighlightStrongBackground: i,
    wordHighlightStrongBorder: i,
  },
  editorActiveLineNumber: {
    foreground: i,
  },
  editorBracketHighlight: {
    foreground1: pink,
    foreground2: purple,
    foreground3: blue,
    foreground4: i,
    foreground5: i,
    foreground6: i,
    unexpectedBracket: {
      foreground: red,
    },
  },
  editorBracketMatch: {
    background: i,
    border: none,
  },
  editorBracketPairGuide: {
    activeBackground1: i,
    activeBackground2: i,
    activeBackground3: i,
    activeBackground4: i,
    activeBackground5: i,
    activeBackground6: i,
    background1: i,
    background2: i,
    background3: i,
    background4: i,
    background5: i,
    background6: i,
  },
  editorCodeLens: {
    foreground: i,
  },
  editorCommentsWidget: {
    rangeActiveBackground: i,
    rangeActiveBorder: i,
    rangeBackground: i,
    rangeBorder: i,
    resolvedBorder: i,
    unresolvedBorder: i,
  },
  editorCursor: {
    background: i,
    foreground: white,
  },
  editorError: {
    background: i,
    border: i,
    foreground: i,
  },
  editorGhostText: {
    background: i,
    border: i,
    foreground: i,
  },
  editorGroup: {
    border: black,
    dropBackground: highlight.opaquer(0.3),
    dropIntoPromptBackground: i,
    dropIntoPromptBorder: i,
    dropIntoPromptForeground: i,
    emptyBackground: i,
    focusedEmptyBorder: i,
  },
  editorGroupHeader: {
    border: i,
    noTabsBackground: i,
    tabsBackground: bg.darken(0.2),
    tabsBorder: i,
  },
  editorGutter: {
    addedBackground: green.fade(0.6),
    background: i,
    commentRangeForeground: i,
    deletedBackground: red.fade(0.6),
    foldingControlForeground: i,
    modifiedBackground: secondary,
  },
  editorHint: {
    border: i,
    foreground: i,
  },
  editorHoverWidget: {
    background: bg.darken(0.2),
    border: none,
    foreground: white,
    highlightForeground: i,
    statusBarBackground: i,
  },
  editorIndentGuide: {
    activeBackground: i,
    background: i,
  },
  editorInfo: {
    background: i,
    border: black,
    foreground: i,
  },
  editorInlayHint: {
    background: i,
    foreground: i,
    parameterBackground: i,
    parameterForeground: i,
    typeBackground: i,
    typeForeground: i,
  },
  editorLightBulb: {
    foreground: i,
  },
  editorLightBulbAutoFix: {
    foreground: i,
  },
  editorLineNumber: {
    activeForeground: comment.mix(primary, 0.3),
    foreground: comment,
  },
  editorLink: {
    activeForeground: i,
  },
  editorMarkerNavigation: {
    background: i,
  },
  editorMarkerNavigationError: {
    background: i,
    headerBackground: i,
  },
  editorMarkerNavigationInfo: {
    background: i,
    headerBackground: i,
  },
  editorMarkerNavigationWarning: {
    background: i,
    headerBackground: i,
  },
  editorOverviewRuler: {
    addedForeground: bg,
    background: i,
    border: i,
    bracketMatchForeground: i,
    commonContentForeground: i,
    currentContentForeground: i,
    deletedForeground: bg,
    errorForeground: red,
    findMatchForeground: secondary.fade(0.8),
    incomingContentForeground: i,
    infoForeground: i,
    modifiedForeground: bg,
    rangeHighlightForeground: i,
    selectionHighlightForeground: primary.fade(0.8),
    warningForeground: i,
    wordHighlightForeground: i,
    wordHighlightStrongForeground: i,
  },
  editorPane: {
    background: i,
  },
  editorRuler: {
    foreground: i,
  },
  editorStickyScroll: {
    background: i,
  },
  editorStickyScrollHover: {
    background: i,
  },
  editorSuggestWidget: {
    background: i,
    border: i,
    focusHighlightForeground: i,
    foreground: i,
    highlightForeground: i,
    selectedBackground: i,
    selectedForeground: i,
    selectedIconForeground: i,
  },
  editorSuggestWidgetStatus: {
    foreground: i,
  },
  editorUnicodeHighlight: {
    background: i,
    border: i,
  },
  editorUnnecessaryCode: {
    border: i,
    opacity: i,
  },
  editorWarning: {
    background: i,
    border: i,
    foreground: i,
  },
  editorWhitespace: {
    foreground: i,
  },
  editorWidget: {
    background: bg.darken(0.2),
    border: none,
    foreground: white,
    resizeBorder: i,
  },
  errorForeground: red.desaturate(0.3),
  extensionBadge: {
    remoteBackground: i,
    remoteForeground: i,
  },
  extensionButton: {
    background: i,
    foreground: i,
    hoverBackground: i,
    prominentBackground: i,
    prominentForeground: i,
    prominentHoverBackground: i,
    separator: i,
  },
  extensionIcon: {
    preReleaseForeground: i,
    sponsorForeground: i,
    starForeground: i,
    verifiedForeground: i,
  },
  focusBorder: none,
  foreground: i,
  gitDecoration: {
    addedResourceForeground: green,
    conflictingResourceForeground: i,
    deletedResourceForeground: i,
    ignoredResourceForeground: comment,
    modifiedResourceForeground: secondary,
    renamedResourceForeground: secondary,
    stageDeletedResourceForeground: i,
    stageModifiedResourceForeground: secondary,
    submoduleResourceForeground: i,
    untrackedResourceForeground: green,
  },
  icon: {
    foreground: white,
  },
  input: {
    background: bg.darken(0.35),
    border: i,
    foreground: white,
    placeholderForeground: i,
  },
  inputOption: {
    activeBackground: i,
    activeBorder: i,
    activeForeground: i,
    hoverBackground: i,
  },
  inputValidation: {
    errorBackground: i,
    errorBorder: i,
    errorForeground: i,
    infoBackground: i,
    infoBorder: i,
    infoForeground: i,
    warningBackground: i,
    warningBorder: i,
    warningForeground: i,
  },
  interactive: {
    activeCodeBorder: i,
    inactiveCodeBorder: i,
  },
  keybindingLabel: {
    background: i,
    border: i,
    bottomBorder: i,
    foreground: i,
  },
  keybindingTable: {
    headerBackground: i,
    rowsBackground: i,
  },
  list: {
    activeSelectionBackground: highlight,
    activeSelectionForeground: white,
    activeSelectionIconForeground: white,
    deemphasizedForeground: comment,
    dropBackground: highlight.opaquer(0.4),
    errorForeground: red,
    filterMatchBackground: red,
    filterMatchBorder: i,
    focusAndSelectionOutline: i,
    focusBackground: highlight,
    focusForeground: primary,
    focusHighlightForeground: primary,
    focusOutline: i,
    highlightForeground: primary,
    hoverBackground: highlight,
    hoverForeground: white,
    inactiveFocusBackground: highlight,
    inactiveFocusOutline: i,
    inactiveSelectionBackground: highlight,
    inactiveSelectionForeground: white,
    inactiveSelectionIconForeground: white,
    invalidItemForeground: i,
    warningForeground: yellow,
  },
  listFilterWidget: {
    background: i,
    noMatchesOutline: i,
    outline: i,
    shadow: i,
  },
  menu: {
    background: i,
    border: i,
    foreground: i,
    selectionBackground: i,
    selectionBorder: i,
    selectionForeground: i,
    separatorBackground: i,
  },
  menubar: {
    selectionBackground: i,
    selectionBorder: i,
    selectionForeground: i,
  },
  merge: {
    border: i,
    commonContentBackground: i,
    commonHeaderBackground: i,
    currentContentBackground: i,
    currentHeaderBackground: i,
    incomingContentBackground: i,
    incomingHeaderBackground: i,
  },
  mergeEditor: {
    change: {
      background: i,
      word: {
        background: i,
      },
    },
    changeBase: {
      background: i,
      word: {
        background: i,
      },
    },
    conflict: {
      handled: {
        minimapOverViewRuler: i,
      },
      handledFocused: {
        border: i,
      },
      handledUnfocused: {
        border: i,
      },
      input1: {
        background: i,
      },
      input2: {
        background: i,
      },
      unhandled: {
        minimapOverViewRuler: i,
      },
      unhandledFocused: {
        border: i,
      },
      unhandledUnfocused: {
        border: i,
      },
    },
    conflictingLines: {
      background: i,
    },
  },
  minimap: {
    background: i,
    errorHighlight: red,
    findMatchHighlight: highlight,
    foregroundOpacity: i,
    selectionHighlight: i,
    selectionOccurrenceHighlight: i,
    warningHighlight: i,
  },
  minimapGutter: {
    addedBackground: green,
    deletedBackground: i,
    modifiedBackground: secondary,
  },
  minimapSlider: {
    activeBackground: i,
    background: i,
    hoverBackground: i,
  },
  notebook: {
    cellBorderColor: i,
    cellEditorBackground: i,
    cellHoverBackground: i,
    cellInsertionIndicator: i,
    cellStatusBarItemHoverBackground: i,
    cellToolbarSeparator: i,
    editorBackground: i,
    focusedCellBackground: i,
    focusedCellBorder: i,
    focusedEditorBorder: i,
    inactiveFocusedCellBorder: i,
    inactiveSelectedCellBorder: i,
    outputContainerBackgroundColor: i,
    outputContainerBorderColor: i,
    selectedCellBackground: i,
    selectedCellBorder: i,
    symbolHighlightBackground: i,
  },
  notebookScrollbarSlider: {
    activeBackground: i,
    background: i,
    hoverBackground: i,
  },
  notebookStatusErrorIcon: {
    foreground: i,
  },
  notebookStatusRunningIcon: {
    foreground: i,
  },
  notebookStatusSuccessIcon: {
    foreground: i,
  },
  notificationCenter: {
    border: i,
  },
  notificationCenterHeader: {
    background: i,
    foreground: i,
  },
  notificationLink: {
    foreground: i,
  },
  notifications: {
    background: i,
    border: i,
    foreground: i,
  },
  notificationsErrorIcon: {
    foreground: i,
  },
  notificationsInfoIcon: {
    foreground: i,
  },
  notificationsWarningIcon: {
    foreground: i,
  },
  notificationToast: {
    border: i,
  },
  panel: {
    background: bg,
    border: black,
    dropBorder: i,
  },
  panelInput: {
    border: i,
  },
  panelSection: {
    border: i,
    dropBackground: highlight.opaquer(0.3),
  },
  panelSectionHeader: {
    background: i,
    border: i,
    foreground: i,
  },
  panelTitle: {
    activeBorder: primary,
    activeForeground: white,
    inactiveForeground: comment,
  },
  peekView: {
    border: purple,
  },
  peekViewEditor: {
    background: bg.darken(0.4).mix(purple, 0.05),
    matchHighlightBackground: primary.fade(0.6),
    matchHighlightBorder: i,
  },
  peekViewEditorGutter: {
    background: i,
  },
  peekViewResult: {
    background: bg.darken(0.5).mix(purple, 0.05),
    fileForeground: i,
    lineForeground: comment,
    matchHighlightBackground: primary.fade(0.6),
    selectionBackground: i,
    selectionForeground: i,
  },
  peekViewTitle: {
    background: i,
  },
  peekViewTitleDescription: {
    foreground: comment,
  },
  peekViewTitleLabel: {
    foreground: i,
  },
  pickerGroup: {
    border: i,
    foreground: i,
  },
  ports: {
    iconRunningProcessForeground: i,
  },
  problemsErrorIcon: {
    foreground: i,
  },
  problemsInfoIcon: {
    foreground: i,
  },
  problemsWarningIcon: {
    foreground: i,
  },
  progressBar: {
    background: i,
  },
  quickInput: {
    background: i,
    foreground: i,
    list: {
      focusBackground: i,
    },
  },
  quickInputList: {
    focusBackground: i,
    focusForeground: i,
    focusIconForeground: i,
  },
  quickInputTitle: {
    background: i,
  },
  sash: {
    hoverBorder: i,
  },
  scm: {
    providerBorder: i,
  },
  scrollbar: {
    shadow: none,
  },
  scrollbarSlider: {
    activeBackground: bg.lighten(0.5),
    background: bg.lighten(0.3),
    hoverBackground: bg.lighten(0.4),
  },
  searchEditor: {
    findMatchBackground: highlight,
    findMatchBorder: i,
    textInputBorder: i,
  },
  selection: {
    background: i,
  },
  settings: {
    checkboxBackground: i,
    checkboxBorder: i,
    checkboxForeground: i,
    dropdownBackground: i,
    dropdownBorder: i,
    dropdownForeground: i,
    dropdownListBorder: i,
    focusedRowBackground: i,
    focusedRowBorder: i,
    headerBorder: i,
    headerForeground: i,
    modifiedItemIndicator: i,
    numberInputBackground: i,
    numberInputBorder: i,
    numberInputForeground: i,
    rowHoverBackground: i,
    sashBorder: i,
    textInputBackground: i,
    textInputBorder: i,
    textInputForeground: i,
  },
  sideBar: {
    background: bg.darken(0.2),
    border: black,
    dropBackground: i,
    foreground: white,
  },
  sideBarSectionHeader: {
    background: bg.darken(0.2),
    border: black,
    foreground: white,
  },
  sideBarTitle: {
    foreground: white,
  },
  sideBySideEditor: {
    horizontalBorder: i,
    verticalBorder: i,
  },
  statusBar: {
    background: bg.darken(0.2),
    border: black,
    debuggingBackground: highlight.opaquer(0.3),
    debuggingBorder: i,
    debuggingForeground: i,
    focusBorder: i,
    foreground: white,
    noFolderBackground: i,
    noFolderBorder: i,
    noFolderForeground: i,
  },
  statusBarItem: {
    activeBackground: i,
    compactHoverBackground: i,
    errorBackground: i,
    errorForeground: i,
    focusBorder: i,
    hoverBackground: i,
    prominentBackground: i,
    prominentForeground: i,
    prominentHoverBackground: i,
    remoteBackground: i,
    remoteForeground: i,
    warningBackground: i,
    warningForeground: i,
  },
  symbolIcon: {
    arrayForeground: i,
    booleanForeground: i,
    classForeground: i,
    colorForeground: i,
    constantForeground: i,
    constructorForeground: i,
    enumeratorForeground: i,
    enumeratorMemberForeground: i,
    eventForeground: i,
    fieldForeground: i,
    fileForeground: i,
    folderForeground: i,
    functionForeground: i,
    interfaceForeground: i,
    keyForeground: i,
    keywordForeground: i,
    methodForeground: i,
    moduleForeground: i,
    namespaceForeground: i,
    nullForeground: i,
    numberForeground: i,
    objectForeground: i,
    operatorForeground: i,
    packageForeground: i,
    propertyForeground: i,
    referenceForeground: i,
    snippetForeground: i,
    stringForeground: i,
    structForeground: i,
    textForeground: i,
    typeParameterForeground: i,
    unitForeground: i,
    variableForeground: i,
  },
  tab: {
    activeBackground: bg,
    activeBorder: i,
    activeBorderTop: i,
    activeForeground: white,
    activeModifiedBorder: i,
    border: i,
    hoverBackground: bg,
    hoverBorder: i,
    hoverForeground: i,
    inactiveBackground: bg.darken(0.2),
    inactiveForeground: white,
    inactiveModifiedBorder: i,
    lastPinnedBorder: i,
    unfocusedActiveBackground: i,
    unfocusedActiveBorder: i,
    unfocusedActiveBorderTop: i,
    unfocusedActiveForeground: white,
    unfocusedActiveModifiedBorder: i,
    unfocusedHoverBackground: bg,
    unfocusedHoverBorder: i,
    unfocusedHoverForeground: i,
    unfocusedInactiveBackground: bg.darken(0.2),
    unfocusedInactiveForeground: white,
    unfocusedInactiveModifiedBorder: i,
  },
  terminal: {
    ansiBlack: ansi.normal.black,
    ansiBlue: ansi.normal.blue,
    ansiBrightBlack: ansi.bright.black,
    ansiBrightBlue: ansi.bright.blue,
    ansiBrightCyan: ansi.bright.cyan,
    ansiBrightGreen: ansi.bright.green,
    ansiBrightMagenta: ansi.bright.magenta,
    ansiBrightRed: ansi.bright.red,
    ansiBrightWhite: ansi.bright.white,
    ansiBrightYellow: ansi.bright.yellow,
    ansiCyan: ansi.normal.cyan,
    ansiGreen: ansi.normal.green,
    ansiMagenta: ansi.normal.magenta,
    ansiRed: ansi.normal.red,
    ansiWhite: ansi.normal.white,
    ansiYellow: ansi.normal.yellow,
    background: bg,
    border: i,
    dropBackground: i,
    findMatchBackground: i,
    findMatchBorder: i,
    findMatchHighlightBackground: i,
    findMatchHighlightBorder: i,
    foreground: white,
    inactiveSelectionBackground: i,
    selectionBackground: primary.fade(0.65),
    selectionForeground: i,
    tab: {
      activeBorder: i,
    },
  },
  terminalCommandDecoration: {
    defaultBackground: i,
    errorBackground: i,
    successBackground: i,
  },
  terminalCursor: {
    background: i,
    foreground: i,
  },
  terminalOverviewRuler: {
    cursorForeground: i,
    findMatchForeground: i,
  },
  testing: {
    iconErrored: i,
    iconFailed: i,
    iconPassed: i,
    iconQueued: i,
    iconSkipped: i,
    iconUnset: i,
    message: {
      error: {
        decorationForeground: i,
        lineBackground: i,
      },
      info: {
        decorationForeground: i,
        lineBackground: i,
      },
    },
    peekBorder: i,
    peekHeaderBackground: i,
    runAction: i,
  },
  textBlockQuote: {
    background: i,
    border: i,
  },
  textCodeBlock: {
    background: i,
  },
  textLink: {
    activeForeground: i,
    foreground: i,
  },
  textPreformat: {
    foreground: i,
  },
  textSeparator: {
    foreground: i,
  },
  titleBar: {
    activeBackground: bg.darken(0.2),
    activeForeground: white,
    border: black,
    inactiveBackground: bg.darken(0.2),
    inactiveForeground: white,
  },
  toolbar: {
    activeBackground: i,
    hoverBackground: i,
    hoverOutline: i,
  },
  tree: {
    indentGuidesStroke: none,
    tableColumnsBorder: i,
    tableOddRowsBackground: i,
  },
  walkThrough: {
    embeddedEditorBackground: i,
  },
  welcomePage: {
    background: i,
    progress: {
      background: i,
      foreground: i,
    },
    tileBackground: i,
    tileHoverBackground: i,
    tileShadow: i,
  },
  widget: {
    shadow: none,
  },
  window: {
    activeBorder: i,
    inactiveBorder: i,
  },
};

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
const separators = purple;
const brackets = white;
const cssConsts = orange;

const semantic = {
  'namespace': i,
  'class': i,
  'class.defaultLibrary': builtIns,
  'enum': i,
  'interface': i,
  'struct': i,
  'typeParameter': i,
  'type': i,
  'parameter': {
    italic: true,
  },
  'variable': variables,
  'variable.defaultLibrary': builtIns,
  'variable.declaration': i,
  'property': i,
  'property.defaultLibrary': propRef,
  'property.declaration': propDef,
  'enumMember': i,
  'decorator': i,
  'event': i,
  'function': i,
  'function.defaultLibrary': builtIns,
  'method': i,
  'method.defaultLibrary': builtIns,
  'macro': i,
  'label': i,
  'comment': i,
  'string': i,
  'keyword': i,
  'number': i,
  'regexp': i,
  'operator': i,
};

const syntax = [
  {
    name: 'Language Keywords',
    scope: [
      // Keywords
      'keyword',
      'punctuation.definition.keyword',
      'keyword.expressions-and-types.swift',
      'keyword.operator.new',
      'keyword.operator.of',
      'keyword.operator.delete',
      'variable.language',
      'variable.language punctuation.definition.variable.php',
      'variable.other.readwrite.instance.ruby',
      'variable.parameter.function.language.special',
      // Storage (const, let)
      'storage',
      'meta.implementation storage.type.objc',
      'meta.interface-or-protocol storage.type.objc',
      'source.groovy storage.type.def',
      'storage.modifier',
    ],
    settings: {
      foreground: keywords,
    },
  },
  {
    name: 'Operators (=, +, -), Punctuation (;,)',
    scope: [
      'keyword.operator',
      'storage.type.function.arrow',
      'punctuation.terminator.statement',
      'punctuation.terminator.rule',
      'meta.delimiter.comma',
    ],
    settings: {
      foreground: punctuation,
    },
  },
  {
    name: 'Specials, language support, magic, Regex',
    scope: [
      // Language Built-ins, magic, constants
      'support.variable.other.property',
      'support.function.magic',
      'support.function.method',
      'support.variable',
      'support.type.object.module',
      'support.type.object.module keyword.operator',
      'variable.other.predefined',
      'support.type.property-name',
      'string.regexp',
      'constant.other.character-class.set.regexp',
      'constant.character.escape.backslash.regexp',
      'constant.character.escape',
      'constant.character.string.escape',
      'constant.regexp',
      // Dates / Timestamps (serializable languages)
      'constant.other.date',
      'constant.other.timestamp',
      // YAML aliases
      'variable.other.alias.yaml',
    ],
    settings: {
      foreground: builtIns,
    },
  },
  {
    name: 'CSS Constants, units, keywords',
    scope: [
      'support.constant.property-value.css',
      'support.constant.font-name.css',
      'support.constant.vendored.property-value.css',
      'support.constant.color.w3c-standard-color-name.css',
      'support.function.misc.css',
      'support.function.transform.css',
    ],
    settings: {
      foreground: cssConsts,
    },
  },
  {
    name: 'Variables',
    scope: [
      'constant.other.key.perl',
      'variable.other.object',
      'meta.selectionset.graphql variable',
      'meta.function-call variable.other.readwrite',
      'constant.other.database-name.sql',
      'constant.other.table-name.sql',
    ],
    settings: {
      foreground: variables,
    },
  },
  {
    name: 'Keys',
    scope: [
      'entity.name.tag.yaml',
      // Objects
      'constant.other.object.key',
      'meta.property.object',
      'entity.name.function.accessor',
      'variable.other.property',
      // CSS properties
      'support.type.property-name',
    ],
    settings: {
      foreground: propRef,
    },
  },
  {
    name: 'JSON properties, HTML attributes, CSS properties',
    scope: [
      'support.type.property-name.json',
      'entity.other.attribute-name',
      'meta.property-name support.type.property-name',
      'meta.structure.dictionary.json punctuation.support.type.property-name',
    ],
    settings: {
      foreground: propDef,
    },
  },
  {
    name: 'Function names',
    scope: [
      'entity.name.function.method',
      'entity.name.function',
      'entity.name.fragment.graphql',
      'variable.fragment.graphql',
      'support.function',
    ],
    settings: {
      foreground: functions,
    },
  },
  {
    name: 'Primitives (strings, numbers, boolean, null)',
    scope: [
      'constant',
      'string.quoted',
      'string.template',
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
      // CSS Values
      'meta.property-value.css',
      'keyword.other.unit',
    ],
    settings: {
      foreground: primitives,
    },
  },
  {
    name: 'Classes',
    scope: [
      'entity.name.type.class',
      'entity.name.class',
      'entity.other.inherited-class',
      'variable.other.class',
      'variable.language.this',
      'entity.name.type.instance',
    ],
    settings: {
      foreground: classes,
    },
  },
  {
    name: 'Function parameters',
    scope: [
      'variable.parameter',
      'meta.function.parameters',
      'entity.name.variable.parameter',
      'meta.at-rule.function variable',
      'meta.at-rule.mixin variable',
      'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
      'meta.selectionset.graphql meta.arguments variable',
    ],
    settings: {
      fontStyle: 'italic',
      foreground: params,
    },
  },
  {
    name: 'HTML Tags, React Components',
    scope: [
      'entity.name.tag.html',
      'entity.name.tag.css',
      'entity.name.tag.reference.scss',
      'entity.name.tag.tsx',
      'entity.name.tag.open.jsx',
      'entity.name.tag.open.tsx',
      'entity.name.tag.close.jsx',
      'entity.name.tag.close.tsx',
      'support.class.component.open',
      'support.class.component.close',
      'punctuation.definition.tag',
      // CSS Generic Selectors
      'meta.selector',
      'meta.attribute-selector.scss',
      // CSS attribute parent selectors ('&')
      'meta.selector entity.other.attribute-name',
    ],
    settings: {
      foreground: tags,
    },
  },
  {
    name: 'Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)',
    scope: [
      'constant.other.symbol.hashkey punctuation.definition.constant.ruby',
      'entity.other.attribute-name.placeholder punctuation',
      'entity.other.attribute-name.pseudo-class punctuation',
      'entity.other.attribute-name.pseudo-element punctuation',
      'meta.object-binding-pattern-variable punctuation.destructuring',
      'punctuation.colon.graphql',
      'punctuation.definition.block.scalar.folded.yaml',
      'punctuation.definition.block.scalar.literal.yaml',
      'punctuation.definition.block.sequence.item.yaml',
      'punctuation.definition.entity.other.inherited-class',
      'punctuation.function.swift',
      'punctuation.separator.dictionary.key-value',
      'punctuation.separator.hash',
      'punctuation.separator.inheritance',
      'punctuation.separator.key-value',
      'punctuation.separator.key-value.mapping.yaml',
      'punctuation.separator.namespace',
      'punctuation.separator.pointer-access',
      'punctuation.separator.slice',
      'string.unquoted.heredoc punctuation.definition.string',
      'support.other.chomping-indicator.yaml',
      'punctuation.separator.annotation',
    ],
    settings: {
      foreground: separators,
    },
  },
  {
    name: 'Brackets, braces, parens, etc.',
    scope: [
      'keyword.operator.other.powershell',
      'keyword.other.statement-separator.powershell',
      'meta.brace.round',
      'meta.brace.square',
      'meta.brace.curly',
      'meta.function-call punctuation',
      'punctuation.definition.arguments.begin',
      'punctuation.definition.arguments.end',
      'punctuation.definition.entity.begin',
      'punctuation.definition.entity.end',
      'punctuation.definition.tag.cs',
      'punctuation.definition.type.begin',
      'punctuation.definition.type.end',
      'punctuation.section.scope.begin',
      'punctuation.section.scope.end',
      'punctuation.terminator.expression.php',
      'storage.type.generic.java',
      'string.template meta.brace',
      'string.template punctuation.accessor',
      'punctuation.definition.attribute-selector.end.bracket.square.scss',
      'punctuation.definition.attribute-selector.begin.bracket.square.scss',
    ],
    settings: {
      foreground: brackets,
    },
  },
  // {
  //   name: 'Variable interpolation operators',
  //   scope: [
  //     'meta.string-contents.quoted.double punctuation.definition.variable',
  //     'punctuation.definition.interpolation.begin',
  //     'punctuation.definition.interpolation.end',
  //     'punctuation.definition.template-expression.begin',
  //     'punctuation.definition.template-expression.end',
  //     'punctuation.section.embedded.begin',
  //     'punctuation.section.embedded.coffee',
  //     'punctuation.section.embedded.end',
  //     'punctuation.section.embedded.end source.php',
  //     'punctuation.section.embedded.end source.ruby',
  //     'punctuation.definition.variable.makefile',
  //   ],
  //   settings: {
  //     foreground: builtIns,
  //   },
  // },
  {
    name: 'Comments',
    scope: [
      'comment',
      'punctuation.definition.comment',
      'unused.comment',
      'wildcard.comment',
      'storage.type.class.jsdoc',
      'entity.name.type.instance.jsdoc',
    ],
    settings: {
      foreground: comment,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Types',
    scope: [
      // 'entity.name.type',
      'keyword.primitive-datatypes.swift',
      'keyword.type.cs',
      'meta.protocol-list.objc',
      'meta.return-type.objc',
      'source.go storage.type',
      'source.groovy storage.type',
      'source.java storage.type',
      'source.powershell entity.other.attribute-name',
      'storage.class.std.rust',
      'storage.type.attribute.swift',
      'storage.type.c',
      'storage.type.core.rust',
      'storage.type.cs',
      'storage.type.groovy',
      'storage.type.objc',
      'storage.type.php',
      'storage.type.haskell',
      'storage.type.ocaml',
    ],
    settings: {
      fontStyle: 'italic',
      foreground: purple,
    },
  },
  {
    name: 'Edge cases (foreground color resets)',
    scope: [
      'constant.other.symbol.hashkey.ruby',
      'keyword.operator.dereference.java',
      'keyword.operator.navigation.groovy',
      'meta.scope.for-loop.shell punctuation.definition.string.begin',
      'meta.scope.for-loop.shell punctuation.definition.string.end',
      'meta.scope.for-loop.shell string',
      'storage.modifier.import',
      'punctuation.section.embedded.begin.tsx',
      'punctuation.section.embedded.end.tsx',
      'punctuation.section.embedded.begin.jsx',
      'punctuation.section.embedded.end.jsx',
      'punctuation.separator.list.comma.css',
      'constant.language.empty-list.haskell',
    ],
    settings: {
      foreground: white,
    },
  },
  /**
   * Logs
   */
  {
    scope: ['log.error'],
    settings: {
      foreground: red,
    },
  },
  {
    scope: ['log.warning'],
    settings: {
      foreground: yellow,
    },
  },
  {
    scope: ['log.info'],
    settings: {
      foreground: cyan,
    },
  },
  {
    scope: ['log.debug'],
    settings: {
      foreground: comment,
    },
  },
  {
    scope: ['log.constant'],
    settings: {
      foreground: white,
    },
  },
  /**
   * Markdown
   */
  {
    scope: ['emphasis', 'markup.italic'],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    scope: ['strong', 'markup.bold'],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    scope: ['markup.inserted'],
    settings: {
      foreground: green,
    },
  },
  {
    scope: ['markup.deleted'],
    settings: {
      foreground: red,
    },
  },
  {
    scope: ['markup.error'],
    settings: {
      foreground: red,
    },
  },
  {
    scope: ['markup.changed'],
    settings: {
      foreground: yellow,
    },
  },
  {
    scope: ['markup.underline'],
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    scope: ['invalid'],
    settings: {
      foreground: red,
      fontStyle: 'underline italic',
    },
  },
  {
    name: 'Markup headings',
    scope: [
      'markup.heading',
      'markup.heading.markdown punctuation.definition.string.begin',
      'markup.heading.markdown punctuation.definition.string.end',
    ],
    settings: {
      fontStyle: 'bold',
      foreground: pink,
    },
  },
  {
    name: 'Bullets, lists (prose)',
    scope: [
      'beginning.punctuation.definition.list.markdown',
      'beginning.punctuation.definition.quote.markdown',
      'punctuation.definition.link.restructuredtext',
    ],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'Inline code (prose)',
    scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
    settings: {
      foreground: green,
    },
  },
  {
    name: 'Links (prose)',
    scope: ['markup.underline.link', 'markup.underline.link.image'],
    settings: {
      foreground: blue,
    },
  },
  {
    name: 'Link text, image alt text (prose)',
    scope: [
      'meta.link.reference.def.restructuredtext',
      'punctuation.definition.directive.restructuredtext',
      'string.other.link.description',
      'string.other.link.title',
    ],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: 'Blockquotes (prose)',
    scope: [
      'entity.name.directive.restructuredtext',
      'markup.quote',
      'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin',
      'markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end',
    ],
    settings: {
      foreground: yellow,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Horizontal rule (prose)',
    scope: ['meta.separator.markdown'],
    settings: {
      foreground: purple,
    },
  },
  {
    name: 'Code blocks',
    scope: [
      'fenced_code.block.language',
      'markup.raw.inner.restructuredtext',
      'markup.fenced_code.block.markdown punctuation.definition.markdown',
    ],
    settings: {
      foreground: green,
    },
  },
  {
    name: 'Prose constants',
    scope: ['punctuation.definition.constant.restructuredtext'],
    settings: {
      foreground: pink,
    },
  },
  {
    name: 'Braces in markdown paragraphs',
    scope: [
      'meta.paragraph.markdown punctuation.definition.string.begin',
      'meta.paragraph.markdown punctuation.definition.string.end',
    ],
    settings: {
      foreground: white,
    },
  },
];

const { author, displayName } = JSON.parse(fs.readFileSync('package.json'));

const theme = {
  $schema: 'vscode://schemas/color-theme',
  name: displayName,
  author: author.name,
  semanticHighlighting: true,
  semanticTokenColors: hexYeah(semantic),
  colors: flatten(hexYeah(workbench)),
  tokenColors: hexYeah(syntax),
};

export default theme;
