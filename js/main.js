// Copy Clipboard plugin
document.addEventListener("DOMContentLoaded", (event) => {
  const clipboard = new ClipboardJS(".copy-button");

  clipboard.on("success", function (e) {
    toastr.success("Text copied to clipboard!");
    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    toastr.error("Failed to copy text.");
  });
});

//FAQ accordion Effect
$(".accordion__question").click(function (e) {
  e.preventDefault();
  var notthis = $(".active").not(this);
  notthis.toggleClass("active").next(".accordion__answer").slideToggle(300);
  $(this).toggleClass("active").next().slideToggle("fast");
});
