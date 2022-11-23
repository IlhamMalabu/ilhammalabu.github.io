document.addEventListener(getRandom());
document.addEventListener(changeColor());

function getRandom() {
    fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("quote").innerHTML = data.quote
            document.getElementById("person").innerHTML = data.person
        })
        .catch((err) => console.log(err))
}


// let names = document.getElementById("name").className;
// let c1 = '#E8D7FF';
// let c2 = '#FFD3E8';
// let c3 = '#F39C91';
// let c4 = '#A5C694';
// let f = false;

// function changeColor() {
//     setInterval(function () {
//         if (f) {
//             names = c1.value()
//         };
//         f = !f;
//     }, 500);
// };