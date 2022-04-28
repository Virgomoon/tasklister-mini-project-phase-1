document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) =>{
    e.preventDefault()
    console.log(e.target.new_task_description.value)
    buildDescription(e.target.new_task_description.value) //returns user input
    form.reset()
  })
});

function buildDescription(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = "x"
  li.textContent = `${todo} `
  li.appendChild(btn)
  let color = document.querySelector('#color')
  li.setAttribute('style', 'color:' + (color.value).toString())
  li.className = (color.value)
  if(li.className === "red") {
    document.querySelector('#red_list').appendChild(li)
  }else if(li.className === "yellow"){
    document.querySelector('#yellow_list').appendChild(li)
  }else if(li.className === "green"){
    document.querySelector('#green_list').appendChild(li)
  }
}

function handleDelete(e) {
  e.target.parentNode.remove()
}