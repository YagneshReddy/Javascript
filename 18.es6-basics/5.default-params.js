// function say(message){
//     console.log(message)
// }

// say()

// ES5 
function say(message){
    message = typeof message !== 'undefined' ? message : 'Hi'
    console.log(message)
}

say('Hello')

//Es6
function say(message ='default value'){
    console.log(message)
}

say('Passed my value')