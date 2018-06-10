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

Blockly.JavaScript['action_forward_block'] = function(block) {
    var length = block.getFieldValue('fwd_blcok');
    var code = "";
    for (var i=0; i<length; i++)
    {
        code += '+1';
    }
    console.log(code);
    return code;
};

Blockly.JavaScript['action_turn_right'] = function(block) {
    var code = "tr";
    console.log(code);
    return code;
};

Blockly.JavaScript['action_turn_left'] = function(block) {
    var code = "tl";
    console.log(code);
    return code;
};

Blockly.JavaScript['frog_controls_repeat'] = function(block) {
    // Repeat n times.
    if (block.getField('TIMES')) {
        // Internal number.
        var repeats = String(Number(block.getFieldValue('TIMES')));
    } else {
        // External number.
        var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    }
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    //branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
    console.log(branch);
/*    var code = '';
    var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
        'count', Blockly.Variables.NAME_TYPE);
    var endVar = repeats;
    if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
        var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
            'repeat_end', Blockly.Variables.NAME_TYPE);
        code += 'var ' + endVar + ' = ' + repeats + ';\n';
    }
    code += 'for (var ' + loopVar + ' = 0; ' +
        loopVar + ' < ' + endVar + '; ' +
        loopVar + '++) {\n' +
        branch + '}\n';*/
    branch = $.trim(branch);
    var code = branch.repeat(repeats);
    //var code = 'r'+repeats+$.trim(branch);
    return code;

};