# shamparov-dmitry-otus
homework repo for Otus javascript courses

* 1.1/1.js - MultiSum `sum(1)(2)(3)(42)()`

Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом.
Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.

sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n


* 1.2/PromiseReduce.js - promiseReduce implementation

Написать функцию promiseReduce(asyncFunctions, myReduce, initialValue).
 
 asyncFunctions - массив асинхронных функций, возвращающих промис 
 
 myReduce(memo, value) - функция, которая будет вызвана для каждого успешно завершившегося промиса. 
 
 initialValue - стартовое значение для функции myReduce 
 
 promiseReduce последовательно вызывает переданные асинхронные функции и выполняет myReduce функцию сразу при получении результата до вызова следующей асинхронной функции. 
 
 Функция promiseReduce должна возвращать промис с конечным результатом.
 
 
