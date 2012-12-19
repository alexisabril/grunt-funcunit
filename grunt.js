module.exports = function(grunt) {

  grunt.initConfig({
    funcunit: {
      src: 'lib',
      urls: ['http://localhost/grunt-funcunit/lib/funcunit/funcunit.html']
    }
  });

  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', 'funcunit');
};