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


Blockly.Blocks['action_forward_block'] = {
    /**
     * Block for moving forward.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": "前进%1格",
            "args0": [
                {
                    "type": "field_number",
                    "name": "fwd_blcok",
                    "value": "0",   //初始化值
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 150,
            "tooltip": '前进一步'
        });
    }
};

Blockly.Blocks['action_turn_right'] = {
    /**
     * Block for moving forward.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": "右转",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 200,
            "tooltip": '右转90度'
        });
    }
};

Blockly.Blocks['action_turn_left'] = {
    /**
     * Block for moving forward.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": "左转",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 250,
            "tooltip": '左转90度'
        });
    }
};

Blockly.Blocks['frog_controls_repeat'] = {
    /**
     * Block for repeat n times (internal number).
     * The 'controls_repeat_ext' block is preferred as it is more flexible.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
            "args0": [
                {
                    "type": "field_number",
                    "name": "TIMES",
                    "value": 10,
                    "min": 0,
                    "precision": 1
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 1,
            "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
            "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};


