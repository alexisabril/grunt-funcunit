module.exports = function(grunt) {
  grunt.registerTask('funcunit', 'Test your application with FuncUnit', function() {
    this.requiresConfig('funcunit');

    var funcunit = grunt.config('funcunit'),
    steal = grunt.config('steal'),
    os = require('os'),
    js = os.platform() === 'win32' ? 'js.bat ' : './js ',
    gruntDir = process.cwd(),
    exec = require('child_process').exec,
    done = this.async();

    process.chdir(steal && steal.js || '.');

    cmd = js + 'funcunit/run ' + funcunit.path;
    grunt.log.writeln('\nRunning: ' + cmd);

    exec(cmd, function(error, stdout, stderr) {
      process.chdir(gruntDir);

      if(stderr) {
        grunt.log.error(stderr);
        done(false);
      }
      else {
        grunt.log.writeln(stdout);
        done(true);
      }
    });
  });
};