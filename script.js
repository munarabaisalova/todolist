let main = document.createElement('main')
main.className='container'
document.body.prepend(main)
let project=document.createElement('h1')
project.innerHTML ="Let's do it"
main.append(project)

let listBlock = document.createElement('div')
listBlock.className="mainBlock"
main.append(listBlock)
let firstDiv =document.createElement('div')
firstDiv.className = "firstDiv"
listBlock.append(firstDiv)
 let texInp = document.createElement('input')
 texInp.className ='texInp'
 texInp.setAttribute('placeholder',"Gonna do ...")
 firstDiv.append(texInp)
 let setDate = document.createElement('input')
 setDate.setAttribute('type','date')
 firstDiv.append(setDate)

 let addBtn = document.createElement('button')
 addBtn.innerHTML='ADD'
 addBtn.id ="addBtn"
 firstDiv.append(addBtn)
 
 
 let list =document.createElement('ul')
listBlock.append(list)

let addTodo=()=>{

    let newTask=texInp.value
    let data = setDate.value
    let li = document.createElement('li')
    li.className ='taskItem'
    list.append(li)


    let lable = document.createElement('label')
    lable.append(newTask +"           "+data)
    li.append(lable)
   
    let button1 = document.createElement('img')
button1.src='chek.png'
button1.className='btn'
li.append(button1)
let button= document.createElement('img')
button.src='delete.png'
button.className='btn'
li.append(button)

button.onclick=()=>{
    li.remove()
   
}
button1.onclick=()=>{
    li.value= li.style.background='aqua'
    li.value= li.style.textDecorationLine='line-through'
   
}
}
addBtn.addEventListener('click',addTodo)

