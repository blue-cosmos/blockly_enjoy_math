'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.JavaScript['car_set_speed'] = function(block) {
    var speed = parseFloat(block.getFieldValue('speed'));
    return 'v' + speed;
};

Blockly.JavaScript['car_run_time'] = function(block) {
    var time = parseFloat(block.getFieldValue('time'));
    return 'r'+time;
};