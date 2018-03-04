'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');
Blockly.Blocks['action_forward'] = {
    /**
     * Block for moving forward.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": '前进',
            "previousStatement": null,
            "nextStatement": null,
            "colour": 290,
            "tooltip": '前进一步'
        });
    }
};

Blockly.Blocks['action_backward'] = {
    /**
     * Block for moving forward.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": '后退',
            "previousStatement": null,
            "nextStatement": null,
            "colour": 290,
            "tooltip": '后退一步'
        });
    }
};