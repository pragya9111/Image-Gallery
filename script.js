var input = document.querySelector("#top input");
var btn = document.querySelector("#top button");
var cards = document.querySelector("#cards");
var arr = [];
function saveUrl() {
    btn.addEventListener("click", function (dets) {
        var a = input.value

        // arr.push(a);
        if (localStorage.getItem('array') === null) {

            arr.push(a)
            localStorage.setItem('array', JSON.stringify(arr))
            var arr2 = JSON.parse(localStorage.getItem('array'))
            display(arr2)
        }
        else {
            var arr2 = JSON.parse(localStorage.getItem('array'))
            arr2.push(a)
            display(arr2)
            localStorage.setItem('array', JSON.stringify(arr2))
        }


        console.log(arr)
    })
}
saveUrl();
function display(a) {
    var temp = "";

    a.forEach(elm => {
        temp += `<div class="card">
                    <img src="${elm}" alt="">
                </div>`
    });
    cards.innerHTML = temp;
    input.value = "";
}
function Show() {
    if (localStorage.getItem('array') !== null) {
        var arr2 = JSON.parse(localStorage.getItem('array'))
        display(arr2)
    }
}
Show()

