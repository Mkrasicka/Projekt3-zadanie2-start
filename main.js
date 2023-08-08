let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement('button');
  const btnReset = document.createElement('button');
  document.body.appendChild(btn);
  document.body.appendChild(btnReset);
  btn.style.width = 100 + 'px';
  btn.style.height = 50 + 'px';
  btnReset.style.width = 100 + 'px';
  btnReset.style.height = 50 + 'px';
  btn.textContent = "Create list"
  btnReset.textContent = "Delete list"
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  btn.addEventListener("click", createLiElements);
  btnReset.addEventListener("click", deleteLiElements);

 // tutaj kod
}

const createLiElements = () => {
  for (i = 0; i < 10; i++) {
    const ul = document.querySelector('ul')
    const li = document.createElement('li');
    ul.appendChild(li);

    li.style.fontSize = size + "px";
    size++
    li.textContent = `element${orderElement}`
    orderElement++
  }
}

const deleteLiElements = () => {
  document.querySelector('ul').textContent = "";
  size = 10;
  orderElement = 1;
}

init()
