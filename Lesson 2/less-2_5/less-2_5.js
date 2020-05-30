/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

'use strict';

/**
 * 
 * @param {*} arg1 
 * @param {*} arg2 
 * @param {*} operation 
 */
function mathOperation (arg1, arg2, operation) {
    switch(operation){
        case '+':
            return summation(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/': 
            return division (arg1, arg2);
    default:
        alert('Операция вычисления задана некорректно');
    }
}


/**
 * Функция суммирования
 * @param {*} a 
 * @param {*} b 
 */
function summation (a, b) {
    return a + b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function subtraction (a, b) {
    return a - b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function multiplication (a, b) {
    return a * b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function division (a, b) {
    return a / b;
}

let arg1 = parseInt(prompt('Введите первое число'));
let arg2 = parseInt(prompt('Введите второе число'));
let operation = prompt('Введите операцию (+, -, * или /)');

alert(arg1 + operation + arg2 + "=" + mathOperation(arg1, arg2, operation))
