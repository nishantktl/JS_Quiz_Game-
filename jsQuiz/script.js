const questions = [
    {
        'questionText': 'Who is Prime Minister of Bharat',
        'a':'Manmohan Singh',
        'b':'Narendra Modi',
        'c':'Amit Shah',
        'd':'Yogi',
        'correct':'b'
    },
    {
        'questionText': 'Which is the world largest populated country',
        'a':'India',
        'b':'America',
        'c':'China',
        'd':'Japan',
        'correct':'a'
    },
    {
        'questionText': 'Which of the following is used with HTML',
        'a':'C++',
        'b':'C',
        'c':'Python',
        'd':'Javascript',
        'correct':'d'
    }
]

let index=0;
let total=questions.length;
let right=0,wrong=0;

const quebox = document.getElementById("quesbox");
const inputOption= document.querySelectorAll('.option');

const loadQuestion = () =>{
    if(index == total){
        return endQuiz()
    }
    reset()
   
const data= questions[index];
quebox.innerText=`${index+1} ${data.questionText}`;
inputOption[0].nextElementSibling.innerText = data.a;
inputOption[1].nextElementSibling.innerText = data.b;
inputOption[2].nextElementSibling.innerText = data.c; 
inputOption[3].nextElementSibling.innerText = data.d;    
}

const submitQuiz =()=>{
    const data=questions[index]
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    inputOption.forEach(
        (input)=>{
            if(input.checked){
                console.log("yes")
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    inputOption.forEach(
        (input)=>{
            input.checked=false;
        }
            )         
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML =` 
    <h3>Thank You for playing quiz.</h3>
    <h2>${right} / ${total} are correct</h2>
     `
  }
  
  loadQuestion();