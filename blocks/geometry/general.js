'use strict';
goog.provide('Blockly.Blocks.figure');
goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Blocks['general_print'] = {
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
        console.log("Create block general_print");
    }
};

Blockly.Blocks['general_expression'] = {
    /**
     * Block for expression.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
                "message0": "%1 %2 %3",
                "args0": [
                    {
                        "type": "field_number",
                        "name": "A",
                        "check": "Number"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "OP",
                        "options": [
                            ["%{BKY_MATH_ADDITION_SYMBOL}", "+"],
                            ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "-"],
                            ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "*"],
                            ["%{BKY_MATH_DIVISION_SYMBOL}", "/"],
                            ["%{BKY_MATH_POWER_SYMBOL}", "^"]
                        ]
                    },
                    {
                        "type": "field_number",
                        "name": "B",
                        "check": "Number"
                    }
                ],
                //"inputsInline": true,
                //"output": "Number",
                "colour": "%{BKY_MATH_HUE}",
                //"helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
                //"extensions": ["math_op_tooltip"]
                //"previousStatement": null,
                //"nextStatement": null,
            }
        );
        console.log("Create block general_expression");
    }
};

Blockly.Blocks['general_tri_expression'] = {
    /**
     * Block for expression.
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
                "message0": "%1 %2 %3 %4 %5",
                "args0": [
                    {
                        "type": "field_number",
                        "name": "A",
                        "check": "Number"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "OP1",
                        "options": [
                            ["%{BKY_MATH_ADDITION_SYMBOL}", "+"],
                            ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "-"],
                            ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "*"],
                            ["%{BKY_MATH_DIVISION_SYMBOL}", "/"],
                            ["%{BKY_MATH_POWER_SYMBOL}", "^"]
                        ]
                    },
                    {
                        "type": "field_number",
                        "name": "B",
                        "check": "Number"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "OP2",
                        "options": [
                            ["%{BKY_MATH_ADDITION_SYMBOL}", "+"],
                            ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "-"],
                            ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "*"],
                            ["%{BKY_MATH_DIVISION_SYMBOL}", "/"],
                            ["%{BKY_MATH_POWER_SYMBOL}", "^"]
                        ]
                    },
                    {
                        "type": "field_number",
                        "name": "C",
                        "check": "Number"
                    }
                ],
                "colour": "%{BKY_MATH_HUE}",
            }
        );
        console.log("Create block general_tri_expression");
    }
};