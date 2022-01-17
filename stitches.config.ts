import {createStitches} from '@stitches/react'
import type * as Stitches from '@stitches/react'
import {gray} from '@radix-ui/colors'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...gray,
    },
    fonts: {
      body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"',
      heading: '$body',
      mono: '"Source Code Pro", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSizes: {
      xs: '16px',
      sm: '18px',
      md: '20px',
      lg: '24px',
      xl: '28px',
    },
    fontWeights: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      heavy: '800',
      black: '900',
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeights: {
      none: 1,
      xs: 1.25,
      sm: 1.375,
      md: 1.5,
      lg: 1.625,
      xl: 2,
    },
    sizes: {
      full: '100%',
    },
  },
  media: {
    bp1: '(min-width: 750px)',
    'reduced-motion': '(prefers-reduced-motion: reduce)',
  },
  utils: {
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'margin'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'margin'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
    }),
  },
})

export const globalStyles = globalCss({
  '*, ::before, ::after': {
    boxSizing: 'border-box',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '$gray7',
  },
  html: {
    lineHeight: 1.5,
    '-webkit-text-size-adjust': '100%',
    '-moz-tab-size': 4,
    tabSize: 4,
    fontFamily: '$body',
    fontSize: '$md',
  },
  body: {
    margin: 0,
    lineHeight: 'inherit',
    color: '$gray12',
    minHeight: '100vh',
    textRendering: 'optimizeSpeed',
  },
  hr: {
    height: 0,
    color: 'inherit',
    borderTopWidth: '1px',
  },
  'abbr:where([title])': {
    textDecoration: 'underline dotted',
  },
  [`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
  `]: {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    fontFamily: '$heading',
  },
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  'b, strong': {
    fontWeight: 'bolder',
  },
  [`
    code,
    kbd,
    samp,
    pre
  `]: {
    fontFamily: '$mono',
    fontSize: '1em',
  },
  small: {
    fontSize: '80%',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  table: {
    textIndent: 0,
    borderColor: 'inherit',
    borderCollapse: 'collapse',
  },
  [`
    button,
    input,
    optgroup,
    select,
    textarea
  `]: {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 'inherit',
    color: 'inherit',
    margin: 0,
    padding: 0,
  },
  'button, select': {
    textTransform: 'none',
  },
  [`
    button,
    [type='button'],
    [type='reset'],
    [type='submit'],
  `]: {
    '-webkit-appearance': 'button',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
  },
  ':-moz-focusring': {
    outline: 'auto',
  },
  ':-moz-ui-invalid': {
    boxShadow: 'none',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  [`
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button
  `]: {
    height: 'auto',
  },
  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    outlineOffset: '-2px',
  },
  '::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },
  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },
  summary: {
    display: 'list-item',
  },
  [`
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre
  `]: {
    margin: 0,
  },
  fieldset: {
    margin: 0,
    padding: 0,
  },
  legend: {
    padding: 0,
  },
  'ol, ul, menu': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  textarea: {
    resize: 'vertical',
  },
  'input::placeholder, textarea::placeholder': {
    opacity: 1,
    color: '$gray11',
  },
  'button, [role="button"]': {
    cursor: 'pointer',
  },
  ':disabled': {
    cursor: 'default',
  },
  [`
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object
  `]: {
    display: 'block',
    verticalAlign: 'middle',
  },
  'img, video': {
    maxWidth: '100%',
    height: 'auto',
  },
  '[hidden]': {
    display: 'none',
  },
  'html:focus-within': {
    scrollBehavior: 'smooth',
  },
  'a:not([class])': {
    textDecorationSkipInk: 'auto',
  },
  '@reduced-motion': {
    'html:focus-within': {
      scrollBehavior: 'auto',
    },
    [`
      *,
      *::before,
      *::after
    `]: {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },
})
