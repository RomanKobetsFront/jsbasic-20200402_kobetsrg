/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}
// *имя не пустое, без пробелов, минимум 4 символа*.

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (!name || name.includes(" ") || name.length < 4) {
    return false;
  }

  return true;
}

function sayHello() {
  const userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
