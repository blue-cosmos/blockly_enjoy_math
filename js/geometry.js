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

Geom.button = {
    text : ["运行", "重做"],
    status : 0,   //取值 0 1
};
Geom.TITLE = "跟我学几何";
Geom.MAX_LEVEL = 5;
Geom.LEVEL = 1;
Geom.bground = {};
Geom.bground.image = [];
Geom.bground.draw = function () {
    Geom.context.drawImage(Geom.bground.image[Geom.LEVEL-1], 0, 0, Geom.WIDTH, Geom.HEIGHT);
}
Geom.context = null;  //画布
Geom.WIDTH = 500;
Geom.HEIGHT = Geom.WIDTH;

Geom.loadImage = function () {
    var img_num = 0;

    for (var i=0; i<Geom.bgImage.length; i++)
    {
        Geom.bground.image[i] = new Image();
        Geom.bground.image[i].src = Geom.bgImage[i];

        /* 加载第一关 */
        Geom.bground.image[i].onload = function () {
            img_num++;
            if (img_num >= Geom.bgImage.length)  //所有图片加载完毕
            {
                Geom.bground.draw();
            }
        }
    }
}

Geom.drawImageByLevel = function (level) {
    Geom.LEVEL = level;
    Geom.bground.draw();
}

