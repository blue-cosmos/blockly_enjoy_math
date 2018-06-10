var Frog = {};
var code = "";

var DirNorth = 0;
var DirEast = 1;
var DirSourth = 2;
var DirWest = 3;


Frog.text = [
    //添加青蛙问题的文本
    "井深6米，青蛙白天向上爬2米，晚上掉下1米，青蛙几天能爬出井?",
    "请帮助小青蛙抓住所有虫子，并回到原地",
    "请帮助小青蛙抓住所有虫子，并回到原地,只能用3个块哦!",
    "请帮助小青蛙抓住虫子，不能跳过石头!",
];

Frog.button = {
    text : ["运行", "重做"],
    status : 0,   //取值 0 1
};


Frog.blocks = [
    //添加青蛙问题需要的块
    ['action_forward', 'action_backward'],
    ['action_forward_block', 'action_turn_right', 'action_turn_left'],
    ['action_forward_block', 'action_turn_right', 'action_turn_left', 'frog_controls_repeat'],
    ['action_forward_block', 'action_turn_right', 'action_turn_left', 'frog_controls_repeat']
];

bgImage_SRC = [
    //添加青蛙问题的背景图片
    "img\\Frog\\Frogbg1.jpg",
    "img\\Frog\\Frogbg2.jpg",
    "img\\Frog\\Frogbg2.jpg",

];

frogNorthImage_SRC = "img\\Frog\\frog_north.png";
frogEastImage_SRC = "img\\Frog\\frog_east.png";
frogSourthImage_SRC = "img\\Frog\\frog_sourth.png";
frogWestImage_SRC = "img\\Frog\\frog_west.png";
wormImage_SRC = "img\\Frog\\worm.png";
bg1Image_SRC = "img\\Frog\\Frogbg1.jpg";
bg2Image_SRC = "img\\Frog\\Frogbg2.jpg";
bg4Image_SRC = "img\\Frog\\FrogbgMaze1.jpg";

Image_SRC = [
    frogNorthImage_SRC,
    frogEastImage_SRC,
    frogSourthImage_SRC,
    frogWestImage_SRC,
    wormImage_SRC,
    bg1Image_SRC,
    bg2Image_SRC,
    bg2Image_SRC,
    bg4Image_SRC
];
Image_Array = [];

Frog.popover_img = "img/Frog/frog_popover.png"

Frog.MAX_LEVEL = 4;
Frog.LEVEL = 1;
Frog.position = 0;
Frog.MAX_POSITION = 5;
Frog.TITLE = "青蛙历险记";


Frog.context = null;  //画布
Frog.WIDTH = 500;
Frog.HEIGHT = Frog.WIDTH;

_Start_X = 220;
_Start_Y = 398;

Frog.bground = {};
Frog.bground.image = [];

Frog.role = {};
Frog.role.image = null;
Frog.role.step = [80, FrogMoveStep];
Frog.role.startPosition = [  //青蛙初始位置
    {x:220, y:398},
    FrogStartPositionLevel2,
];
Frog.role.position = {     //实时位置
    dx : _Start_X,
    dy : _Start_Y
};

Frog.role.direction = DirNorth;

Frog.role.imageSize = {
    weight : 1000,
    height : 1000,
};

Frog.role.size = {
    weight : 64,
    height : 64,
};
Frog.role.code_index = 0;
Frog.role.code = '';

Frog.role.draw = function (dx, dy) {
    Frog.role.position.dx = dx;
    Frog.role.position.dy = dy;
    Frog.context.globalCompositeOperation = 'source-over';
    Frog.context.drawImage(Frog.role.image[Frog.role.direction], 0, 0,
        Frog.role.imageSize.weight,
        Frog.role.imageSize.height,
        Frog.role.position.dx,
        Frog.role.position.dy,
        Frog.role.size.weight,
        Frog.role.size.height);
};

Frog.worm = {};
Frog.worm.imageSizeWeight = 553;
Frog.worm.imageSizeHeigth = 553;
Frog.worm.sizeWeight = 50;
Frog.worm.sizeHeight = 50;


lockupImage = function () {
    var frog_image_index = Image_SRC.indexOf(frogNorthImage_SRC);
    Frog.role.image = Image_Array.slice(frog_image_index, frog_image_index+4);

    var worm_image_index = Image_SRC.indexOf(wormImage_SRC);
    Frog.worm.image = Image_Array[worm_image_index];

    var bg_image_index = Image_SRC.indexOf(bg1Image_SRC);
    Frog.bground.image = Image_Array.slice(bg_image_index, Image_Array.length);

}

Frog.loadImage = function () {
    var img_num = 0;

    for (var i=0; i<Image_SRC.length; i++)
    {
        Image_Array[i] = new Image();
        Image_Array[i].src = Image_SRC[i];

        Image_Array[i].onload = function () {
            img_num++;
            /* 所有图片加载完毕后显示图片 */
            if (img_num >= Image_SRC.length)
            {
                lockupImage();
                Frog.bground.draw();
                Frog.role.draw(Frog.role.startPosition[Frog.LEVEL-1].x,
                    Frog.role.startPosition[Frog.LEVEL-1].y);
                Frog.worm.initDraw[Frog.LEVEL-1]();
            }
        }
    }
}

Frog.bground.draw = function () {
    console.log("Frog.bground.draw...");
    Frog.context.clearRect(0,0,Frog.WIDTH,Frog.HEIGHT);
    Frog.context.drawImage(Frog.bground.image[Frog.LEVEL-1], 0, 0, Frog.WIDTH, Frog.HEIGHT);
}

Frog.worm.initDraw = [
    function () {
    },
    DrawWormLevel2
];

Frog.initDrawLevel = [
    function () {
        console.log("initDrawLevel1...");
        Frog.bground.draw();
        var start_x = Frog.role.startPosition[0].x;
        var start_y = Frog.role.startPosition[0].y;
        Frog.role.draw(start_x, start_y);
    },
    initDrawFrogLevel2,
    initDrawFrogLevel2,
    initDrawFrogLevel4

];

Frog.drawImageByLevel = function (level) {
    Frog.initButtonStatus();
    Frog.LEVEL = level;
    Frog.initDrawLevel[Frog.LEVEL-1]();
}

Frog.popover = function(content) {
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

Frog.checkAnswerLevel1 = function (y) {
    var content;
    if (y >= _Start_Y)
    {
        content = "不能再往下跳啦!";
    }
    else if (y > _Start_Y-5*Frog.role.step[Frog.LEVEL-1])
    {
        content = "没跳出去哦!";
    }
    else if (y = _Start_Y-5*Frog.role.step[Frog.LEVEL-1])
    {
        content = "恭喜你，成功啦!";
    }
    else
    {
        content = "超过了正确时间啦!";
    }

    Frog.popover(content);
}

Frog.role.jumpUp = function () {
    if (Frog.role.position.dy > _Start_Y-5*Frog.role.step[Frog.LEVEL-1]) {
        Frog.bground.draw();
        Frog.role.draw(_Start_X, Frog.role.position.dy-Frog.role.step[Frog.LEVEL-1]);
    }
    else
    {
        clearInterval(Frog.role.interval);
        Frog.checkAnswerLevel1(Frog.role.position.dy);
    }

};

Frog.role.jumpDown = function () {
    if (Frog.role.position.dy < _Start_Y) {
        Frog.bground.draw();
        Frog.role.draw(_Start_X, Frog.role.position.dy+Frog.role.step[Frog.LEVEL-1]);
    }
    else
    {
        clearInterval(Frog.role.interval);
        Frog.checkAnswerLevel1(Frog.role.position.dy);
    }
};

Frog.parseCodeLevel1 = function () {

    if (Frog.role.code_index < Frog.role.code.length)
    {
        var codeslice = Frog.role.code.slice(Frog.role.code_index, Frog.role.code_index + 2);
        if (codeslice[0] === '-') {
            Frog.role.jumpUp();
        }
        else if (codeslice[0] === '+')
        {
            Frog.role.jumpDown();
        }

        Frog.role.code_index += 2;
    }
    else
    {
        clearInterval(Frog.role.interval);
        Frog.checkAnswerLevel1(Frog.role.position.dy);
    }
}




/* 第一关: 青蛙跳井问题运行代码
 * code: 由block生成的代码, 第一关形如"-1-1+1-1-1+1..."的字符串
 * 根据传进来的字符串来演示青蛙的运动过程*/
 function frog_exec_level1(code) {
     if (Frog.button.status == 0)
     {
         console.log("青蛙跳井"+code);
         Frog.role.code = code;
         Frog.role.code_index = 0;
         Frog.role.interval = setInterval(Frog.parseCodeLevel1, 1000);
         Frog.button.status++;
         $("#runCode").html(Frog.button.text[1]);
     }
     else
     {
         Frog.button.status = 0;
         $("#runCode").html(Frog.button.text[0]);

         Frog.bground.draw();
         Frog.role.draw(_Start_Y);
     }

 }

 Frog.initButtonStatus = function()
 {
     Frog.button.status = 0;
     $("#runCode").html(Frog.button.text[0]);
 }

Frog.Execs = [
    frog_exec_level1,
    frog_exec_level2,
    frog_exec_level2,
    frog_exec_level2
];