  function typeWriter(elementId, text, speed = 100) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  typeWriter("name", "Ayodele Bello", 120);

  const nav = document.getElementById("menu");
  nav.addEventListener("click", toggleNav);
  
  function toggleNav() {
      const sideNav = document.getElementById("side-menu");
     // Show the element
      sideNav.style.right = "0"
      document.getElementById("overlay").style.display = "block"
    }
  
  const navcancel = document.getElementById("Xmenu");
  navcancel.addEventListener("click", navcan);
  
  function navcan() {
    document.getElementById("side-menu").style.right = "-100%";
    document.getElementById("overlay").style.display = "none";
  }
  