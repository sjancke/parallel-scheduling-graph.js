module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8081,
                    base: './'
                }
            }
        },
        typescript: {
            base: {
                src: ['lib/**/*.ts'],
                dest: 'js/parallel-scheduling.min.js',
                options: {
                    module: 'amd',
                    target: 'es5'
                }
            }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['typescript']
        },
        open: {
            dev: {
                path: 'http://localhost:8081/index.html'
            }
        }
    });

    grunt.registerTask('default', ['connect', 'open', 'watch']);

}
