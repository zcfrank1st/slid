module.exports = function (grunt) {
  'use strict';
  grunt.registerTask('greet', function (name) {
    grunt.log.writeln('Hi there, ' + name);
  });

  grunt.registerTask('addNumbers', 'demodemo', function (first, second) {
    if (isNaN(Number(first))) {
      grunt.fatal('the first argu must number');
    }
    var total = Number(first) + Number(second);
    grunt.log.writeln(total);
  });

  grunt.registerTask('default', ['greet:chaos', 'addNumbers:1:2']);
};