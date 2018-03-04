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
            "message0": "前进%1米",
            "args0": [
                {
                    "type": "field_number",
                    "name": "fwd_length",
                    "value": "0",   //初始化值
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 150,
            "tooltip": '输入前进长度'
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
            "message0": '后退%1米',
            "args0": [
                {
                    "type": "field_number",
                    "name": "bwd_length",
                    "value": "0",   //初始化值
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 290,
            "tooltip": '输入后退长度'
        });
    }
};

