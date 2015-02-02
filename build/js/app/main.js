(function () {
    'use strict';

    requirejs.config({
        baseUrl: "js/",
        paths: {
            phaser: 'lib/phaser/phaser',
            underscore: 'lib/underscore/underscore',
            jquery: 'lib/jquery/jquery'
        },
        shim: {
            'phaser': {
                exports: 'Phaser'
            }
        }
    });
 
    require([
        'phaser',
        'app/Game'
    ],
    function (
        Phaser,
        Game
    ) {
        var game = new Game();
        game.start();
    });
}());