module.exports = {
  dist: {
    src: 'lib/<%= pkg.name.replace(/\.js$/, "") %>.js',
    dest: 'dist/<%= pkg.name.replace(/\.js$/, "") %>.js', // optional, if missing the src will be used
    indent: '  ',
    objectToExport: 'microtools'
  }
}
