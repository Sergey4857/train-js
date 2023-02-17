// const age = 10;
// const userName = 'Well come';

// const isOpen = true;
// const shouldConfirm = false;
// const Name = 'Sergo;';

// console.log('5');

// console.log("возраст", age);

// const type = typeof 6789
// console.log(type);
// const should = prompt("Ты будешь это делать?");
// console.log(should);

// const number = prompt('Введи число');
// const power = prompt('введи степень');

// console.log(Math.pow(number, power))

// const x = ('гость№');

// const y = ('гость2');

// const z = ('гость3');

// const q = ('номер');

// console.log(` dgdfsgdfg ${3245634}`+'Гость' +   + x + ' ' + y + 'поселяется' + ' ' + 'в' + ' ' + z + 'номер' + ' ' + q    );
// Change code below this line
// Change code below this line
// Change code below this line
// Change code below this line
// Change code below this line
// Change code below this line

function multiply(x, y, z) {
  console.log("Код до return виконується звичайним чином");

  // Повертаємо результат виразу множення
  return x * y * z;

  console.log("Цей лог ніколи не виконається, він стоїть після return");
}

// Результат роботи функції можна зберегти у змінну
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550
