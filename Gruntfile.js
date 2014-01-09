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
    grunt.registerTask('default', ['bower']);
}