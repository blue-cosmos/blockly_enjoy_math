var Geom = {};

Geom.text = [
    "如图，正方形边长为4厘米，求该正方形面积。",
    "如图，长方形长为4厘米，宽为3厘米，求该长方形面积。",
    "如图，圆的半径为2厘米，求该圆面积。",
    "如图，三角形的底为4厘米，高为3厘米，求该三角形面积。",
    "如图，正方形ABCD的边长是4厘米，分别以B,D为圆心，以4厘米为半径在正方形内画圆，求阴影部分面积。"
];

Geom.blocks = [
    ['math_number', 'math_arithmetic', 'figure_print'],
    ['math_number', 'math_arithmetic', 'figure_print'],
    ['math_number', 'math_arithmetic', 'figure_print'],
    ['math_number', 'math_arithmetic', 'figure_print'],
    ['math_number', 'math_arithmetic', 'figure_circle_area', 'figure_square_area', 'figure_print'],
];

Geom.bgImage = [
    "img\\figure\\1.png",
    "img\\figure\\2.png",
    "img\\figure\\3.png",
    "img\\figure\\4.png",
    "img\\figure\\5.png"
];

Geom.MAX_LEVEL = 5;

