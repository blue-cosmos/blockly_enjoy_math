var Game = {};

var GAMETYPE_GEOM = 0;
var GAMETYPE_FROG = 1;


Game.WIDTH = 500;
Game.HEIGHT = Game.WIDTH;
Game.MAX_LEVEL = 5;
Game.LEVEL = 1;
Game.workspace = null;
Game.bgImage = null;     //背景图片
Game.type = GAMETYPE_GEOM;
Game.text = null;
Game.blocks = null;
Game.execs = null;     //执行block代码
Game.show = null;      //显示答案
Game.title = null;
Game.button_text = null;
Game.popover_img = null;

Game.iamges = {
    back_ground:{
        src : null,   //路径
        img : null    //对象
    },

    role:{
        src : null,
        img : null
    }
};

Game.changeLevel = function () {
    Game.cur = $(this);
    Game.LEVEL = Game.cur.html();

    /* 下一关 */
    Game.reloadBlocks();
    Game.drawImageByLevel(Game.LEVEL);
    $("#game_title").html(Game.title);
    $("#game_text").html(Game.text[Game.LEVEL-1]);
    
}

/* 关卡显示与选择 */
Game.displayLevelLink = function() {
    //  动态生成关卡按钮
    var levelLink = document.getElementById('levelLink');
    var a = null, button = null;

    var wateraction = function() {
        var cur = $(this);
        var dest = cur.position().left;
        var t = 1;
        TweenMax.to($('.select'), t, { x: dest, ease: Back.easeOut });
        //		动态获得关卡数字
        $('.select').html(cur.html());

    };

    for(var i = 1; i <= Game.MAX_LEVEL; ++i) {
        a = document.createElement('a');
        a.innerHTML = i;
        a.addEventListener('mouseover', wateraction);
        a.addEventListener('click', Game.changeLevel);
        a.classList.add('levelbtn');
        levelLink.appendChild(a);

        if(i === 1){
            Game.cur = $(a);
        }
    }

    //	鼠标离开dots时,select返回选中关卡
    $('.dots').mouseleave(function(){
        var dest = Game.cur.position().left;
        var t = 1;
        TweenMax.to($('.select'), t, { x: dest, ease: Back.easeOut });
        $('.select').html(Game.cur.html());
    })

    //	选中关卡后,水滴停留在对应关卡
    $('.select').css('left', Game.cur.position().left+15).html(Game.LEVEL);
}

/* 根据关卡获取blocks */
Game.getBlocksByLevel = function () {
    var toolbox = document.getElementById('toolbox');
    toolbox.innerHTML = "";  //清空所有block
    var block = null;
    var blocks = [];

    // Block type needed.
    blocks = Game.blocks[Game.LEVEL - 1];

    // Create toolbox xml.
    for(var index in blocks) {
        block = document.createElement('block');
        block.setAttribute('type', blocks[index]);
        toolbox.appendChild(block);
    }
}

/* 重新加载blocks */
Game.reloadBlocks = function () {
    Game.getBlocksByLevel();   //更新xml
    Game.workspace.clear();    //清除blocks
    var toolboxText = document.getElementById('toolbox').outerHTML;
    var xml = Blockly.Xml.textToDom(toolboxText);

    Game.workspace.updateToolbox(xml);
}


/* GAME初始化 */
Game.initGame = function (type) {

    Game.initDisplay();

    Game.type = type;
    switch (Game.type)
    {
        case GAMETYPE_GEOM:
            Game.bgImage = Geom.bgImage;
            Game.blocks = Geom.blocks;
            Game.text = Geom.text;
            Game.MAX_LEVEL = Geom.MAX_LEVEL;
            Game.LEVEL = 1;
            Game.title = Geom.TITLE;
            Game.button_text = Geom.button.text;
            Game.execs = Geom.Execs;
            Game.show = Geom.Show;
            Game.WIDTH = Geom.WIDTH;
            Game.HEIGHT = Geom.HEIGHT;
            Game.popover_img = Geom.popover_img;
            Geom.context = Game.context;
            Game.drawImageByLevel = Geom.drawImageByLevel;
            (Game.loadImage = Geom.loadImage)();
            break;

        case GAMETYPE_FROG:
            Game.bgImage = Frog.bgImage;
            Game.blocks = Frog.blocks;
            Game.text = Frog.text;
            Game.MAX_LEVEL = Frog.MAX_LEVEL;
            Game.LEVEL = 1;
            Game.title = Frog.TITLE;
            Game.button_text = Frog.button.text;
            Game.popover_img = Frog.popover_img;
            Game.execs = Frog.Execs;
            Game.WIDTH = Frog.WIDTH;
            Game.HEIGHT = Frog.HEIGHT;
            Frog.context = Game.context;
            (Game.loadImage = Frog.loadImage)();

            break;
    }

    $("#game_title").html(Game.title);
    $("#game_text").html(Game.text[0]);
    $("#runCode").html(Game.button_text[0]);
    //$("#popover_img").attr("src", Game.popover_img);
}


/* Blocks 初始化 */
Game.initBlocks = function () {
    Game.getBlocksByLevel();
    var toolboxText = document.getElementById('toolbox').outerHTML;
    var toolboxXml = Blockly.Xml.textToDom(toolboxText);

    Game.workspace = Blockly.inject('workspce_block', {
        grid: {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        media:'media/',
        toolbox: toolboxXml,
        trashcan: true,
        zoom: {
            controls: true,
            wheel: false
        }
    });

    $("#runCode").click(function(){
        console.log("generate code.");
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        var code = Blockly.JavaScript.workspaceToCode(Game.workspace);
        console.log(code);
        Game.execs[Game.LEVEL-1](code);  //执行生成的代码

    });

    $("#showAnser").click(function(){
        Game.show[Game.LEVEL-1]();  //提示
    });
}


Game.initDisplay = function () {

    /* background */
    var visilization = document.getElementById('visilazation');
    var canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.className = 'canvas';
    visilization.appendChild(canvas);
    Game.context = canvas.getContext('2d');

    canvas.width = Game.WIDTH;
    canvas.height = Game.HEIGHT;

}

Game.getType = function () {
    var pathname = window.location.search;
    return pathname;
}

Game.init = function(type) {
    Game.initGame(type);
    Game.displayLevelLink();
    Game.initBlocks();
}


$(function () {
    var type = Game.getType();
    console.log(type);
    if (type.match(/frog/))
    {
        Game.init(GAMETYPE_FROG);
    }
    else if (type.match(/geom/))
    {
        Game.init(GAMETYPE_GEOM);
    }
})