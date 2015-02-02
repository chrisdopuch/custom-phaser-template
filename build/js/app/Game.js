define([
    'phaser',
    'app/states/BootState',
    'app/states/PreloadState',
    'app/states/GameState'
], function (
    Phaser,
    BootState,
    PreloadState,
    GameState
) { 
    'use strict';

    function Game() {}
    
    Game.prototype = {
        start: function() {
            var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
            game.state.add('Boot', BootState);
            game.state.add('Preload', PreloadState);
            game.state.add('Game', GameState);
            game.state.start('Boot');
        }
    };
    
    return Game;
});