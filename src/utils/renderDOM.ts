import Block from './Block';

export default function renderDOM(rootSelector: string, component: Block) {
    const root = document.querySelector(rootSelector);
console.log(23424);
    if(!root) {
        throw new Error('Корневой элемент приложения не найден');
    }

    root.innerHTML = '';
    console.log(123);
    root.appendChild(component.getContent());
}