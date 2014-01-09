var karma = require('karma');

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib');

    grunt.initConfig({
        builddir: 'build'
    });

    grunt.registerTask('default', 'Default task', function() {
       grunt.log.write('Logging some stuff...').ok();
    });
}