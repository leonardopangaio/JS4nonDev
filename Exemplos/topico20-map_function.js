const cursos = ['Javascript', 'Python', 'MongoDB', 'HTML', 'CSS', 'PHP']

//Example of full syntax
let v1 = Array.prototype.map.call(cursos, (el, ind) => {Iterador(el, ind)})

console.log('---')
//Example using an arrow function
cursos.map((el, ind)=>{
    console.log('O elemento é: ' + el + ' e seu índice é: ' + ind)
})

console.log('---')
// Example using an arrow function and an external function
function Iterador(v1, v2){
    console.log('O elemento é: ' + v1 + ' e seu índice é: ' + v2)
}

cursos.map((el, ind) => Iterador(el, ind))

console.log('---')
//Example from W3Schools, that pass just one argument to the function
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr)

console.log('---')
//Example uting the map method with the array declaration
const porDois = (v) => v*2
let numeros = ['1','2','3','4','5'].map(porDois)
console.log(numeros)

//THIS CODE BLOCK IS COMMENTED TO USE NODE AS RUNNER. IF ITS CALLED BY BROWSER, UNCOMMENT THE CODE BLOCK.
// console.log('---')
// //Example using a HTML collection
// let html_el = document.getElementsByTagName('div')
// console.log(html_el)
// html_el = [...html_el]
// html_el.map((e, i)=>{
//     console.log(e, i)
// })

// console.log('---')
// //Example using the full path map method
// const valores = Array.prototype.map.call(html_el, ({innerHTML})=>innerHTML) //In this case was necessary to remove the curly bracets to show the value not the property
// console.log(valores)