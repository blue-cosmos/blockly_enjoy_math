'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Blocks['car_set_speed'] = {
    /**
     * Block for set speed.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "colour": 12,
            "message0": "设置车速  %1 米/分钟",
            "args0": [{
                "type": "field_number",
                "name": "speed",
                "check": "Number"
            }],
            //"output": "Number",
            "tooltip": "设置车速",
            "previousStatement": null,
            "nextStatement": null
        });
        console.log("Create block car_set_speed");
    }
};

Blockly.Blocks['car_run_time'] = {
    /**
     * Block for set speed.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "colour": 100,
            "message0": "行驶 %1 分钟",
            "args0": [{
                "type": "field_number",
                "name": "time",
                "check": "Number"
            }],
            //"output": "Number",
            "tooltip": "行驶",
            "previousStatement": null,
            "nextStatement": null
        });
        console.log("Create block car_run_time");
    }
};
