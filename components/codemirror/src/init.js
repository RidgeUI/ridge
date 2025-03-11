const getTheme = async name => {
  const allThemes = await import('thememirror')

  if (allThemes[name]) {
    return allThemes[name]
  } else {
    return null
  }
}

const config = {
  // eslint configuration
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    }
  },
  rules: {
    semi: ['error', 'never']
  }
}
const initEditor = async (div, type, theme, text) => {
  if (div.editorComposite) {
    div.editorComposite.destroy()
  }

  const { EditorView, basicSetup } = await import('codemirror')
  const { tooltips, keymap } = await import('@codemirror/view')
  const { indentWithTab } = await import('@codemirror/commands')

  const extensions = [basicSetup, keymap.of([indentWithTab]), tooltips({
    position: 'absolute'
  })]

  if (type === 'css') {
    const { css } = await import('@codemirror/lang-css')
    extensions.push(css())
  }
  if (type === 'javascript') {
    const { Linter } = await import(/* webpackChunkName: "codemirror-linter" */ 'eslint-linter-browserify')
    const { javascript, esLint } = await import('@codemirror/lang-javascript')
    const { linter, lintGutter } = await import('@codemirror/lint')
    extensions.push(javascript())
    extensions.push(lintGutter())
    extensions.push(linter(esLint(new Linter(), config)))
  }
  if (type === 'json') {
    const { json } = await import('@codemirror/lang-json')
    extensions.push(json())
  }
  const themeExt = await getTheme(theme)
  if (themeExt) {
    extensions.push(themeExt)
  }
  div.editorComposite = new EditorView({
    doc: text,
    extensions,
    parent: div
  })
}

export default initEditor
