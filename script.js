let c = (el)=> document.querySelector(el)
let cs = (el)=> document.querySelector(el)

pizzaJson.map((item, index)=>{
    let pizzaItem = c(".pizza-item").cloneNode(true)

    c(".pizza-area").append(pizzaItem)
})