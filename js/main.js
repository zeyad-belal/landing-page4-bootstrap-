let taps = document.querySelectorAll(".taps li")
let boxes = document.querySelectorAll(".box")
console.log(boxes)

taps.forEach((tap)=>{
  tap.addEventListener("click",(e)=>{
    taps.forEach((tap)=>{
      tap.classList.remove('active')
    })
    e.currentTarget.classList.add('active')

    boxes.forEach((box)=>{
      box.classList.remove('active')
    })
    if(e.currentTarget.innerHTML == 'All'){
      boxes.forEach((box)=>{
        box.classList.add('active')
      })
    }
      let chosen = Array.from(document.querySelectorAll(`div[data-content=${e.currentTarget.innerHTML}]`))
      chosen.forEach((chosenOne)=>{
        chosenOne.classList.add('active')
      })
  })
})

