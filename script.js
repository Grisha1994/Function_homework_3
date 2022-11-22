// 1. Project10. Buttons. При нажатии на кнопку менять цвет body.
//     У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
//     По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
//     Менять фона body на считанный атрибут id.
//     Добавить кнопку blue и orange. 

// 2. Создать 5 тегов <p> в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
//     для каждого тега p добавить соотв-ю текст. innerText


// 3. Есть массив arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
// ]
//     В html создаем 3 тега a - <a href=""></a> x3. Для каждого из трех, 
//         добавить link в href и title внутрь тега из массива arr

// 4. Создать две кнопки - <button>PLUS</button>, <button>MINUS</button>
//     Создать тег p с начальным значением - 0. 
//     При клике на buttonPlus увеличивать значение в теге p на 1
//     При клике на buttonMinus уменьшать значение в теге p на 1
//     addEventListener. innerText. 
// */

// DZ-1
// 1-variant
// let buttons = document.querySelectorAll(".item")

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         let id = buttons[i].getAttribute("id")
//         document.body.style.background = id
//         console.log("click", id);
//     })
// }

// 2-variant
// let buttonRed = document.querySelector("#red")
// let idRed = buttonRed.getAttribute("id")

// buttonRed.addEventListener("click", function() {
//     document.body.style.background = idRed   
//     console.log("click", idRed)   
// })
   

// let buttonGreen = document.querySelector("#green")
// let idGreen = buttonGreen.getAttribute("id")

// buttonGreen.addEventListener("click", function() {
//     document.body.style.background = idGreen 
//     console.log("click", idGreen)  
// })

// let buttonBlue = document.querySelector("#blue")
// let idBlue = buttonBlue.getAttribute("id")

// buttonBlue.addEventListener("click", function() {
//     document.body.style.background = idBlue  
//     console.log("click", idBlue)    
// })


// let buttonOrange = document.querySelector("#orange")
// let  idOrange = buttonOrange.getAttribute("id")

// buttonOrange.addEventListener("click", function() {
//     document.body.style.background = idOrange  
//     console.log("click", idOrange)    
// })

// // Dz-2
// let text = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
// let p = document.querySelectorAll(".p")

// for(i=0; i < p.length; i++) {
//     p[i].innerText = text[i]
// }



// DZ-3
// arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
// ]

// let a = document.querySelectorAll(".ssilki")
// for(i=0; i < a.length; i++) {
//     a[i].innerText = arr[i].title
//     a[i].setAttribute("href", arr[i].link)
// }


// let p = document.querySelector("p")
// let plus = document.querySelector(".pl")
// let minus = document.querySelector(".mn")

// plus.addEventListener("click", toSquare)
// // let a = n => n+1;
// function toSquare(event) {
//    p.innerText = Number(p.innerText) + 1
// }

// minus.addEventListener("click", Square)
// // let b = n => n-1;
// function Square(event) {
//    p.innerText = Number(p.innerText) - 1
// }