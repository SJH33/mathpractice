// Load navbar.html and highlight the active link
fetch("navbar.html")
  .then(response => {
    if (!response.ok) throw new Error("Navbar failed to load.");
    return response.text();
  })
  .then(html => {
    const navWrapper = document.createElement("div");
    navWrapper.innerHTML = html;
    document.body.insertBefore(navWrapper, document.body.firstChild);

    const current = location.pathname.split("/").pop();
    document.querySelectorAll(".nav-links a").forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  })
  .catch(err => console.error("Navbar error:", err));
