'use strict';

let arr = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 1, name: "Вася"}
];

function finalSet(arr) {
    let arrId = arr.map(item => item.id)
    let arrName = arr.map(item => item.name)

    if(arraysAreEqual(findDuplicateIndices(arrId), findDuplicateIndices(arrName))) {
        let setId = new Set(arrId)
        let setName = new Set(arrName)

        setId = Array.from(setId)
        setName = Array.from(setName)

        return(idNameSet(setId, setName))

    } else if(!(arraysAreEqual(findDuplicateIndices(arrId), findDuplicateIndices(arrName)))) {
        return new Set(arr)
    } else {
        return
    }
}

console.log(finalSet(arr))





function findDuplicateIndices(arr) {
    // Объект для хранения индексов
    const indexMap = arr.reduce((acc, num, index) => {
        if (!acc[num]) {
            acc[num] = []; // Инициализируем массив для каждого уникального числа
        }
        acc[num].push(index); // Добавляем индекс в массив
        return acc;
    }, {});

    // Фильтруем только те числа, которые имеют более одного индекса
    const duplicateIndices = Object.values(indexMap).filter(indices => indices.length > 1);

    return duplicateIndices.flat(); // Возвращаем плоский массив индексов
}



function arraysAreEqual(arr1, arr2) {
    // Сравниваем длины массивов
    if (arr1.length !== arr2.length) {
        return false; // Если длины разные, массивы не равны
    }

    // Сравниваем элементы массивов
    return arr1.every((value, index) => value === arr2[index]);
}



function idNameSet(idItem, nameItem) {

    let resultArray = idItem.map((id, index) => {
        return { id: id, name: nameItem[index] };
    });

    // Преобразуем массив объектов в один объект
    let resultObject = resultArray.reduce((acc, current) => {
        acc[current.id] = current.name;
        return acc;
    }, {});
    let idNameSet = new Set(Object.entries(resultObject).map(([id, name]) => `${id}: ${name}`));

    return idNameSet
}
