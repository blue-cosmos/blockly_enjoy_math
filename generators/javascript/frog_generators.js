'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');


Blockly.JavaScript['action_forward'] = function(block) {
    var length = block.getFieldValue('fwd_length');
    var code = "";
    for (var i=0; i<length; i++)
    {
        code += '-1';
    }
    console.log(code);
    return code;
};

Blockly.JavaScript['action_backward'] = function(block) {
    var length = block.getFieldValue('bwd_length');
    var code = "";
    for (var i=0; i<length; i++)
    {
        code += '+1';
    }
    console.log(code);
    return code;
};