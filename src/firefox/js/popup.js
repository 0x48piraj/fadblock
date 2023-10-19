$(document).ready(function(){

    browser.tabs.query({active:true,currentWindow:true},function(tab){
      $("#video-feed").removeClass("type-active");
      $("#suggested-feed").removeClass("type-active");
      $("#home-feed").removeClass("type-active");

      if (String(tab[0].url).includes("youtube.com")) {
        if (String(tab[0].url).includes("/watch")) {
          $("#video-feed").addClass("type-active");
          $("#video-feed").find("img").attr("src", "../assets/popup/video-feed-active.svg");
          $("#suggested-feed").addClass("type-active");
          $("#suggested-feed").find("img").attr("src", "../assets/popup/suggested-feed-active.svg");
        } else {
          $("#home-feed").addClass("type-active");
          $("#home-feed").find("img").attr("src", "../assets/popup/home-feed.svg");
        }
      }
    });

    $( "#slider-range-min" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        if (ui.value >= 70) {
          $('#note').hide();
          $( "#cta" ).html("How about treating me a cup of joe to back my work and becoming a <a href='https://github.com/sponsors/0x48piraj?frequency=one-time&sponsor=0x48piraj' target='_blank'>project sponsor</a>?");
        } else if (ui.value >= 30) {
          $('#note').hide();
          $( "#cta" ).html("If you'd like to help, leave a star over <a href='https://github.com/0x48piraj/fadblock' target='_blank'>GitHub</a> or share the extension with your colleagues.");
        } else {
          $('#note').show();
          $( "#cta" ).html("Read <a href='https://github.com/0x48piraj/fadblock#faq' target='_blank'>FAQ</a>s for using other adblockers with fadblock.");
        }

        $(".a, .b, .c, .d").width(ui.value + "%");
      }
    });
    $(".ui-slider-handle").text("<>");
    
    // Show more dropdown
    $("#more").on("click", function(e){
        if ($("#more-select").hasClass("countactive")) {
            $("#more-select").removeClass("countactive");
        } else {
            $("#more-select").addClass("countactive");
        }
    });
});
