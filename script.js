for (let i = 1; i < 11; i++) {
    let x = Math.floor(Math.random() * 101);
    let y = Math.floor(Math.random() * 101);
    const operators = ['+', '-', '/', '*'];
    let op = operators[Math.floor(Math.random() * operators.length)];
    
    switch(op) {
        case '+':
            const userPlusAnswer = prompt(`${x}  ${op} ${y} = ....`);
            const answerPlus = x + y;
            document.getElementById('question' + i).innerHTML = `${x} ${op} ${y} = ....`;
            document.getElementById('answer' + i).innerHTML = userPlusAnswer;
            if (parseInt(userPlusAnswer) === answerPlus) {
                document.getElementById('feedback' + i).innerHTML = "&checkmark; Correct!";
                document.getElementById('feedback' + i).classList.add("correct");
            } else {
                document.getElementById('feedback' + i).innerHTML = `&cross; Incorrect! Correct value is ${answerPlus}`;
                document.getElementById('feedback' + i).classList.add("incorrect");
            }
            break;
            
        case '-':
            const userMinusAnswer = prompt(`${x} ${op} ${y} = ....`);
            const answerMinus = x - y;
            document.getElementById('question' + i).innerHTML = `${x} ${op} ${y} = ....`;
            document.getElementById('answer' + i).innerHTML = userMinusAnswer;
            if (parseInt(userMinusAnswer) === answerMinus) {
                document.getElementById('feedback' + i).innerHTML = "&checkmark; Correct!";
                document.getElementById('feedback' + i).classList.add("correct");
            } else {
                document.getElementById('feedback' + i).innerHTML = `&cross; Incorrect! Correct value is ${answerMinus}`;
                document.getElementById('feedback' + i).classList.add("incorrect");
            }
            break;

        case '/':
            const userDivAnswer = prompt(`${x}  ${op} ${y} = ....`);
            const answerDiv = x / y;
            document.getElementById('question' + i).innerHTML = `${x} ${op} ${y} = ....`;
            document.getElementById('answer' + i).innerHTML = userDivAnswer;
            if (parseInt(userDivAnswer) === answerDiv) {
                document.getElementById('feedback' + i).innerHTML = "&checkmark; Correct!";
                document.getElementById('feedback' + i).classList.add("correct");
            } else {
                document.getElementById('feedback' + i).innerHTML = `&cross; Incorrect! Correct value is ${answerDiv}`;
                document.getElementById('feedback' + i).classList.add("incorrect");
            }
            break;
            
        case '*':
            const userMulAnswer = prompt(`${x} ${op} ${y} = ....`);
            const answerMul = x * y;
            document.getElementById('question' + i).innerHTML = `${x} ${op} ${y} = ....`;
            document.getElementById('answer' + i).innerHTML = userMulAnswer;
            if (parseInt(userMulAnswer) === answerMul) {
                document.getElementById('feedback' + i).innerHTML = "&checkmark; Correct!";
                document.getElementById('feedback' + i).classList.add("correct");
            } else {
                document.getElementById('feedback' + i).innerHTML = `&cross; Incorrect! Correct value is ${answerMul}`;
                document.getElementById('feedback' + i).classList.add("incorrect");
            }
            break;
    }
}
