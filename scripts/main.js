(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);
var allMods = $(".module");
var aboutModule = $(".aboutmodule")
var aboutModule2 = $(".aboutmodule2")
var aboutModule3 = $(".aboutmodule3")
var bioModule = $(".biomodule")
var bioModule2 = $(".biomodule2")
var bioModule3 = $(".biomodule3")


// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});
//After we have all visible, we need to translate based on the scroll event.
win.scroll(function(event) {
  bioModule.each(function(i,el){
    var el = $(el);
    if(el.visible(true)){
      el.addClass("come-in-bio");
      el.removeClass("leave-bio");
    }else {
      el.removeClass("come-in-bio");
      el.addClass("leave-bio");
    }
  })
  bioModule2.each(function(i,el){
    var el = $(el);
    if(el.visible(true)){
      el.addClass("come-in-bio2");
      el.removeClass("leave-bio2");
    }else {
      el.removeClass("come-in-bio2");
      el.addClass("leave-bio2");
    }
  })
  bioModule3.each(function(i,el){
    var el = $(el);
    if(el.visible(true)){
      el.addClass("come-in-bio3");
      el.removeClass("leave-bio3");
    }else {
      el.removeClass("come-in-bio3");
      el.addClass("leave-bio3");
    }
  })
  aboutModule2.each(function(i,el){
    var el = $(el);
    if(el.visible(true)){
      el.addClass("come-in-about2");
      el.removeClass("leave-about2");
    }else {
      el.removeClass("come-in-about2");
      el.addClass("leave-about2");
    }
  })
  aboutModule3.each(function(i,el){
    var el = $(el);
    if(el.visible(true)){
      el.addClass("come-in-about3");
      el.removeClass("leave-about3");
    }else {
      el.removeClass("come-in-about3");
      el.addClass("leave-about3");
    }
  })
  aboutModule.each(function(i,el){
    var el = $(el);
    if(el.visible(true)) {
      el.addClass("come-in-about");
      el.removeClass("leave-about");
    }else {
      el.removeClass("come-in-about");
      el.addClass("leave-about");
    }
  })
});
