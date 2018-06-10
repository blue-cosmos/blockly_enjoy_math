'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');


Blockly.JavaScript['figure_circle_area'] = function(block) {
    var radius = parseFloat(block.getFieldValue('Radius'));
    var code = 3*radius*radius;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];

};

Blockly.JavaScript['figure_circle_area_exp'] = function(block) {
    var radius = parseFloat(block.getFieldValue('Radius'));
    var op = block.getFieldValue('OP');
    var a = block.getFieldValue('A');
    var code = 3+'*'+radius+'*'+radius+op+a;
    var result = eval(code);
    return [result, Blockly.JavaScript.ORDER_ATOMIC];

};

Blockly.JavaScript['figure_square_area'] = function(block) {
    var edgelength = parseFloat(block.getFieldValue('EdgeLength'));
    var code = edgelength*edgelength;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];

};

Blockly.JavaScript['figure_square_area_exp'] = function(block) {
    var edgelength = block.getFieldValue('EdgeLength');
    var op = block.getFieldValue('OP');
    var a = block.getFieldValue('A');
    var code = edgelength+'*'+edgelength+op+a;
    var result = eval(code);

    console.log(result);

    return [result, Blockly.JavaScript.ORDER_ATOMIC];

};

Blockly.JavaScript['figure_print'] = function(block) {
    // Print statement.
    var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
        Blockly.JavaScript.ORDER_NONE) || '\'\'';
    return 'window.alert(' + msg + ');\n';
};

Blockly.JavaScript['general_expression'] = function(block) {
    var A = block.getFieldValue('A');
    var B = block.getFieldValue('B');
    var OP = block.getFieldValue('OP');
    var result = eval(A+OP+B);
    console.log(A+OP+B);
    console.log(result);
    return result+'';
};

Blockly.JavaScript['general_tri_expression'] = function(block) {
    var A = block.getFieldValue('A');
    var B = block.getFieldValue('B');
    var C = block.getFieldValue('C');
    var OP1 = block.getFieldValue('OP1');
    var OP2 = block.getFieldValue('OP2');
    var result = eval(A+OP1+B+OP2+C);
    console.log(A+OP1+B+OP2+C);
    console.log(result);
    return result+'';
};


Blockly.JavaScript['general_math_arithmetic'] = function(block) {
    var A = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
    var B = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
    var OP1 = block.getFieldValue('OP1');
    var result = eval(A+OP1+B);
    console.log(A+OP1+B);
    console.log('generator general_math_tri_arithmetic');
    return result+'';
};


