let str1 = `'What an excellent father you have, girls!' said she, when the door was shut.`;
//1 задание
const regexp1 = /'/gm;
console.log(str1.replace(regexp1, '"'));

//2 задание
let str2 = `'I don't know how you will ever make him amends for his kindness; or me, either, for that matter. At our time of life it is not so pleasant, I can tell you, to be making new acquaintances every day; but for your sakes, we would do anything. Lydia, my love, though you're the youngest, I dare say Mr. Bingley will dance with you at the next ball.'`;
const regexp2 = /^'|(\s)'|'(\s)|'$/gm;
console.log(str2.replace(regexp2, '"'));

//3 задание *
let testName = /\D/gi;
let testPhone = /\+7\(\d{3}\)\d{3}-\d{4}/g;
let testEmail = /^([a-z\.-])+@mail\.ru/g;
let testText = /\w+/g;

function valid(field, re) {
  const doc = document.querySelector(`.${field}`);
  doc.classList.remove("error");
  if (doc.value === "" || !re.test(doc.value)) {
    doc.classList.add("error");
    doc.insertAdjacentHTML("afterend", "Error!");
  } else console.log(`${field} - normal`);
}
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  valid("name", testName);
  valid("phone", testPhone);
  valid("email", testEmail);
  valid("text", testText);
  event.preventDefault();
});
