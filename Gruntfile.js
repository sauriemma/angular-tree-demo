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
              'dist/**/*.html'
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
        meta: {
          jsFilesForTesting: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js'
            //'bower_components/angular-route/angular-route.js',
            //'bower_components/angular-sanitize/angular-sanitize.js',
            //'bower_components/angular-mocks/angular-mocks.js',
            //'bower_components/restangular/dist/restangular.js',
            //'bower_components/underscore/underscore.js',
            //'bower_components/underscore/underscore.js',
            //'test/**/*Spec.js'
          ]
        },
        karma: {
          development: {
            configFile: 'karma.conf.js',
            // Get files from karma.conf.js
            //options: {
            //  files: [
            //    '<%= meta.jsFilesForTesting %>',
            //    'src/**/*.js'
            //  ],
            //}
          },
        },
        jshint: {
          beforeconcat: ['src/**/*.js'],
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/app.js', 'src/bookmarks/**/*.js', 'src/home/**/*.js', 'src/controllers/**/*.js'],
                dest: 'dist/<%= package.namelower %>-<%= package.version %>.js'
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'dist/<%= package.namelower %>-<%= package.version %>.min.js': ['dist/<%= package.namelower %>-<%= package.version %>.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test', ['karma:development']);
    grunt.registerTask('build-all',
    [
      'jshint',
      'karma:development',
      'concat',
      'uglify'
    ]);
    grunt.registerTask('build',
    [
        'jshint',
        'concat',
        'uglify'
    ]);
};