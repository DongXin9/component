module.exports = function(grunt){
  grunt.initConfig({ 
    htmlmin:{
      options:{
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      } 
    },
    cssmin: {
      'dist/index.css': 'index.css'
    },
    uglify:{
      release:{
        files:{
          'dist/main.js':'main.js'
        }   
      }
    } 
  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('release',['htmlmin','cssmin','uglify']);
};
