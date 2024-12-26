const form=document.getElementById('quizForm');
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log(e.target);
  const dataForm=new FormData(form);
  const ans={
    'q1':'B',
    'q2':'C',
    'q3':'C',
    'q4':'B',
    'q5':'C',
  }
  let result=0;
  for(let [key,val] of dataForm.entries()){
    if(ans[key]==val) result++;
  }
  
  setTimeout(()=>{
    const resultVisi = document.getElementById('result');
    resultVisi.style.display = 'block';
    document.getElementById('score').innerText = `You scored ${result} out of 5!`;
  },1000)
})