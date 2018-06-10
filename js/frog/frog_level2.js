var FrogStartPositionLevel2 = {
    x : 73,
    y : 360
};

//三只虫子
var WormNumberLevel2 = 3;
var WormPositionLevel2 = [[0, 4],[4, 4],[4, 0]];
var WormExistLevel2 = [1, 1, 1];

var FrogMoveStep = 70;
var level2Interval = null;

/* 代码运行入口 */
function frog_exec_level2(code) {
    var code = code;
    var index = 0;
    var frog_position_x = 0;
    var frog_position_y = 0;

    if (Frog.button.status == 0)
    {
        Frog.button.status = 1;
        level2Interval = setInterval(parseCodeLevel2, 800);
        $("#runCode").html(Frog.button.text[1]);
    }
    else if (level2Interval == null)  //不在运行
    {
        Frog.button.status = 0;
        $("#runCode").html(Frog.button.text[0]);
        initDrawFrogLevel2();
    }

    function parseCodeLevel2()
    {
        if (index < code.length)
        {
            var codeslice = code.slice(index, index + 2);
            if (codeslice[0] === '+')
            {
                moveForwardLevel2();
                index += 2;
            }
            else if (codeslice === 'tr')
            {
                turnRightLevel2();
                index += 2;
            }
            else if (codeslice === 'tl')
            {
                turnLeftLevel2();
                index += 2;
            }
            else if (codeslice[0] === 'r')
            {
                var repeat_num = parseInt(code.slice(index+1, code.length));
                var action_str = code.slice((repeat_num+'').length+1, code.length);
                console.log('repeat ' + repeat_num + ' times: '+action_str);
                code = action_str.repeat(repeat_num);
                console.log(code);
            }

        }
        else
        {
            clearInterval(level2Interval);
            level2Interval = null;
            checkAnswerLevel2();
        }
    }

    function checkAnswerLevel2() {
        var allated = 1;
        var backhome = 0;
        for (var i=0; i<WormNumberLevel2; i++)
        {
            if (WormExistLevel2[i] == 1)
            {
                allated = 0;
                break;
            }
        }

        if (frog_position_x == 0 && frog_position_y == 0)
        {
            backhome = 1;
        }

        if (allated && backhome)
        {
            Frog.popover('恭喜你，完成了！');
        }
        else if (!allated)
        {
            Frog.popover('虫子没有吃完哦！');
        }
        else if (!backhome)
        {
            Frog.popover('没有回到原地哦！');
        }
    }

    function eatWorm(x, y) {
        for (var i=0; i<WormNumberLevel2; i++)
        {
            if (x == WormPositionLevel2[i][0] &&
                y == WormPositionLevel2[i][1])
            {
                WormExistLevel2[i] = 0;
            }
        }
    }

    function turnRightLevel2() {
        Frog.role.direction++;
        if (Frog.role.direction > DirWest)
        {
            Frog.role.direction = DirNorth;
        }
        Frog.bground.draw();
        var dx = FrogStartPositionLevel2.x + frog_position_x*FrogMoveStep;
        var dy = FrogStartPositionLevel2.y - frog_position_y*FrogMoveStep;
        Frog.role.draw(dx, dy);
        DrawWormLevel2();
    }

    function turnLeftLevel2() {
        Frog.role.direction--;
        if (Frog.role.direction < DirNorth)
        {
            Frog.role.direction = DirWest;
        }
        Frog.bground.draw();
        var dx = FrogStartPositionLevel2.x + frog_position_x*FrogMoveStep;
        var dy = FrogStartPositionLevel2.y - frog_position_y*FrogMoveStep;
        Frog.role.draw(dx, dy);
        DrawWormLevel2();
    }

    function moveForwardLevel2() {
        var willmove = 0;
        var dx = 0;
        var dy = 0;
        switch (Frog.role.direction)
        {
            case DirNorth:
                if (frog_position_y < 4)
                {
                    frog_position_y++;
                    willmove = 1;
                }
                break;

            case DirSourth:
                if (frog_position_y > 0)
                {
                    frog_position_y--;
                    willmove = 1;
                }
                break;

            case DirWest:
                if (frog_position_x > 0)
                {
                    frog_position_x--;
                    willmove = 1;
                }
                break;

            case DirEast:
                if (frog_position_x < 4)
                {
                    frog_position_x++;
                    willmove = 1;
                }
                break;
        }

        if (willmove)
        {
            eatWorm(frog_position_x, frog_position_y);
            dx = FrogStartPositionLevel2.x + frog_position_x*FrogMoveStep;
            dy = FrogStartPositionLevel2.y - frog_position_y*FrogMoveStep;
            console.log(WormExistLevel2);
            console.log(frog_position_x + " "+frog_position_y);
            Frog.bground.draw();
            Frog.role.draw(dx, dy);
            DrawWormLevel2();
        }
        else
        {
            Frog.popover('不能出界哦！');
            clearInterval(level2Interval);
            level2Interval = null;
        }
    }
}




function getImagePosition(x, y) {
    var pos = {x:0, y:0};
    pos.x = FrogStartPositionLevel2.x + x*FrogMoveStep;
    pos.y = FrogStartPositionLevel2.y - y*FrogMoveStep;
    return pos;
}

function DrawWormLevel2() {

    function drawWorm(index) {

        if (!WormExistLevel2[index])
        {
            return;
        }

        var imagePosition = getImagePosition(WormPositionLevel2[index][0],
            WormPositionLevel2[index][1]);

        Frog.context.drawImage(Frog.worm.image, 0, 0,
            Frog.worm.imageSizeWeight,
            Frog.worm.imageSizeHeigth,
            imagePosition.x,
            imagePosition.y,
            Frog.worm.sizeWeight,
            Frog.worm.sizeHeight);
    }

    for (var i=0; i<WormNumberLevel2; i++)
    {
        drawWorm(i);
    }
}

function initWormPositionLevel2() {
    WormNumberLevel2 = 3;
    var PositionLevel2 = [[0, 4],[4, 4],[4, 0]];

    for (var i=0; i<WormNumberLevel2; i++)
    {
        WormExistLevel2[i] = 1;
        WormPositionLevel2[i][0] = PositionLevel2[i][0];
        WormPositionLevel2[i][1] = PositionLevel2[i][1];
    }
}

function initDrawFrogLevel2() {
    Frog.bground.draw();   //背景
    Frog.role.direction = DirNorth;
    Frog.role.draw(FrogStartPositionLevel2.x, FrogStartPositionLevel2.y);
    initWormPositionLevel2();
    DrawWormLevel2();
}

function initDrawFrogLevel4() {
    Frog.bground.draw();   //背景
    Frog.role.direction = DirNorth;
    Frog.role.draw(FrogStartPositionLevel2.x, FrogStartPositionLevel2.y);
    WormExistLevel2[0]=1;WormExistLevel2[1]=1;WormExistLevel2[2]=1;
    WormNumberLevel2 = 1;
    WormPositionLevel2[0][0] = 4; WormPositionLevel2[0][1] = 4;
    WormExistLevel2[0] = 1;
    DrawWormLevel2();
}

