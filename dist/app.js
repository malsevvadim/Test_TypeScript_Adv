"use strict";
console.log('app.ts');
const message = 'Hello world';
class Person {
    constructor(name) {
        this.name = name;
    }
}
const Vadim = new Person('Vadim');
//*********************
//Хотим получить доступ до кнопки в index.html
//для этого нужно прописать tsconfig.json параметр lib
//см документацию https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options 
//к примеру добавим библиотеки идущие по умолчанию "lib": ["DOM", "ScriptHost", "DOM.Iterable", "ES6"],  
const btn = document.querySelector('#btn');
//восклицательный знак в конце, значит, мы уверены, что кнопка с таким id существует
//2 вариант использовать конструкцию if
//if (btn){
btn.addEventListener('click', () => {
    console.log('Btn clicked!');
});
//}
const map = new Map();
//# sourceMappingURL=app.js.map