// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

var hiddenInsta = document.getElementById("hidden-instagram");
var chkInsta = document.getElementById("instagram");

//Keep instagram information hidden unless the box is checked
function showInsta(){
  if(chkInsta.checked == false){
    hiddenInsta.style.display = "none";
  }
}
