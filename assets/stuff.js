// TODO: rename

// Generated by CoffeeScript 1.6.3
$(document).on("keydown", function(e) {
  if (e.keyCode === 39 && $("#js-next-post").length) {
    location.href = $("#js-next-post").attr("href");
  }
  if (e.keyCode === 37 && $("#js-previous-post").length) {
    return location.href = $("#js-previous-post").attr("href");
  }
});

$(document).on("click", "a[id]", function(e) {
  e.stopImmediatePropagation();
  return _gaq.push(["_trackEvent", "Clicks", "clicked on " + e.target.id]);
});

$(document).on("click", "a:not([id])", function(e) {
  e.stopImmediatePropagation();
  return _gaq.push(["_trackEvent", "Clicks", "clicked on " + $(this).text()]);
});

$(function() {
  return $.each($("[data-time]"), function(index, ele) {
    return $(ele).html(prettyDate(new Date($(this).data("time"))));
  });
});