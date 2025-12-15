document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const userId = "189003626";
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = year;
  }

  const linkTag = document.getElementById("goodreads-link");
  if (linkTag) {
    linkTag.href = `https://www.goodreads.com/user/year_in_books/${year}/${userId}`;
  }
});
