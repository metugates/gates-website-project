function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav-links") {
        x.className += " responsive";
    } else {
        x.className = "nav-links";
    }
    var y = document.getElementById("header-inner");
    if(y.className === "header-inner"){
        y.className += " responsive";
    }else {
        y.className = "header-inner";
    }


} 