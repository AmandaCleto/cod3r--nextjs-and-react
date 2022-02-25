export function mega(amountValue, numbers = []) {
    let amount = +amountValue
    if (amount < 6 && amount > 20) {
        throw "invalid amount!";
    }

    if (numbers.length === amount) {
        return numbers.sort((number1, number2) => number1 - number2);
    }

    const randomNumbers = parseInt(Math.random() * 60) + 1;
    if (!numbers.includes(randomNumbers)) {
        return mega(amount, [...numbers, randomNumbers]);
    } else {
        return mega(amount, numbers);
    }
}

// console.log(mega(15));
