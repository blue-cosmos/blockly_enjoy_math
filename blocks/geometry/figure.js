'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');


Blockly.Blocks['circle_area'] = {
    /**
     * Block for moving forward.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "previousStatement": null,
            "nextStatement": null,
            "colour": 208,
        });

        this.appendValueInput('VALUE')
            .setCheck('String');
    }
};