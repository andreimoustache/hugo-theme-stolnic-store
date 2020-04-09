module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        './themes/stolnic/layouts/**/*.html'
      ],
      whitelist: [
        'highlight',
        'pre',
        'video',
        'code',
        'content',
        'field',
        'field-body',
        'control',
        'is-fullwidth',
        'input',
        'select',
        'h3',
        'h4',
        'h5',
        'h6',
        'ul',
        'li'
      ]
    }
  }
};
