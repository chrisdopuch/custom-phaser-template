module.exports = function(grunt) {
    grunt.initConfig({
        "bower-install-simple": {
            options: {
                color: true,
                directory: "bower_components"
            },
            "prod": {
                options: {
                    production: true
                }
            },
            "dev": {
                options: {
                    production: false
                }
            }
        },
        "concat": {
            phaser: {
                files: {
                    'build/js/phaser/phaser.js': ['bower_components/phaser-official/build/phaser.js'],
                    'deploy/js/phaser/phaser.min.js': ['bower_components/phaser-official/build/phaser.min.js'],
                    'build/js/phaser/phaser.map': ['bower_components/phaser-official/build/phaser.map'],
                    'deploy/js/phaser/phaser.map': ['bower_components/phaser-official/build/phaser.map']
                }
            },
            requirejs: {
                files: {
                    'build/js/requirejs/require.js': ['bower_components/requirejs/require.js'],
                    'build/js/requirejs/r.js': ['bower_components/r.js/dist/r.js']
                }
            },
            underscore: {
                files: {
                    'build/js/underscore/underscore.js': ['bower_components/underscore/underscore.js'],
                    'deploy/js/underscore/underscore-min.js': ['bower_components/underscore/underscore-min.js'],
                    'deploy/js/underscore/underscore-min.map': ['bower_components/underscore/underscore-min.map']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'build/js/app/**/*.js'],
            options: {
                globals: {
                    jQuery: false
                }
            }
        },
    });

    grunt.loadNpmTasks("grunt-bower-install-simple");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('bower', [
      'bower-install-simple',
      'concat'
    ]);
    grunt.registerTask('default', ['jshint', 'bower']);
};