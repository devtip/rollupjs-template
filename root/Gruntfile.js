// Gruntfile Configuration


'use strict';
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.config("jshint",  {
    all: [
      'Gruntfile.js',
      'build/*.js'
    ],
    options: {
      jshintrc: '.jshintrc',
    },
  });

};