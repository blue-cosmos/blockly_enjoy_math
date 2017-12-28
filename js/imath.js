var Game = {};

Game.MAX_LEVEL = 10;
Game.LEVEL = 1;

Game.changeLevel = function () {
    Game.cur = $(this);
    Game.LEVEL = Game.cur.html();

    /* 添加题目 */
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

/* Blocks 初始化 */
Game.initBlocks = function () {
    var toolboxText = document.getElementById('toolbox').outerHTML;
    var toolboxXml = Blockly.Xml.textToDom(toolboxText);

    var workspacePlayground = Blockly.inject('workspce_block', {
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
        var code = Blockly.JavaScript.workspaceToCode(workspacePlayground);
        eval(code);
    });
}

Game.init = function() {
    Game.displayLevelLink();
    Game.initBlocks();
}

$(function () {
    Game.init();
})