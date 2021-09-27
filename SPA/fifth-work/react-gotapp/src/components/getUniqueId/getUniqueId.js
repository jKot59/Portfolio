// создаем массив для проверки полученных уникальных ид
let arr = [];
const getUniqueId = () => {
    // получаем уникальный ид
    const getRandomNumber = () => {
       return Math.round(Math.random() * 140);
    }
    // заприсываем в переменную этот ид
    let uniqueId = getRandomNumber()
    // если уникальный ид есть в массиве то генерируем новый до тех пор, пока он не будет уникальным
    while (arr.indexOf(uniqueId) !== -1) {
        uniqueId = getRandomNumber()
    }
    // пушим уникальный ид в массив
    arr.push(uniqueId)
    // возвращаем уникальный ид из компонента для использования
    return uniqueId
}
export default getUniqueId;