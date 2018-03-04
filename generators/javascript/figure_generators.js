'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');


Blockly.JavaScript['figure_circle_area'] = function(block) {
    var radius = parseFloat(block.getFieldValue('Radius'));
    var code = 3*radius*radius;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];

};

Blockly.JavaScript['figure_square_area'] = function(block) {
    var edgelength = parseFloat(block.getFieldValue('EdgeLength'));
    var code = edgelength*edgelength;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];

};

Blockly.JavaScript['figure_print'] = function(block) {
    // Print statement.
    var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
        Blockly.JavaScript.ORDER_NONE) || '\'\'';
    return 'window.alert(' + msg + ');\n';
};
