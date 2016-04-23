module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/views/js/main.js',
        dest: 'dist/views/js/main.min.js',
      }
    },
    cssmin: {
        minify: {
        src: 'src/views/css/style.css',
        dest: 'dist/views/css/style.min.css'
      }
    },
    htmlmin: {
        minify: {
        src: 'src/views/pizza.html',
        dest: 'dist/views/pizza.min.html'
      }
    },
    processhtml: {
        build: {
            files: {
                'dist/views/js/main.min.js' : ['src/views/js/main.js'],
                'dist/views/css/style.min.css' : ['src/views/css/style.css']
            }
        }
    }
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-processhtml');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin', 'htmlmin']);

};