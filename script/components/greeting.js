(function () {
  window.Components = window.Components || {};

  window.Components.greeting = {
    render(container, section, config) {
      const div = document.createElement("div");
      div.className = "section section-greeting";
      div.innerHTML = `
        <h1 class="greeting-title">
          ${section.title || "Hi"}
          <span class="greeting-name">Shivaniii!!</span>
        </h1>
        <p class="greeting-subtitle">Just wait a minute there's something for you my loveee...❤️❤️❤️❤️</p>
      `;
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      tl.from(el.querySelector(".greeting-title"), {
        duration: 0.7, opacity: 0, y: 10,
      })
      .from(el.querySelector(".greeting-subtitle"), {
        duration: 0.4, opacity: 0, y: 10,
      })
      .to(el.querySelector(".greeting-title"), {
        duration: 0.7, opacity: 0, y: 10,
      }, "+=3.5")
      .to(el.querySelector(".greeting-subtitle"), {
        duration: 0.7, opacity: 0, y: 10,
      }, "-=1");
    },
  };
})();
