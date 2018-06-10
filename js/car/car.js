var Car = {};

Car.text = [
    //添加青蛙问题的文本
    "请帮助小汽车开到6000米以外的目的地",
    "小红车以500米/分钟的速度行驶,请让小绿车与它在红旗处相遇",
    "小红车以500米/分钟的速度行驶,请让小绿车在6000米处追上它",
];

Car.TITLE = '小汽车滴滴';

Car.button = {
    text : ["运行", "重做"],
    status : 0,   //取值 0 1
};
Car.button.status = 0;

Car.blocks = [
    //添加青蛙问题需要的块
    ['car_set_speed', 'car_run_time'],
    ['car_set_speed', 'car_run_time'],
    ['car_set_speed', 'car_run_time'],
    ['action_forward_block', 'action_turn_right', 'action_turn_left', 'frog_controls_repeat']
];

var car1ImageSRC = "img\\car\\car1.png";
var car2ImageSRC = "img\\car\\car2.png";
var car3ImageSRC = "img\\car\\car3.png";
var bg1ImageSRC = "img\\car\\road1.jpg";
var bg2ImageSRC = "img\\car\\road2.jpg";
var bg3ImageSRC = "img\\car\\road3.jpg";
var bg4ImageSRC = "img\\car\\road4.jpg";
Car.imageSRC = [
    car1ImageSRC,
    car2ImageSRC,
    car3ImageSRC,
    bg1ImageSRC,
    bg2ImageSRC,
    bg3ImageSRC,
    bg4ImageSRC
];
Car.Image_Array = [];

Car.context = null;  //画布
Car.WIDTH = 500;
Car.HEIGHT = Car.WIDTH;
Car.MAX_LEVEL = 3;
Car.LEVEL = 1;

Car.context = null;

Car.bground = {};

Car.role = {};
Car.role.position = {
    dx : 20,
    dy : 400
};
Car.role.direction = DirEast;
Car.role.imageSize = {
    weight : 1000,
    height : 1000
};
Car.role.size = {
    weight : 64,
    height : 64
};


Car.loadImage = function () {
    var img_num = 0;

    for (var i=0; i<Car.imageSRC.length; i++)
    {
        Car.Image_Array[i] = new Image();
        Car.Image_Array[i].src = Car.imageSRC[i];

        Car.Image_Array[i].onload = function () {
            img_num++;
            /* 所有图片加载完毕后显示图片 */
            if (img_num >= Car.imageSRC.length)
            {
                lockupImage();
                Car.drawImageByLevel(1);
            }
        }
    }

    function lockupImage () {
        var car_image_index = Car.imageSRC.indexOf(car1ImageSRC);
        Car.role.image = Car.Image_Array.slice(car_image_index, car_image_index+3);

        var bg_image_index = Car.imageSRC.indexOf(bg1ImageSRC);
        Car.bground.image = Car.Image_Array.slice(bg_image_index, Car.Image_Array.length);

    }
};

Car.bground.draw = function () {
    Car.context.clearRect(0, 0, Car.WIDTH, Car.HEIGHT);
    Car.context.drawImage(Car.bground.image[Car.LEVEL-1], 0, 0, Car.WIDTH, Car.HEIGHT);
};

Car.role.draw = function (index, dx, dy) {
    Car.role.position.dx = dx;
    Car.role.position.dy = dy;
    Car.context.globalCompositeOperation = 'source-over';
    Car.context.drawImage(Car.role.image[index], 0, 0,
        Car.role.imageSize.weight,
        Car.role.imageSize.height,
        Car.role.position.dx,
        Car.role.position.dy,
        Car.role.size.weight,
        Car.role.size.height);
};

Car.popover = function(content) {
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
    
Car.initDrawLevel = [
    initDrawCarLevel1,
    initDrawCarLevel2,
    initDrawCarLevel3
];

Car.drawImageByLevel = function (level) {
    console.log("Car.drawImageByLevel...");
    function initButtonStatus ()
    {
        Car.button.status = 0;
        $("#runCode").html(Car.button.text[0]);
    };
    initButtonStatus();
    Car.LEVEL = level;
    Car.initDrawLevel[Car.LEVEL-1]();
};

Car.Execs = [
    car_exec_level1,
    car_exec_level2,
    car_exec_level3,
];

Car.Show = [
    carShowAnswerLevel1,
    carShowAnswerLevel2,
    carShowAnswerLevel3
];