function Nums(num) {
    let a, result;
    a = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                a = false;
            }
        }
        result = a ? 'Число ${num} - простое число' : 'Число ${num} - составное число';
    } else if (num > 1000) {
        result = 'Данные неверны';
    }
    return result;
}