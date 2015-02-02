define([
    'phaser'
], function (
    Phaser
) { 
    'use strict';

    function BootState() {}
    
    BootState.prototype = {
        preload: function() {

        },
        create: function() {
            this.game.state.start('Preload');
        }
    };
    
    return BootState;
});