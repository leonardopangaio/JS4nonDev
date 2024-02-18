let n1=10
let n2=11

let bitAND = n1 & n2
let bitOR = n1 | n2
let bitXOR = n1 ^ n2

let bitLeft = n1 << 1
let bitRight = n1 >> 1

let bitLeft3 = n1 << 3
let bitRight3 = n1 >> 3

console.log("Bitwise AND: " + bitAND) //Was necessary to work with a variable out of console.log escope because the bitwise operation was considering the string as part of operation.
console.log("Bitwise OR: " + bitOR)
console.log("Bitwise XOR: " + bitXOR)

console.log("Bitwise Left move: " + bitLeft)
console.log("Bitwise Right move: " + bitRight)

console.log("Bitwise 3 Left move: " + bitLeft3)
console.log("Bitwise 3 Right move: " + bitRight3)