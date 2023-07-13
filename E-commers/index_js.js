window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky")
    }
}

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const countElements = document.querySelectorAll('.count');

    incrementButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            const count = parseInt(countElements[index].textContent);
            countElements[index].textContent = count + 1;
        });
    });

    decrementButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            const count = parseInt(countElements[index].textContent);
            if (count > 0) {
                countElements[index].textContent = count - 1;
            }
        });
    });
});
