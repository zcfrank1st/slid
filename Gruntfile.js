module.exports = function (grunt) {
  grunt.initConfig({
    clean: ['target/slide.html'],
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-test');


  grunt.registerTask('cc', 'clean');
  grunt.registerTask('test', 'mochaTest');
};