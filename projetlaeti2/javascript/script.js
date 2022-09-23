// Scroll Up Button Function 
scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}