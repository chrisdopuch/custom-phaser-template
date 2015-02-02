define([
    'phaser'
], function (
    Phaser
) { 
    'use strict';

    function PreloadState() {}
    
    PreloadState.prototype = {
        preload: function() {

        },
        create: function() {
            this.game.state.start('Game');
        }
    };
    
    return PreloadState;
});