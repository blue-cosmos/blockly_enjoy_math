var role_level1_start_position_x = 2;
var role_level1_end_position_x = 416;
var role_level1_position_y = 400;

function initDrawCarLevel1() {
    Car.bground.draw();   //背景
    Car.role.draw(0, role_level1_start_position_x, role_level1_position_y);      //车
}

function carShowAnswerLevel1() {
    Car.popover('路程=速度×时间');
}

function car_exec_level1(code) {
    console.log(code);
    var code = code;
    var index = 0;
    var speed = 0;
    var run_time = 0;
    var level1Interval = null;
    var status = 0;   //0 正确 1未达到目的地 2超过目的地
    var car_x ;
    var car_y ;
    var distance = 0;

    if (Car.button.status == 0)
    {
        Car.button.status = 1;
        $("#runCode").html(Car.button.text[1]);
        parseSpeedAndTime();

        if (speed>0 && run_time>0)
        {
            /* 运行动画 */
            distance = speed*run_time;
            if (distance > 6000)
            {
                distance = 6000;
                status = 2;
            }
            else if (distance < 6000)
            {
                status = 1;
            }

            car_x = role_level1_start_position_x;
            car_y = role_level1_position_y;
            distance = distance*(role_level1_end_position_x-role_level1_start_position_x)/6000;
            level1Interval = setInterval(animateLevel1, 20);
            var sound = document.getElementById('run_sound');
            sound.play();

        }
        else
        {
            Car.popover('输入不正确哦!')
        }

    }
    else if (level1Interval == null)  //不在运行
    {
        Car.button.status = 0;
        $("#runCode").html(Car.button.text[0]);
        initDrawCarLevel1();
    }

    function parseSpeedAndTime() {
        for (var i=0; i<code.length; i++)
        {
            if (code[i] === 'v')
            {
                speed = parseInt(code.slice(i+1, code.length));
            }
            else if (code[i] === 'r')
            {
                run_time = parseInt(code.slice(i+1, code.length));
            }
        }
    }

    function animateLevel1() {
        car_x += 2;
        if (car_x < distance)
        {
            Car.bground.draw();
            Car.role.draw(0, car_x, car_y);
        }
        else
        {
            console.log("Car animateLevel1 end...");
            clearInterval(level1Interval);
            level1Interval = null;
            switch (status)
            {
                case 0:
                    Car.popover('恭喜你，成功到达目的地!');
                    break;
                case 1:
                    Car.popover('没有到达目的地哦!');
                    break;
                case 2:
                    Car.popover('超过了目的地!');
                    break;
            }
        }
    }
}