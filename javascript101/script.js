
function addNumbers(greetingName, ...numbers){
    let total = 0;
    for(index in numbers){
        total += numbers[index];

    }
    return `${greetingName} the total is ${total}`;
}

const newTotal = addNumbers("leonidas",1,2,3,4,5,6,7,8);
console.log(newTotal);


const person = {
    'name': 'leonidas',
    'age': 21,
    'height':'1.73',
    'speak': function(me="jesus"){
        console.log(`òli ${me}`);
    },
    talk(to="karen"){
        console.log(`im talkin to ${to}`);
    }
}
person.speak("byond");
person.talk();
person['favorFood'] = "Pizza";