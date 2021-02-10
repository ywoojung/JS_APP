const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(text) {

}

function handleSubmit(event) {
    event.preventDefault();
    
    const currentValue = input.value;
    paintGreeting(currentValue);

    localStorage.setItem()

}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}



function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);      //입력 form 창 지우기
    greeting.classList.add(SHOWING_CN);     //입력된 값 보여주기
    greeting.innerText = `Hello~ ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        //유저가 없는 경우
        askForName();
    } else {
        //유저가 존재하는 경우
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init(); 