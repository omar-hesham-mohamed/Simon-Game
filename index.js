$(document).ready( function (){

    var highScore = 0;
    var score = 0;
    var correct = true;
    var seq = [];
    var playerSeq = [];
    var right = new Audio("./sounds/correct.mp3");
    var wrong = new Audio("./sounds/wrong.mp3");

    $(document).on("keypress",handleKeystroke);
    

    function handleKeystroke(event){
        if (event.key == 'a'){
            score = 0;
            correct = true;
            seq = [];
            playerSeq = [];

            gameStart();
        }
    }

    $("button").click(listen);

    

    function listen(event){

        $(".button").removeClass("vertical-shaking");

        var colour = event.target.className;

        var value;
        switch(colour){
            case 'green':
                value = 1;
                $(".green").addClass("vertical-shaking");
                setTimeout(function (){$(".green").removeClass("vertical-shaking");},500);
                break;
            case 'red':
                value = 2;
                $(".red").addClass("vertical-shaking");
                setTimeout(function (){$(".red").removeClass("vertical-shaking");},500);
                break;
            case 'yellow':
                value = 3;
                $(".yellow").addClass("vertical-shaking");
                setTimeout(function (){$(".yellow").removeClass("vertical-shaking");},500);
                break;
            case 'blue':
                value = 4;
                $(".blue").addClass("vertical-shaking");
                setTimeout(function (){$(".blue").removeClass("vertical-shaking");},500);
                break;
            default:
                value = 5;
        }

        playerSeq.push(value);

        if (playerSeq[playerSeq.length - 1] !== seq[playerSeq.length - 1]) {
            correct = false;
            wrong.play();
            $("html, body, .grid, h1, h3, .div").css("background-color", "#C7253E");
            setTimeout(function() { $("html, body, .grid, h1, h3, .div").css("background-color", "#1A4870"); }, 1000);

            if (score > highScore){
                highScore = score;
                $("h3").text("High-Score: " + highScore);
                $("h1").text("New High-Score! Press 'A' To Restart.");
            }
            else{
                $("h1").text("Game Over! Press 'A' To Restart.");
            }
        } else if (playerSeq.length === seq.length) {
            score++;
            $("h1").text("Level " + (score + 1));   
            playerSeq = [];
            right.play();
            setTimeout(gameStart, 1000);
        }
}

    function gameStart(){

        if (correct) {
            $("h1").text("Level " + (score + 1));

            var nextButton = Math.ceil(Math.random() * 4);
            seq.push(nextButton);
            switch(nextButton){
                case 1:
                    $(".green").addClass("vertical-shaking");
                    setTimeout(function (){$(".green").removeClass("vertical-shaking");},500);
                    break;
                case 2:
                    $(".red").addClass("vertical-shaking");
                    setTimeout(function (){$(".red").removeClass("vertical-shaking");},500);
                    break;
                case 3:
                    $(".yellow").addClass("vertical-shaking");
                    setTimeout(function (){$(".yellow").removeClass("vertical-shaking");},500);
                    break;
                case 4:
                    $(".blue").addClass("vertical-shaking");
                    setTimeout(function (){$(".blue").removeClass("vertical-shaking");},500);
                    break;
            }

            playerSeq = [];
        }

    }   

})