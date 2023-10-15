
const button = document.getElementById('btn');

button.addEventListener('click', function () {
    const deg = document.getElementById("degree").value;
  

    const type1 = document.getElementById('type1').value;
   

    const type2 = document.getElementById('type2').value;
   


    temp_converter(deg, type1, type2)
})

function temp_converter(deg, type1, type2) {
    const answer = document.getElementById('answer');
    deg = Number(deg);
    if (deg ==0) {
        deg = 0
        document.getElementById("degree").placeholder="0";
        
    }

    if (type1 == type2)
        answer.innerHTML = `${deg}`
    if (type1 == "celsius" && type2 == 'kelvin') {
        answer.innerHTML = `${(deg) + 273.15}`
    }
    if (type2 == "celsius" && type1 == 'kelvin') {
        answer.innerHTML = `${(deg) - 273.15}`
    }
    if (type1 == "celsius" && type2 == 'fahrenheit') {
        answer.innerHTML = `${(deg * (9 / 5)) + 32}`
    }
    if (type2 == "celsius" && type1 == 'fahrenheit') {
        answer.innerHTML = `${(deg - 32) * (5 / 9)}`;
    }
    if (type2 == "kelvin" && type1 == 'fahrenheit') {
        answer.innerHTML = `${((deg - 32) * (5 / 9)) + 273.15}`;

    }
    if (type2 == "fahrenheit" && type1 == 'kelvin') {
        answer.innerHTML = `${((deg - 273.15) * (9 / 5)) + 32}`;

    }
}