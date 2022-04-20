alert("Hello! Welcome to my Portfolio Site!");
console.log("Hello! Welcome to my Portfolio Site!");
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.classname === 'navtoggle') {
        x.className += ' responsive';
    }else {
        x.className = 'navtoggle';
    }
}