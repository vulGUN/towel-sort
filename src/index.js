// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let arr = [];
    matrix.map((item) => {
        for (let i = 0; i < item.length; i++) {
            matrix.indexOf(item) % 2 === 0
                ? arr.push(item[i])
                : arr.push(item[item.length - 1 - i]);
        }
    });
    return arr;
};
