let first_name = prompt('Введите ваше имя!').toLowerCase()
// console.log(first_name);

let first_letter_up = first_name.slice(0,1).toUpperCase()
// console.log(first_letter_up);

let first_letter_re = first_name.slice(1, first_name.length)
// console.log(first_letter_re);

console.log(first_letter_up + first_letter_re);

