module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    // 关闭驼峰命名规则
    'vue/multi-word-component-names': 0
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  overrides: [
    // 这里是添加的代码
    {
      files: [
        'src/views/index.vue',
        'src/views/**/*.vue',
        'src/components/**/*.vue',
        'src/components/AppHeader/**/*.vue'
      ], // 匹配views和二级目录中的index.vue
      rules: {
        camelcase: 'off'
      } // 给上面匹配的文件指定规则
    }
  ]
}
