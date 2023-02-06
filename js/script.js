let first_curr = document.getElementById('first_curr');
let second_curr = document.getElementById('second_curr');
let num = document.getElementById('num');
let result = document.getElementById('result');
let body = document.querySelector('body');

let currs = {
    'ukr': 1 / 36.77,
    'usd': 1,
    'eur': 1 / 0.98
}

function swap() {
    result.innerHTML = (currs[first_curr.value] / currs[second_curr.value] * num.value).toFixed(2);
}
function changeCurrFirst() {
    for (let item1 of first_curr) {
        if (item1.selected) {
            for (let item2 of second_curr) {
                if (item2.selected && item1.value == item2.value) {
                    if (item2.index == (second_curr.length - 1)) {
                        item2.prevElementSibling.selected = 'true';
                    } else {
                        item2.nextElementSibling.selected = 'true';
                    }
                }
            }
        }
    }
}
function changeCurrSecond() {
    for (let item1 of first_curr) {
        if (item1.selected) {
            for (let item2 of second_curr) {
                if (item2.selected && item1.value == item2.value) {
                    if (item1.index == (first_curr.length - 1)) {
                        item1.prevElementSibling.selected = 'true';
                    } else {
                        item1.nextElementSibling.selected = 'true';
                    }
                }
            }
        }
    }
}

body.addEventListener('load', changeCurrFirst());
num.addEventListener('input', swap);
first_curr.addEventListener('change', changeCurrFirst);
first_curr.addEventListener('change', swap);
second_curr.addEventListener('change', changeCurrSecond);
second_curr.addEventListener('change', swap);
