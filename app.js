let parameterA = document.querySelector('#parameter-a')
let parameterB = document.querySelector('#parameter-b')
let parameterC = document.querySelector('#parameter-c')
let calculateBtn = document.querySelector('#button')
let x1 = document.querySelector('#x1')
let x2 = document.querySelector('#x2')
let errorMsg = document.querySelector('.injection-error')


// if (Math.sign(-1) === -1) console.log('hhhhhh')
// Hint: To print the x² to the console, use this: string: 'x\u00B2'

function calculate() {
    errorMsg.style.display = 'none'

    console.log('hello - you just pressed the button')
        // not good: pops up a alert automatically: let alertNumbers = alert('Please enter numbers only')

    let parameter_A_Value = +parameterA.value
    if (parameter_A_Value === 0) {
        // alert(`You can't insert 0 as the 'a' parameter for x\u00B2`)
        errorMsg.style.display = '';
        errorMsg.innerText = `You can't insert 0 as the 'a' parameter for x\u00B2`
        return
    }
    if (isNaN(parameter_A_Value)) {
        //alert('Please enter numbers only')
        errorMsg.style.display = '';
        errorMsg.innerText = `Please enter numbers only`
        return;
    }
    let parameter_B_Value = +parameterB.value
    if (isNaN(parameter_B_Value)) {
        //alert('Please enter numbers only')
        errorMsg.style.display = '';
        errorMsg.innerText = `Please enter numbers only`
        return
    }
    let parameter_C_Value = +parameterC.value
    if (isNaN(parameter_C_Value)) {
        // alert('Please enter numbers only')
        errorMsg.style.display = '';
        errorMsg.innerText = `Please enter numbers only`
        return
    }
    // let x1_Value = +x1.value
    // let x2_Value = +x2.value
    console.log('parameter_A_Value', parameter_A_Value)
    console.log('parameter_B_Value', parameter_B_Value)
    console.log('parameter_C_Value', parameter_C_Value)
        // console.log('x1:', x1_Value)
        // console.log('x2:', x2_Value)

    console.log(`${parameter_A_Value}x\u00B2 + ${parameter_B_Value}x + ${parameter_C_Value} = 0`);
    let div = document.querySelector('.injection')
    div.style.display = '';
    div.innerHTML = `${parameter_A_Value}x\u00B2 + ${parameter_B_Value}x + ${parameter_C_Value} = 0`

    let discriminant = (parameter_B_Value ** 2) - (4 * parameter_A_Value * parameter_C_Value)
    console.log('discriminant', discriminant)

    if (discriminant < 0) {
        //alert('Your discriminant is negative, Please enter different numbers')
        errorMsg.style.display = '';
        errorMsg.innerText = `Your discriminant is negative, Please enter different numbers`
        return
    }

    let positiveAnswer = (-(parameter_B_Value) + Math.sqrt(discriminant)) / (2 * parameter_A_Value)
    let negativeAnswer = (-(parameter_B_Value) - Math.sqrt(discriminant)) / (2 * parameter_A_Value)

    console.log('positiveAnswer', positiveAnswer)
    console.log('negativeAnswer', negativeAnswer)


    // console.log('x1.value', +x1.value)
    // console.log('x2.value', +x2.value)

    x1.value = positiveAnswer
    x2.value = negativeAnswer

    console.log('x1:', x1.value) //+x1.value?
    console.log('x2:', x2.value) //+x2.value?

}

// console.log('hello')
// console.log('parameterA', parameterA)
// console.log('parameterB', parameterB)
// console.log('parameterC', parameterC)
// console.log('calculateBtn', calculateBtn)
// console.log('answer1', answer1)
// console.log('answer2', answer2)

// if (Math.sign(discriminant) === -1) {
//     alert('Your discriminant is negative, Please enter different numbers')
// }


// למה לא עובד:
// if (discriminant < 0) {
//     alert('Your discriminant is negative, Please enter different numbers')
// } else {
//     let positiveAnswer = (-(parameter_B_Value) + Math.sqrt(discriminant)) / (2 * parameter_A_Value)
//     let negativeAnswer = (-(parameter_B_Value) - Math.sqrt(discriminant)) / (2 * parameter_A_Value)
// }


// איך לעשות פלקס ששני האינפוטים האחרונים יעברו לשורה שניה תמיד שתמיד יהיו בשורה הבאה ?
//     איך לקצר את הborder ? of 3 x2 + 0x + 5 = 0 ? how to wrap the border ?