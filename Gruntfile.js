/**
 * Created by sauriemm on 3/21/2016.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
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
        },
        'concat': {
            'dist': {
                'src': ['src/**/*.js'],
                'dest': 'dist/<%= package.namelower %>-<%= package.version %>.js'
            }
        },
        'uglify': {
            'options': {
                'mangle': false
            },
            'dist': {
                'files': {
                    'dist/<%= package.namelower %>-<%= package.version %>.min.js': ['dist/<%= package.namelower %>-<%= package.version %>.js']
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jshint']);

};