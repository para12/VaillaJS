const todo = document.querySelector('.todo'),
      todo_form = todo.querySelector('.todo_form'),
      todo_input = todo_form.querySelector('.todo_input'),
      list = todo.querySelector('.list');

var save_arr = [];

function deleteitemHandler(){
  event.preventDefault();
  // event.target.parentNode.removeChild('button');
  var remove_item = event.target.parentNode.querySelector("span").innerText;
  list.removeChild(event.target.parentNode);
  save_arr = save_arr.filter(item => item !== remove_item);
  localStorage.setItem("item",JSON.stringify(save_arr));
}

function paintitem(item){
  var item_list = document.createElement('li');
  var item_containter = document.createElement('span');
  var item_cancelbutton = document.createElement('button');
  item_cancelbutton.addEventListener("click",deleteitemHandler);
  item_cancelbutton.innerText = "x";
  item_containter.innerText = item;
  // item_cancelbutton.id = save_arr.length+1;
  list.appendChild(item_list);
  item_list.appendChild(item_containter);
  item_list.appendChild(item_cancelbutton);
  // hello_text.innerText = 'hello '+name;
  // hello_text_container.classList.toggle("hide");
  // name_form.classList.toggle("hide");
}

function saveitem(item){
  // save_arr.push({id:save_arr.length+1,item: item});
  save_arr.push(item);
  localStorage.setItem("item",JSON.stringify(save_arr));
}

function paintitemHandler(){
  event.preventDefault();
  var item = todo_input.value;
  paintitem(item);
  saveitem(item);
  todo_input.value = null;
  // localStorage.setItem("name", name);
}

function init(){
  todo_form.addEventListener("submit",paintitemHandler);
  var item = localStorage.getItem("item")
  if(item !== null){
    save_arr = JSON.parse(item);
    // var i;
    // for (i = 0; i < save_arr.length; i++) {
    //   paintitem(save_arr[i].item);
    // }
    save_arr.forEach(paintitem);
  }
  // if (name !== null){
  //   setname(name);
  // }
}

init();
