/**
 * Created by sauriemm on 3/21/2016.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        bowerInstall: { 
          target: {

            // Point to the files that should be updated when 
            // you run `grunt bower-install` 
            src: [
              '*.html',   // .html support... 
              //'app/views/**/*.jade',   // .jade support... 
              //'app/styles/main.scss',  // .scss & .sass support... 
              //'app/config.yml'         // and .yml & .yaml support out of the box! 
            ],

            // Optional: 
            // --------- 
            cwd: '',
            dependencies: true,
            devDependencies: false,
            exclude: [],
            fileTypes: {},
            ignorePath: '',
            overrides: {}
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-install');

    grunt.registerTask('default', ['jshint']);

};