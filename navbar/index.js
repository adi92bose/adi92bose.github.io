$(document).ready(function() {
 $('.dropbtn').click(function(){
 	$('.dropdown-content').toggle();
 });

 $('input').click(function(){
 	$('input').addClass('searchBorder');
 })

})



function clickIcon() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}