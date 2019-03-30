console.log("javascript file");
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
// response.json().then((data)=>{
// console.log(data)
// })
// })
// fetch("http://localhost:3000/weather?address=%22boston%22").then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
        
//     })
// })

const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
const display=document.querySelector('.display');
const display1=document.querySelector('.display1');
const error=document.querySelector('.error')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let location = search.value;
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                error.innerHTML=data.error;
            }
            else{
       let change= display.innerHTML=data.forecast.temperature;
       const degree=(change-32)*(5/9);
       display.innerHTML=degree;
        display1.innerHTML=data.location;
            }


        })
    })
  
   
})