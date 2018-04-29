/* eslint-env node */
/* global require */

'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        // sourceMap: true
      },
      dist: {
        files: {
          'docroot/css/main.css': 'scss/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 versions', 'ie 10']
        // For testing purposes, use this config
        // browsers: ['opera 12', 'ff 15', 'chrome 25']
      },
      single_file: {
        src: 'docroot/css/main.css',
        dest: 'docroot/css/main.css'
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
            src : [
                'docroot/css/*.css',
                'docroot/*.html'
            ]
        },
        options: {
            watchTask: true,
            server: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['sass', 'autoprefixer']);
  grunt.registerTask('watchin', ['browserSync', 'watch']);

};
