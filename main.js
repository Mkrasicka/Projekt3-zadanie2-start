let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement('button');
  document.body.appendChild(btn);
  btn.style.width = 100 + 'px';
  btn.style.height = 50 + 'px';
  btn.textContent = "Create list"
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  btn.addEventListener("click", createLiElements);

 // tutaj kod
}

const createLiElements = () => {

    const ul = document.querySelector('ul')
    const li = document.createElement('li');
    ul.appendChild(li);

    li.style.fontSize = size + "px";
    size++
    li.textContent = `element${orderElement}`
    orderElement++

 // tutaj kod
}

init()
