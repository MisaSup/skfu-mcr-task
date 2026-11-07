import { Survey } from './App.js';

const root = document.getElementById('root');

if (root) {
    root.innerHTML = Survey({
    title: 'Анкета участника выставки',
    userName: 'Максим',
    age: 20,
    children: 'Данные успешно обработаны TypeScript!'
    });
} else {
    console.error('Не найден элемент с id="root"');
}