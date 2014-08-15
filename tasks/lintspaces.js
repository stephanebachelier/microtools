module.exports = {
  options: {
    editorconfig: '.editorconfig',
    ignores: [
      'js-comments'
    ]
  },
  gruntfile: {
    src: ['Gruntfile.js', 'tasks/{,*/}*.js']
  },
  lib: {
    src: ['lib/**/*.js']
  },
  test: {
    src: ['test/spec/**/*.js']
  }
};
