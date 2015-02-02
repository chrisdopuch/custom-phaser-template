define([
    'phaser'
], function (
    Phaser
) { 
    'use strict';

    function GameState() {}
    
    GameState.prototype = {
        preload: function() {

        },
        create: function() {
            this.game.state.start('Game');
        }
    };
    
    return GameState;
});