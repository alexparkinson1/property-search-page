$(document).ready(function() {
  $('.click-to-show-tabs').click(function(e) {

    var target = $(e.target)
    $('.tabs').slideToggle('fast');
    if (!$(e.target).text().indexOf("▼")) {
      $(e.target).text("▲");
    } else {
      $(e.target).text("▼");
    }
    e.preventDefault();
    return false;
  });
});
