const result = document.getElementById('result')
const erase = document.getElementById('erase')
const eraseAll = document.querySelector('#eraseAll')
const finalResult = document.querySelector('#finalResult')
const parentheses = document.querySelector('#parentheses')


const numbers = document.querySelectorAll('.number')
const operators= document.querySelectorAll('.operator')
let letters;
let actualOperation;
let parenthesesRight = false;

eraseAll.addEventListener('click', ()=>{
    result.textContent = ''
})


parentheses.addEventListener('click', ()=>{
    letters = result.textContent.split('');
    if(!parenthesesRight){
        if(!(letters[letters.length-1]=='(')){
            result.textContent += '('
            parenthesesRight = true
        }
    } else{
  
    if(!(letters[letters.length-1]=='*' ||letters[letters.length-1]=='/'||
        letters[letters.length-1]=='-' ||letters[letters.length-1]=='+' || 
        letters[letters.length-1]==''||letters[letters.length-1]=='(')){
            result.textContent += ')'
            parenthesesRight = false
        }
    }
})
    



numbers.forEach(num => {
    num.addEventListener('click', ()=>{
        // if(result.textContent.lastIndexOf.toString() == )
        letters = result.textContent.split('');
        console.log(letters[letters.length-1])
        if(num.textContent =="," && !(letters[letters.length-1]=='*' ||
            letters[letters.length-1]=='/'||
            letters[letters.length-1]=='-' ||letters[letters.length-1]=='+' ||
            letters[letters.length-1]==undefined||letters[letters.length-1]=='(') ){
            result.textContent += '.'
        } else{
            result.textContent += num.textContent
        }
       
        
        
    })
    
});

operators.forEach(op =>{
    op.addEventListener('click', ()=>{
        letters = result.textContent.split('');
        if(!(letters[letters.length-1]=='*' ||letters[letters.length-1]=='/'||
            letters[letters.length-1]=='-' ||letters[letters.length-1]=='+' ||
            letters[letters.length-1]==undefined||letters[letters.length-1]=='(')){

            if(op.textContent == 'X'){
                result.textContent += '*'
            }
            else{
                result.textContent += op.textContent
            }
        }
    })
})

finalResult.addEventListener('click', ()=>{
    if(result.textContent != ''){
        letters = result.textContent.split('');
        console.log(letters)
        if((letters[letters.length-1]=='*' ||letters[letters.length-1]=='/'||
        letters[letters.length-1]=='-' ||letters[letters.length-1]=='+')){
            result.textContent = ''
            letters.pop()
            letters.forEach(lett =>{

                result.textContent += lett
            })
            
        }
        actualOperation = result.textContent
        result.textContent = eval(actualOperation)
        console.log(eval(actualOperation))

    }
})

erase.addEventListener('click', ()=>{
    if(!(letters[letters.length-1]==undefined || letters[letters.length-1]== '')){
        letters = result.textContent.split('');
        result.textContent = ''
        letters.pop()
        letters.forEach(lett =>{

            result.textContent += lett
        })
    }
})