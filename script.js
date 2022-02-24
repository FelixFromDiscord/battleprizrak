var vid = $('video#vid')[0];
vid.currentTime = 15.50;
vid.volume = 0.2

$(".links").hover(function(e) {
  $('#vid').css("opacity", 1);
},
function(e) {
  $('#vid').css("opacity", 0.3);
})

console.log("%cWebsite made by Iriscent\nIcons by Boxicons\nFonts by fonts.google.com", `color: green; font-weight: bold; font-size: 2rem;`);
