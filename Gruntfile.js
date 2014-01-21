module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                install: true,
                verbose: false
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-npm-install');
    grunt.registerTask('default', ['bower', 'npm-install']);
}