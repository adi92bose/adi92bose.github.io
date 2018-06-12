$(document).ready(function() {
function close_accordion_section() {
$('.accordion .accordionPanelTitle').removeClass('active');
$('.accordion .accordionPanelContent').slideUp(300).removeClass('open');
}
$('.accordionPanelTitle').click(function(e) {
// Grab current anchor value
var currentAttrValue = $(this).attr('href');
console.log(currentAttrValue);
if($(e.target).is('.active')) {
console.log(e.target);
close_accordion_section();
}else {
close_accordion_section();
// Add active class to section title
$(this).addClass('active');
// Open up the hidden content panel
$('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
}
e.preventDefault();
});
});