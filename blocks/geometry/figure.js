'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');

/* block: figure_circle_area
 * calculate the area of a circle
 * input:  R
 * output: S
 * */
Blockly.Blocks['figure_circle_area'] = {
    /**
     * Block for moving forward.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "colour": 12,
            "message0": "圆面积",
            "message1": "半径 %1",
            "args1": [{
                "type": "field_number",
                "name": "Radius",
                "variable": "item",
                "variableTypes": [""],
                "check": "Number"
            }],

            "output": "Number",
            "tooltip": "输入圆半径计算面积"

        });
        console.log("Create block figure_circle_area");
    }
};


Blockly.Blocks['figure_square_area'] = {
    init: function () {
        this.jsonInit({
            "colour": 12,
            "message0": "正方形面积",

            "message1": "边长 %1",
            "args1": [{
                "type": "field_number",
                "name": "EdgeLength",
                "variable": "item",
                "variableTypes": [""],
                "check": "Number"
            }],

            "tooltip": "输入正方形边长计算面积"

        });

        this.setOutput(true, 'Number');
        console.log("Create block figure_square_area");
    }
}

Blockly.Blocks['figure_print'] = {
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


