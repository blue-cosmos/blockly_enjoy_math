var Game = {};

var GAMETYPE_GEOM = 0;
var GAMETYPE_FROST = 1;

Game.MAX_LEVEL = 5;
Game.LEVEL = 1;
Game.workspace = null;
Game.bgImage = null;     //背景图片
Game.type = GAMETYPE_GEOM;
Game.text = null;
Game.blocks = null;

Game.changeLevel = function () {
    Game.cur = $(this);
    Game.LEVEL = Game.cur.html();
    var prbnum = Game.LEVEL - 1;

    /* 下一关 */
    Game.reloadBlocks();
    var src = Game.bgImage[Game.LEVEL];
    $("#prb").attr("src",src);
    $("#text").html(Game.text[prbnum]);
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
Game.initType = function (type) {
    Game.type = type;
    switch (Game.type)
    {
        case GAMETYPE_GEOM:
            Game.bgImage = Geom.bgImage;
            Game.blocks = Geom.blocks;
            Game.text = Geom.text;
            Game.MAX_LEVEL = Geom.MAX_LEVEL;
            Game.LEVEL = 1;
            $("#prb").attr("src",Game.bgImage[0]);
            $("#text").html(Game.text[0]);
            break;

        case GAMETYPE_FROST:

            break;
    }
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

    $("#showCode").click(function(){
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        var code = Blockly.JavaScript.workspaceToCode(Game.workspace);
        eval(code);
    });
}

Game.init = function(type) {
    Game.initType(type);
    Game.displayLevelLink();
    Game.initBlocks();
}

$(function () {
    Game.init(GAMETYPE_GEOM);
})