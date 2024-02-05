import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  vue: true,
  jsonc: false,
  yaml: false,
  files: ['app/frontend/**/*.{js,vue}'],
})
