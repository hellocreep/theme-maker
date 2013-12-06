// Generated on 2013-12-04 using generator-webapp 0.4.4
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
           
        },
        connect: {
            server: {
                options: {
                    base: '.',
                    port: 9000,
                    keepalive: true
                }
            }
        },
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            dist: {
                src: [
                    'css/bootstrap.css',
                    'css/font-awesome.css',
                    'css/icheck.css',
                    'css/colpick.css',
                    'css/jquery.nouislider.css',
                    'css/theme-maker.css'
                ],
                dest: 'css/main.css'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        cssmin: {
           options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',
            }, 
            combine: {
                files: {
                    'css/main.min.css': ['css/main.css']
                }
            }
        },
        // Put files not handled in other tasks here
        copy: {
            
        },
        requirejs: {
            compile: {
                options: {
                    appDir: 'js',
                    baseUrl: './',
                    dir: 'js-build',
                    paths: {
                        /* Vendor */
                        jquery: 'vendor/jquery-1.10.2.min',
                        colpick: 'vendor/colpick',
                        nouislider: 'vendor/jquery.nouislider',
                        underscore: 'vendor/underscore',
                        icheck: 'vendor/jquery.icheck',
                        text: 'vendor/text',
                        carousel: 'vendor/carousel',
                        dropdown: 'vendor/dropdown',

                        /* Modules */
                        theme_maker: 'modules/theme-maker'
                    },
                    shim: {
                        colpick: {
                            exports: 'colpick',
                            deps: ['jquery']
                        },
                        nouislider: {
                            exports: 'noUiSlider',
                            deps: ['jquery']
                        },
                        underscore: {
                            exports: '_'
                        },
                        icheck: {
                            exports: 'iCheck',
                            deps: ['jquery']
                        },
                        carousel: {
                            exports: 'carousel',
                            deps: ['jquery']
                        },
                        dropdown: {
                            exports: 'dropdown',
                            deps: ['jquery']
                        }
                    },
                    modules: [
                        {
                            name: 'main',
                            include: ['theme_maker']
                        }
                    ]
                }
            }
        }
    });

    grunt.registerTask('css', [
        'concat',
        'cssmin'
    ]);


    grunt.registerTask('server', ['connect']);
};
