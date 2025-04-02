const allPanel = document.querySelectorAll(".panel")


allPanel.forEach((box)=>{
box.addEventListener("click",()=>{
   removeActiveClasses()
   box.classList.add("active")

 
})

})

const removeActiveClasses =() => {
allPanel.forEach((box) => {
box.classList.remove("active")
})

}