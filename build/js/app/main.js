(function () {
    'use strict';

    requirejs.config({
        baseUrl: "js/",
        paths: {
            phaser: 'phaser/phaser',
            underscore: 'underscore/underscore',
            jquery: 'jquery/jquery'
        },
        shim: {
            'phaser': {
                exports: 'Phaser'
            }
        }
    });
 
    require([
        'phaser',
        'app/game'
    ],
    function (
        Phaser,
    ) {
        var game = new Game();
        game.start();
    });
}());