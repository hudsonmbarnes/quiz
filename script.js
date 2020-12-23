
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
    {
        question: "What is the most sold video game of all time?",
        answers: {
            a: "Minecraft",
            b: "Wii Sports",
            c: "GTA 5"
        },
        correctAnswer: "a"
    },
    {    
        question: "What was the first video game?",
        answers: {
            a: "Sonic",
            b: "Space Invaders",
            c: "Pong"
        },
        correctAnswer: "c"
    },
    {
        question: "Where was Nintendo founded?",
        answers: {
            a: "Japan",
            b: "USA",
            c: "China"
        },
        correctAnswer: "a"
    },
    {
        question: "Who was the founder of Steam?",
        answers: {
            a: "Bill Gates",
            b: "Gabe Newell",
            c: "Fusajiro Yamauchi"
        },
        correctAnswer: "b"
    },
    {
        question: "What game is yoshi from?",
        answers: {
            a: "Minecraft",
            b: "Super Mario World",
            c: "Street fighter"
        },
        correctAnswer: "b"
    },
    ];

    showQuestions(questions, quizContainer);
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    };
	

	function showResults(questions, quizContainer, resultsContainer){
		function showResults(questions, quizContainer, resultsContainer){
	
            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');
            
            // keep track of user's answers
            var userAnswer = '';
            var numCorrect = 0;
            
            // for each question...
            for(var i=0; i<questions.length; i++){
        
                // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                
                // if answer is correct
                if(userAnswer===questions[i].correctAnswer){
                    // add to the number of correct answers
                    numCorrect++;
                    
                    // color the answers green
                    answerContainers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else{
                    // color the answers red
                    answerContainers[i].style.color = 'red';
                }
            }
        
            // show number of correct answers out of total
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        };
	

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
    }
    }
}