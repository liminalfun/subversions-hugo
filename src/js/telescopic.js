/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/*
 * reading.js (minified)
 *
 * javascript reading system for Telescopic Text
 * http://telescopictext.org/
 *
 * Date: 21st April 2011
 * Version: 0.9.5
 *
 * Copyright (c) 2011 Joe Davis
 *
 */

var reading_size = "large";
$(document).ready(function() {
  setup_reading();
});
function setup_reading() {
  var a = "in";
  $(".c").hide();
  $(".b").show();
  $(".telescopictext, .credit").show();
  $(".b").addClass("_b");
  $(".b").click(function() {
    if (a == "in") {
      $(this).parent().children(".b").hide();
      $(this).parent().children(".c").show();
    }
  });
  $(".c").click(function() {
    if (a == "out" && $(this).hasClass("_node_content")) {
      $(this).parent().children(".b").show();
      $(this).parent().children(".c").hide();
      $(".c:parent:not(:has(.c:visible)), .c:empty:visible").addClass("_node_content");
    }
  });
  $(window).keydown(function(b) {
    if (b.keyCode == 18) {
      a = "out";
      $(".c:parent:not(:has(.c:visible)), .c:empty:visible").addClass("_node_content");
      $(".b").removeClass("_b");
    }
  }).keyup(function(b) {
    if (b.keyCode == 18) {
      a = "in";
      $(".c").removeClass("_node_content");
      $(".b").addClass("_b");
    }
  });
  $("#large_text").removeClass("link").css("color", "#000");
  reading_size = "large";
  $("#large_text").click(function() {
    if ($(this).hasClass("link")) {
      reading_size = "small";
      change_size();
      $("#large_text").removeClass("link").css("color", "#000");
      $("#small_text").addClass("link").css("color", "");
    }
  });
  $("#small_text").click(function() {
    if ($(this).hasClass("link")) {
      reading_size = "large";
      change_size();
      $("#large_text").addClass("link").css("color", "");
      $("#small_text").removeClass("link").css("color", "#000");
    }
  });
}
function change_size() {
  if (reading_size == "large") {
    $(".telescopictext").animate({
      fontSize: "18px",
      lineHeight: "27px",
      maxWidth: "640px"
    }, 50);
    reading_size = "small";
  } else {
    if (reading_size == "small") {
      $(".telescopictext").animate({
        fontSize: "36px",
        lineHeight: "48px",
        maxWidth: "3000px"
      }, 50);
      reading_size = "large";
    }
  }
}
