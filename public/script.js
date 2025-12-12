function loadBookData() {
  fetch("https://tf-book-covers.s3.ap-southeast-2.amazonaws.com/book.json")
    .then((response) => response.json())
    .then((json) => {
      const coverUrl = `${json.cover}?t=${Date.now()}`;
      document.getElementById("cover").src = coverUrl;
    })
    .catch((error) => console.error("Error loading JSON:", error));
}

function disableScrollRestoration() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
}

function resetScrollOnLoad() {
  window.addEventListener("load", () => {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  });
}

function init() {
  disableScrollRestoration();
  resetScrollOnLoad();
  loadBookData();
}

init();
