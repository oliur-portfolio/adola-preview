// Vote Api
document.addEventListener("DOMContentLoaded", function () {
  const customCookie = true; // Replace with actual cookie check

  async function getVotes() {
    const response = await fetch("http://adola.io/getvote.php");
    const result = await response.text();
    updatePercentages(result);
  }

  async function sendVote(vote) {
    const aboutSelect = document.querySelector(".about__select");
    aboutSelect.classList.add("about__select--loading");
    setLoading(true); // Show loading text

    const response = await fetch(`http://adola.io/sendvote.php?vote=${vote}`, {
      method: "POST",
    });
    const result = await response.text();
    updatePercentages(result);

    setLoading(false); // Hide loading text
  }

  function updatePercentages(result) {
    const [left, right] = result.split(":");
    document.getElementById("left-percentage").textContent = `${left}%`;
    document.getElementById("right-percentage").textContent = `${right}%`;
  }

  function setLoading(isLoading) {
    const leftPercentage = document.getElementById("left-percentage");
    const rightPercentage = document.getElementById("right-percentage");
    if (isLoading) {
      leftPercentage.textContent = "Loading...";
      rightPercentage.textContent = "Loading...";
    }
  }

  const voteLeftBtn = document.getElementById("vote-left");
  const voteRightBtn = document.getElementById("vote-right");

  voteLeftBtn.addEventListener("click", () => sendVote("left"));
  voteRightBtn.addEventListener("click", () => sendVote("right"));

  const aboutSelect = document.querySelector(".about__select");

  if (customCookie) {
    setLoading(true); // Show loading text
    getVotes().then(() => setLoading(false)); // Hide loading text after fetching
    aboutSelect.classList.add("about__select--loading");
  } else {
    aboutSelect.classList.remove("about__select--loading");
  }
});

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
