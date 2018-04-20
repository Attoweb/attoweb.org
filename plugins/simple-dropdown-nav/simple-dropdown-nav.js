$(document).ready((e) =>
{
  $("nav *").css("list-style", "none");

  $("nav > ul").addClass("nav");

  $(".nav ul")
    .addClass("dropdown")
    .addClass("hidden");

  $(".nav li").addClass("nav-item");

  $(".nav > li > a")
    .eq(1)
    .addClass("nav-toggle")
    .removeClass("nav-item")
    .addClass("inactive");

  $(".nav-toggle").on("click", e =>
  {
    e.preventDefault();

    if ($(".dropdown").hasClass("visible"))
    {
      console.log("visible");
      $(".dropdown")
        .removeClass("visible")
        .addClass("hidden");

      $(".nav-toggle")
        .addClass('inactive')
        .removeClass('active');
    }
    else
    {
      console.log("hidden");
      $(".dropdown")
        .removeClass("hidden")
        .addClass("visible");

      $(".nav-toggle")
        .addClass('active')
        .removeClass('inactive');
    }
  });


  $(window).on('hashchange', e =>
  {
    if ($(".dropdown").hasClass("visible"))
    {
    //   e.preventDefault();
      console.log("dropdown visible");
      $(".dropdown")
        .removeClass("visible")
        .addClass("hidden");

      $(".nav-toggle")
        .addClass('inactive')
        .removeClass('active');
    }
  });
});
