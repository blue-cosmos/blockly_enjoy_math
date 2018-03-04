'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');


Blockly.JavaScript['action_forward'] = function(block) {
    var length = block.getFieldValue('fwd_length');
    var code = "-"+length;
    console.log(code);
    return code;
};

Blockly.JavaScript['action_backward'] = function(block) {
    var length = block.getFieldValue('bwd_length');
    var code = "+"+length;
    return code;
};