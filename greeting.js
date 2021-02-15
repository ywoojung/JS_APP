const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

/* localStorage에 name값 저장 */
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

/* input에 입력 된 name값을 화면에 보여준다 */
function handleSubmit(event) {
    event.preventDefault();             //이벤트 버블링 막기 위해서
    
    const currentValue = input.value;
    paintGreeting(currentValue);

    saveName(currentValue);

}


function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

/* 입력 된 name값을 'Hello~ name' 으로 보여준다 */
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


/* 실행 */
function init() {
    loadName();
}
init(); 