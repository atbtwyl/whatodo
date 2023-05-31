// 💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨
// CLOCK 

    const clock = document.querySelector(".clock");

    function getClock() {
        const date = new Date()
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }

    getClock();
    setInterval(getClock, 1000);







// 💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨
// WELCOME MSG

    const enterForm = document.querySelector(".enter-form");
    const enterInput = document.querySelector(".enter-form input");
    const WelcomeUser = document.querySelector(".new-user-add");
    const toDoFormm = document.querySelector(".todo-form")

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";

    const date2 = new Date()
    const hourcheck = date2.getHours()


    function EnterSubmit(event) {
        event.preventDefault();
        enterForm.classList.add(HIDDEN_CLASSNAME);
        

        const nameEnter = enterInput.value;
        localStorage.setItem(USERNAME_KEY, nameEnter);

        paintWelcome(nameEnter);
    }

    function paintWelcome(nameEnter) {
        if (hourcheck >= 5 && hourcheck < 12) {
            WelcomeUser.innerText =  `Good Morning, ${nameEnter}`;
        } else if (hourcheck >= 12 && hourcheck < 17) {
            WelcomeUser.innerText =  `Good Afternoon, ${nameEnter}`;
        } else if (hourcheck >= 17 && hourcheck < 21) {
            WelcomeUser.innerText =  `Good Evening, ${nameEnter}`;
        } else if (hourcheck >= 21 || hourcheck < 5) {
            WelcomeUser.innerText =  `Good night, ${nameEnter}`;
        } 
        WelcomeUser.classList.remove(HIDDEN_CLASSNAME);
        toDoFormm.classList.remove(HIDDEN_CLASSNAME);
    }

    const savedNameEnter = localStorage.getItem(USERNAME_KEY)

    if (savedNameEnter === null) {
        enterForm.classList.remove(HIDDEN_CLASSNAME);
        enterForm.addEventListener("submit", EnterSubmit);
    } else {
        paintWelcome(savedNameEnter);
    }





// 💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨💨
// To-Do List

const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input")
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //String 으로 저장시켜주는 기능
}

function deleteTodo (event) {
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter( (toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerHTML = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;  //copying the Value
    toDoInput.value = "";
    const newTodoObject = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObject);
    paintToDo(newTodoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // just string

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // make it array 
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// 값을 불러오고나서 새로운 값을 입력하면 REPLACE 해버린다. 
// 즉, 기존 데이타는 사라지고 새로운 데이타를 입력한다.
// 이유는 코드에 있다! 
// "const toDos = [];" 이 설정이 EMPTY라서 SUBMIT 할때마다
// 새로운 newTODO를 PUSH 해서 기존 데이터는 손실된다.
// EASY TO FIX : 
// 1] "const toDos = [];"  => "let toDos = [];"
// 2] savedToDos 에 toDos = parsedToDos; 새롭게 변수설정


