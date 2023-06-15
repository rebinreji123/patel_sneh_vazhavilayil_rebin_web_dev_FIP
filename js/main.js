console.log("JS file connected");

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "") {
      navbar.className = "responsive";
    } else {
      navbar.className = "";
    }
  }
  