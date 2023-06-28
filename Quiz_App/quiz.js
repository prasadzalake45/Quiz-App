

const question=[{

    'que':'Which of the foll0wing is markup language ',
    'a':'HTML',
    'b':'css',
    'c':'javascript',
    'd':'react',
    'correct':'a'

},


{

    'que':'which of the following is cascending language ',
    'a':'C++',
    'b':'css',
    'c':'PHP',
    'd':'Anguler',
    'correct':'b'

},
{

    'que':'Which of the following is logic language ',
    'a':'MYSQL',
    'b':'C#',
    'c':'javascript',
    'd':'Java',
    'correct':'c'

},
{

    'que':'Which of the foll0wing is logic language ',
    'a':'MYSQL',
    'b':'C#',
    'c':'javascript',
    'd':'Java',
    'correct':'c'
}
]

let index=0;
let total=question.length;
let right=0,wrong=0;
const queBox=document.getElementById('quesbox');
const optionsInputs=document.querySelectorAll('.options');


const loadquest=()=>{
  
   if(index==total){
     return endQuiz();
   }
   




  
    const data=question[index];
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionsInputs[0].nextElementSibling.innerHTML=data.a;
    optionsInputs[1].nextElementSibling.innerHTML=data.b;
    optionsInputs[2].nextElementSibling.innerHTML=data.c;
    optionsInputs[3].nextElementSibling.innerHTML=data.d;
    
    
   


}
loadquest();








const SubmitQuiz=()=>{
    const data=question[index];
    const ans=getAns();
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++
    }
    index++;
    reset();
    loadquest();
    return;
   
}




const getAns=()=>{
    let answer;
     optionsInputs.forEach(
        (input)=>{
            if(input.checked){
             answer= input.value;
            }
           
        }
    )
    return answer;
}

const reset=()=>{
    optionsInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
   document.getElementById('box').innerHTML=`
   <h2>Thank you Your Responce has Successfully Submitted</h2>
   <h3>${right}/${total} are corrext </h3>
    `

   
}