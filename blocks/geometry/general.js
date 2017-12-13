'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Blocks['general_print'] = {
    /**
     * Block for print statement.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.TEXT_PRINT_TITLE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT"
                }
            ],

            "colour": 160,
            "tooltip": "显示结果"
        });
    }
};