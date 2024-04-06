function calc() {
    let first = prompt('Введите первое число', '');
    let symbol = prompt('Введите знак (+, -, *, /, ^, sqrt, %, sin, cos, tan, log, !, fact)', '');
    let second = prompt('Введите второе число (для факториала введите 0)', '');
    first = parseFloat(first);
    second = parseFloat(second);

    let result;

    switch(symbol) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            if(second != 0) {
                result = first / second;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        case '^':
            result = Math.pow(first, second);
            break;
        case 'sqrt':
            result = Math.sqrt(first);
            break;
        case '%':
            result = (first / 100) * second;
            break;
        case 'sin':
            result = Math.sin(first);
            break;
        case 'cos':
            result = Math.cos(first);
            break;
        case 'tan':
            result = Math.tan(first);
            break;
        case 'log':
            result = Math.log(first);
            break;
        case '!':
            result = factorial(first);
            break;
        case 'fact':
            result = factorial(first);
            break;
        default:
            result = 'Error: Invalid operator';
    }

    alert(result);
}

function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    else
        return n * factorial(n - 1);
}

