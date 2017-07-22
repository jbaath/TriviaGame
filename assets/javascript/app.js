//Questions with choices and which index holds the correct answer
var allQuestions = [{
    question: 'Who has the most wins as a head coach in the NFL?',
    choices: ['George Halas', 'Don Shula', 'Tom Landry', 'Curly Lambeau'],
    correctAnswer: 1,
},
{
    question: 'Which NFL team features a helmet decal only on one side of the helmet?',
    choices: ['Houston Texans', 'Jacksonville Jaguars', 'Pittsburgh Steelers', 'Tennessee Titans'],
    correctAnswer: 2,
},
{
    question: 'Who is the last non-quarterback to win NFL MVP?',
    choices: ['Shaun Alexander', 'Adrian Peterson', 'Ray Lewis', 'LaDainian Tomlinson'],
    correctAnswer: 1,
},
{   
    question: 'How many Heisman Trophy winners have gone on to be MVP of the Super Bowl?',
    choices: ['2', '3', '5', '4'],
    correctAnswer: 3,
},
{
    question: 'Which of these teams was NOT an original NFL team that moved over to the AFC?',
    choices: ['Browns', 'Colts', 'Raiders', 'Dolphins'],
    correctAnswer: 2,
},
{   
    question: 'Which state has produced more pro football Hall of Famers than any other state?',
    choices: ['California', 'Texas', 'Pennsylvania', 'Ohio'],
    correctAnswer: 2,
},
{
    question: 'Who is the only Super Bowl MVP to have played on the losing team??',
    choices: ['Larry Fitzgerald', 'Chuck Howley', 'Dan Marino', 'Steve McNair'],
    correctAnswer: 1,
},
{   
    question: 'Which is the only team not to make the NFL playoffs this millennium?',
    choices: ['Buffalo Bills', 'Cleveland Browns', 'Jacksonville Jaguars', 'Oakland Raiders'],
    correctAnswer: 0,
},
{   
    question: 'He holds the single-season record for touchdown receptions with 23',
    choices: ['Terrell Owens', 'Randy Moss', 'Calvin Johnson', 'Jerry Rice'],
    correctAnswer: 1,
}];

    var currentQuestion = 0;
    var rightAnswers=0;
    var wrongAnswers=0;
    var unAnswered=0;
    var currentQuestion=0;
    var time= 15;
    var div1= $("<div>");
    var div2= $('<div>');
    var div3= $('<div>');
    var div4= $('<div>');
    var div5= $('<div>');
    var div6= $('<div>');
    var div7= $('<div>');
    var div8= $('<div>');
    var div9= $('<div>');
//Game Starts when the start button is clicked
$('#startButton').click(function(){
    $('#restartButton').click(function(){
        location.reload()
    });

    $('#startButton').hide();
    $('#time').show();
     
     function gameAreaUpdate(){
        div1.html(allQuestions[currentQuestion].question);
        div2.html(allQuestions[currentQuestion].choices[0]);
        div3.html(allQuestions[currentQuestion].choices[1]);
        div4.html(allQuestions[currentQuestion].choices[2]);
        div5.html(allQuestions[currentQuestion].choices[3]);
        div1.attr('class',"questions");
        div2.attr('class',"answers ahover");
        div3.attr('class',"answers ahover");
        div4.attr('class',"answers ahover");
        div5.attr('class',"answers ahover");
      }
     function gameAreaScoreboard(){
        div1.html("All done, here's how you did!");
        div2.html("Correct Answers:"+rightAnswers);
        div3.html("Wrong Answers:"+wrongAnswers);
        div4.html("Unanswered:"+unAnswered);
        div5.html("");
        stopTimer();
//cheating with my reset button
        $('#restartButton').show();
      }
      function right(){
        var fix= currentQuestion;
        fix--;
        div6.html("Your Pick is Correct!").delay(3000).hide(0);
        div7.html(allQuestions[fix].choices[allQuestions[fix].src]).delay(3000).hide(0);
        div6.attr('class',"picked");
        div7.attr('class',"picked");
        $('#gameArea').append(div6).append(div7);
        showRight();

      }
      function wrong(){
        var fix= currentQuestion;
        fix--;
        div7.html("Your Pick is Wrong!").delay(3000).hide(0);
        div8.html("The correct answer is "+allQuestions[fix].choices[allQuestions[fix].correctAnswer]).delay(3000).hide(0);
        div9.html(allQuestions[fix].choices[allQuestions[fix].src]).delay(3000).hide(0);
        div7.attr('class',"picked");
        div8.attr('class',"picked");
        div9.attr('class',"picked");
        $('#gameArea').append(div7).append(div8).append(div9);
        showWrong();

      }
       function showRight(){
            div6.html().show;
            div7.html().show;
        }
        function showWrong(){
            div7.html().show;
            div8.html().show;
            div9.html().show;
        }
      
//call gameAreaUpdate fuction when start button is clicked.
    if (currentQuestion<=8) {
        gameAreaUpdate();
        $('#gameArea').append(div1).append(div2).append(div3).append(div4).append(div5);
    };
//
    
    $("#timeRemain").html(time);
    var counter; 

    function startTimer(){
        counter=setInterval(timer, 1000);//1000 will  run it every 1 second
    }
//This function stops the timer when called upon
    function stopTimer(){
        clearTimeout(counter);
    }
//Start timer countdown when start button is clicked
    startTimer();

    function timer(){
        time--;
        $("#timeRemain").html(time);
        if (time <= 0){
         clearInterval(counter);
         //counter ended, do something here
         $("#timeRemain").html(time);
         currentQuestion++;
         gameAreaUpdate();
         time=15;
         $("#timeRemain").html(time);
        startTimer();
        unAnswered++;
        console.log("unAnswered"+unAnswered);
        if (currentQuestion>=7) {gameAreaScoreboard();}
        console.log(currentQuestion);   
        } 
     }

    $('div.answers').click(function(){
        var userPick=$(this).html();
            if (userPick==allQuestions[currentQuestion].choices[allQuestions[currentQuestion].correctAnswer]) {
            rightAnswers++;
            currentQuestion++;
            time=15;
            $("#timeRemain").html(time);
            clearInterval(counter);
            startTimer(); 
            gameAreaUpdate();
            right();
            console.log("right:" + rightAnswers);
                if (currentQuestion>=8) {
                gameAreaScoreboard();
                }
            console.log(currentQuestion);
        
            } else if (userPick!=allQuestions[currentQuestion].choices[allQuestions[currentQuestion].correctAnswer]) {
            wrongAnswers++;
            currentQuestion++;
            time=15;
            $("#timeRemain").html(time);
            clearInterval(counter);
            startTimer();      
            gameAreaUpdate();
            wrong();
            console.log("wrong"+wrongAnswers);
                if (currentQuestion>=8) {
                gameAreaScoreboard();
                }
            console.log(currentQuestion);
            } 
    });
})