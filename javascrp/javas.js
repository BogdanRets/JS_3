document.write("Створіть масив styles з елементами «Джаз» та «Блюз»: ");
const firstarr = ["Джаз", "Блюз"];
document.write("<br>");
document.write("<span class='sec'>", firstarr.join("&nbsp;"), "</span>");
document.write("<br>");
document.write("<br>");

document.write(" Додайте ", "Рок-н-рол", " в кінець:")
document.write("<br>");
let rar = firstarr.push("Рок-н-рол"); //Додали "Рок-н-рол"
document.write("<span class='sec'>", firstarr.join("&nbsp;"), "</span>");
document.write("<br>");
document.write("<br>");

document.write("Замініть значення всередині на «Класика»:");
document.write("<br>");
let kar = firstarr[1] = "Класика"; //замінюємо "Блюз" на "Класика"
document.write("<span class='sec'>", firstarr.join(" "), "</span>");
document.write("<br>");
document.write("<br>");

document.write("Видаліть перший елемент масиву та покажіть його: ");
document.write("<br>");
const dele = firstarr.shift(); //видаляємо перший елемент масива
document.write("<span class='sec'>", dele, "</span>");
document.write("<br>");
document.write("<br>");

document.write("Вставте «Реп» та «Реггі» на початок масиву: ");
document.write("<br>");
firstarr.unshift("Реп", "Реггі"); 
document.write("<span class='sec'>", firstarr.join(" "), "</span>");
document.write("<br>");
document.write("<br>");
