/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

$(window).scroll(function() {
  // スクロールの位置取得 
  // Get scroll position
  var s = $(window).scrollTop(),
  // スクロールの値と透明度
  // scroll value and opacity
  opacityVal = (s / 150.0);
  // blurの画像の透明度を0%から100％
  // opacity value 0% to 100%
  $('.blurred-img').css('opacity', opacityVal);
});