module.exports = function(grunt) {
  grunt.registerTask('funcunit', 'Test your application with FuncUnit', function() {
    this.requiresConfig('funcunit');

    var config = grunt.config('funcunit'),
    promise = require('promised-io/promise'),
    path = (config.src || '') + '/funcunit/node/phantom.js',
    funcunit = require(process.cwd() + '/' + path),
    done = this.async(),
    pages = [],
    i = 0;

    var test = function() {
      return funcunit.run(config.urls[i++]);
    };

    config.urls.forEach(function(url) {
      pages.push(test);
    });

    var deferred = promise.seq(pages);
    deferred.then(function() {
      done();
    }, function(e) {
      done(false);
    });
  });
};