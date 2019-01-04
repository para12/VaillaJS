const hello = document.querySelector('.hello'),
      name_form = hello.querySelector('.name_form'),
      name_input = name_form.querySelector('.name_input'),
      hello_text_container = hello.querySelector('.hello_text_container'),
      hello_text = hello.querySelector('.hello_text'),
      hello_text_button = hello.querySelector('.hello_text_button');


function setname(name){
  hello_text.innerText = 'hello '+name;
  hello_text_container.classList.toggle("hide");
  name_form.classList.toggle("hide");
}

function setnameHandler(){
  event.preventDefault();
  var name = name_input.value;
  setname(name);
  localStorage.setItem("name", name);
}

function deletenameHandler(){
  event.preventDefault();
  localStorage.removeItem("name");
  name_input.value =null;
  hello_text_container.classList.toggle("hide");
  name_form.classList.toggle("hide"); 
}

function init(){
  name_form.addEventListener("submit",setnameHandler);
  hello_text_button.addEventListener("click",deletenameHandler);
  var name = localStorage.getItem("name");
  if (name !== null){
    setname(name);
  }
}

init();
