const btn = document.querySelectorAll('button');
const mydisplay = document.getElementById('display');


btn.forEach((x) => {
    x.addEventListener('click', (Olamide) => {
        const prosper = Olamide.target.value
        console.log(prosper)

        if(prosper === 'c'){
            mydisplay.innerText='';
        }else if(prosper == '='){
            mydisplay.innerText = eval(mydisplay.innerText)
        }else {
            mydisplay.innerText += prosper
        }
        
    })
})