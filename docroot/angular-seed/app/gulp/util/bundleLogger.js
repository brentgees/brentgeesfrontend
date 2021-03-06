/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
*/
/*jslint node: true */
'use strict';
var gutil = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function (filepath) {
    startTime = process.hrtime();
    gutil.log('Bundling', gutil.colors.green(filepath) + '...');
  },

  end: function (filepath) {
    var taskTime = process.hrtime(startTime),
      prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
  }
};
