var Geom = {};

Geom.text = [
    "如图，正方形边长为4厘米，求该正方形面积。",
    "如图，长方形长为4厘米，宽为3厘米，求该长方形面积。",
    "如图，圆的半径为2厘米，圆周率取3，求该圆面积。",
    "如图，三角形的底为4厘米，高为3厘米，求该三角形面积。",
    "如图，正方形ABCD的边长是4厘米，分别以B,D为圆心，以4厘米为半径在正方形内画圆，求阴影部分面积。"
];

Geom.blocks = [
    ['general_expression'],
    ['general_expression'],
    ['general_tri_expression'],
    ['general_tri_expression'],
    ['math_number', 'math_arithmetic', 'general_math_arithmetic', 'figure_circle_area_exp', 'figure_square_area_exp'],
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
    Geom.context.clearRect(0,0,Geom.WIDTH,Geom.HEIGHT);
    Geom.context.drawImage(Geom.bground.image[Geom.LEVEL-1], 0, 0, Geom.WIDTH, Geom.HEIGHT);
}
Geom.context = null;  //画布
Geom.WIDTH = 500;
Geom.HEIGHT = Geom.WIDTH;
Geom.popover_img = "img/figure/figure_popover.png";

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

Geom.popover = function(content) {
    var popover = document.getElementById('popover');
    var popoverP = document.querySelectorAll('#popover p');
    //var popoverBtn = document.querySelector('#popover button');
    var isDisplay = false;

    if (Array.isArray(content))
    {
        popoverP[0].textContent = content[0];
        popoverP[1].textContent = content[1];
        console.log("array");
    }
    else
    {
        popoverP[0].textContent = content;
        popoverP[1].textContent = "   ";
        console.log("not array");
    }

    popover.style.display = 'block';
    popover.addEventListener('mouseenter', function(){
        isDisplay = true;
    });
    popover.addEventListener('mouseleave', function(){
        popover.style.display = 'none';
    });
    setTimeout(function() {
        if (!isDisplay) {
            popover.style.display = 'none';
        }
    }, 4000);
};

Geom.Execs = [
    function geom_exec_level1(code) {
        console.log("code = " + code);
        //window.alert(code);
        if (code == 16) {
            Geom.popover('恭喜你，答对啦!');
        }
        else
        {
            Geom.popover('答案不对，再想想吧!');
        }
    },
    function geom_exec_level2(code) {
        console.log("code = " + code);
        //window.alert(code);
        if (code == 12) {
            Geom.popover('恭喜你，答对啦!');
        }
        else
        {
            Geom.popover('答案不对，再想想吧!');
        }
    },
    function geom_exec_level3(code) {
        console.log("code = " + code);
        //window.alert(code);
        if (code == 12) {
            Geom.popover('恭喜你，答对啦!');
        }
        else
        {
            Geom.popover('答案不对，再想想吧!');
        }
    },
    function geom_exec_level4(code) {
        console.log("code = " + code);
        //window.alert(code);
        if (code == 6) {
            Geom.popover('恭喜你，答对啦!');
        }
        else
        {
            Geom.popover('答案不对，再想想吧!');
        }
    },
    function geom_exec_level4(code) {
        console.log("code = " + code);
        //window.alert(code);
        if (code == 8) {
            Geom.popover('恭喜你，答对啦!');
        }
        else
        {
            Geom.popover('答案不对，再想想吧!');
        }
    }
];

Geom.Show = [
    function show_anser_level1() {
        Geom.popover(['正确答案是:4×4', '正方形面积=边长×边长']);
    },
    function show_anser_level2() {
        Geom.popover(['正确答案是:4×3', '长方形面积=长×宽']);
    },
    function show_anser_level3() {
        Geom.popover(['正确答案是:3×2×2', '圆面积=圆周率×半径×半径']);
    },
    function show_anser_level4() {
        Geom.popover(['正确答案是:4×3÷2', '三角形面积=底×高÷2']);
    },
    function show_anser_level5() {
        Geom.popover(['正确答案是:8', '可以将阴影部分分割']);
    }
];


