import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

monaco.editor.defineTheme('fairyfloss', {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      foreground: 'e6c000',
      token: 'comment'
    },
    {
      foreground: 'ffea00',
      token: 'string'
    },
    {
      foreground: 'c5a3ff',
      token: 'constant.numeric'
    },
    {
      foreground: 'c5a3ff',
      token: 'constant.language'
    },
    {
      foreground: 'c5a3ff',
      token: 'constant.character'
    },
    {
      foreground: 'c5a3ff',
      token: 'constant.other'
    },
    {
      foreground: 'ffb8d1',
      token: 'keyword'
    },
    {
      foreground: 'ffb8d1',
      token: 'storage'
    },
    {
      foreground: 'c2ffdf',
      fontStyle: 'italic',
      token: 'storage.type'
    },
    {
      foreground: 'fff352',
      fontStyle: 'underline',
      token: 'entity.name.class'
    },
    {
      foreground: 'fff352',
      fontStyle: 'italic underline',
      token: 'entity.other.inherited-class'
    },
    {
      foreground: 'fff352',
      token: 'entity.name.function'
    },
    {
      foreground: 'ff857f',
      fontStyle: 'italic',
      token: 'variable.parameter'
    },
    {
      foreground: 'ffb8d1',
      token: 'entity.name.tag'
    },
    {
      foreground: 'fff352',
      token: 'entity.other.attribute-name'
    },
    {
      foreground: 'c2ffdf',
      token: 'support.function'
    },
    {
      foreground: 'c2ffdf',
      token: 'support.constant'
    },
    {
      foreground: 'c2ffdf',
      fontStyle: 'italic',
      token: 'support.type'
    },
    {
      foreground: 'c2ffdf',
      fontStyle: 'italic',
      token: 'support.class'
    },
    {
      foreground: 'f8f8f0',
      background: 'f92672',
      token: 'invalid'
    },
    {
      foreground: 'f8f8f0',
      background: 'ae81ff',
      token: 'invalid.deprecated'
    }
  ],
  colors: {
    'editor.foreground': '#F8F8F2',
    'editor.background': '#5A5475',
    'editor.selectionBackground': '#8077A8',
    'editor.lineHighlightBackground': '#716799',
    'editorCursor.foreground': '#F8F8F0',
    'editorWhitespace.foreground': '#A8757B'
  }
})
