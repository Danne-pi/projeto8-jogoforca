import ReactDOM from 'react-dom';
import App from './App';
import palavras from './assets/palavras';


export function SelectWord(){
    const item = palavras[Math.floor(Math.random()*palavras.length)];
    localStorage.setItem('palavra', item)
}
SelectWord()

ReactDOM.render(App(), document.querySelector(".root"))