var Frog = {};

Frog.text = [
    //添加青蛙问题的文本
    "坐井观天"
];

Frog.blocks = [
    //添加青蛙问题需要的块
    ['action_forward', 'action_backward']
];

Frog.bgImage = [
    //添加青蛙问题的背景图片
    "img\\figure\\1.png"
];

Frog.MAX_LEVEL = 1;

/* 第一关: 青蛙跳井问题运行代码
 * code: 由block生成的代码, 第一关形如"-2+1-2+1..."的字符串
 * 根据传进来的字符串来演示青蛙的运动过程*/
function frog_exec_level1(code) {
    console.log("青蛙跳井"+code);
    var total_length = 5;   //定义井深5米

    /* 动画演示代码 */
}

function frog_exec_level2(code) {

}

Frog.Execs = [
    frog_exec_level1,
    frog_exec_level2
];