var Frog = {};

Frog.text = [
    //添加青蛙问题的文本
    "井深6米，青蛙白天向上爬2米，晚上掉下1米，青蛙几天能爬出井?"
];


Frog.blocks = [
    //添加青蛙问题需要的块
    ['action_forward', 'action_backward']
];

bgImage_SRC = [
    //添加青蛙问题的背景图片
    "img\\Frog\\Frogbg.jpg"
];

roleImage_SRC = "img\\Frog\\frog.png"

Frog.MAX_LEVEL = 1;
Frog.LEVEL = 1;
Frog.position = 0;
Frog.MAX_POSITION = 5;
Frog.TITLE = "青蛙历险记";


Frog.context = null;  //画布
Frog.WIDTH = 500;
Frog.HEIGHT = Frog.WIDTH;

_Start_X = 229;
_Start_Y = 392;

Frog.bground = {};
Frog.bground.image = [];

Frog.role = {};
Frog.role.image = null;
Frog.role.step = 80;
Frog.role.position = {
    dx : _Start_X,
    dy : _Start_Y
};
Frog.role.size = {
    weight : 50,
    hight : 70,
};
Frog.role.code_index = 0;
Frog.role.code = '';

Frog.loadImage = function () {
    var img_num = 0;

    Frog.role.image = new Image();
    Frog.role.image.src = roleImage_SRC;

    for (var i=0; i<bgImage_SRC.length; i++)
    {
        Frog.bground.image[i] = new Image();
        Frog.bground.image[i].src = bgImage_SRC[i];

        /* 加载第一关 */
        Frog.bground.image[i].onload = function () {
            img_num++;
            if (img_num >= bgImage_SRC.length)  //所有图片加载完毕
            {
                Frog.context.drawImage(Frog.bground.image[0], 0, 0, Frog.WIDTH, Game.HEIGHT);
                Frog.context.globalCompositeOperation = 'source-over';
                Frog.context.drawImage(Frog.role.image, 310,
                    0, 150, 210,
                    Frog.role.position.dx,
                    Frog.role.position.dy,
                    Frog.role.size.weight,
                    Frog.role.size.hight);

            }
        }
    }
}

Frog.bground.draw = function () {
    Frog.context.drawImage(Frog.bground.image[Frog.LEVEL-1], 0, 0, Frog.WIDTH, Game.HEIGHT);
}

Frog.role.jumpUp = function () {
    if (Frog.role.position.dy > _Start_Y-5*Frog.role.step) {
        Frog.bground.draw();
        Frog.context.globalCompositeOperation = 'source-over';
        Frog.context.drawImage(Frog.role.image, 310, 0, 150, 210,
            Frog.role.position.dx,
            Frog.role.position.dy -= Frog.role.step,
            Frog.role.size.weight,
            Frog.role.size.hight);
    }
    else
    {
        clearInterval(Frog.role.interval);
    }

};

Frog.role.jumpDown = function () {
    if (Frog.role.position.dy < _Start_Y) {
        Frog.bground.draw();
        Frog.context.globalCompositeOperation = 'source-over';
        Frog.context.drawImage(Frog.role.image, 310, 0, 150, 210,
            Frog.role.position.dx,
            Frog.role.position.dy += Frog.role.step,
            Frog.role.size.weight,
            Frog.role.size.hight);
    }
    else
    {
        clearInterval(Frog.role.interval);
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
    }

}

/* 第一关: 青蛙跳井问题运行代码
 * code: 由block生成的代码, 第一关形如"-1-1+1-1-1+1..."的字符串
 * 根据传进来的字符串来演示青蛙的运动过程*/
 function frog_exec_level1(code) {
     console.log("青蛙跳井"+code);
     var total_length = 5;   //定义井深5米
     Frog.role.code = code;
     Frog.role.code_index = 0;
     Frog.role.interval = setInterval(Frog.parseCodeLevel1, 1000);
 }

function frog_exec_level2(code) {

}

Frog.Execs = [
    frog_exec_level1,
    frog_exec_level2
];