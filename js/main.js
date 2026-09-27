document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     ELEMENTS
  ====================================================== */

  const menuBtn = document.getElementById("menuBtn");
  const links = document.getElementById("links");

  const search = document.getElementById("q");

  const glow = document.getElementById("glow");

  const avatarReveal =
    document.getElementById("avatarReveal");

  const avatarTwoWrapper =
    avatarReveal?.querySelector(".avatar-two-wrapper");

  const avatarTwo =
    avatarReveal?.querySelector(".avatar-two");


  /* =====================================================
     MOBILE MENU
  ====================================================== */

  if (menuBtn && links) {

    menuBtn.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    document.querySelectorAll("#links a").forEach(link => {

      link.addEventListener("click", () => {
        links.classList.remove("open");
      });

    });

  }


  /* =====================================================
     SEARCH
  ====================================================== */

  if (search) {

    search.addEventListener("keydown", event => {

      if (event.key === "Enter") {

        const value =
          search.value.trim().toLowerCase();

        if (!value) return;

        const sections = [
          {
            words: ["home", "hero"],
            id: "home"
          },
          {
            words: ["work", "video", "portfolio", "edit"],
            id: "work"
          },
          {
            words: ["skill", "skills"],
            id: "skills"
          },
          {
            words: ["process"],
            id: "process"
          },
          {
            words: ["contact", "hire", "email"],
            id: "contact"
          }
        ];

        const result =
          sections.find(section =>
            section.words.some(word =>
              value.includes(word)
            )
          );

        if (result) {

          document.getElementById(result.id)
            ?.scrollIntoView({
              behavior: "smooth"
            });

        }

      }

    });

  }


  /* =====================================================
     MOUSE GLOW
  ====================================================== */

  if (glow) {

    document.addEventListener("mousemove", event => {

      glow.style.left =
        `${event.clientX}px`;

      glow.style.top =
        `${event.clientY}px`;

    });

  }


  /* =====================================================
     SCROLL REVEAL
  ====================================================== */

  const revealElements =
    document.querySelectorAll(".rv");

  if (revealElements.length) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            revealObserver.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.15
        }
      );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  }


  /* =====================================================
     AVATAR SMOKE REVEAL
  ====================================================== */

  const SAMURAI_OFFSET_X = 100;
  const SAMURAI_OFFSET_Y = 18;

  if (
    avatarReveal &&
    avatarTwoWrapper &&
    avatarTwo
  ) {

    avatarReveal.addEventListener(
      "mousemove",
      event => {

        const rect =
          avatarReveal.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;


        /* Reveal window */

        const revealWidth = 220;
        const revealHeight = 220;


        /* Center reveal on cursor */

        const left =
          x - revealWidth / 2;

        const top =
          y - revealHeight / 2;


        /* Move reveal */

        avatarTwoWrapper.style.left =
          `${left}px`;

        avatarTwoWrapper.style.top =
          `${top}px`;


        /* Align second avatar */

        avatarTwo.style.left =
          `${-left - SAMURAI_OFFSET_X}px`;

        avatarTwo.style.top =
          `${-top - SAMURAI_OFFSET_Y}px`;


        /* Show */

        avatarTwoWrapper.style.opacity = "1";

      }
    );


    /* =================================================
       RESET WHEN MOUSE LEAVES
    ================================================== */

    avatarReveal.addEventListener(
      "mouseleave",
      () => {

        avatarTwoWrapper.style.opacity = "0";

        avatarTwoWrapper.style.left =
          "-9999px";

        avatarTwoWrapper.style.top =
          "-9999px";

        avatarTwo.style.left =
          "0px";

        avatarTwo.style.top =
          "0px";

      }
    );

  }


  /* =====================================================
     ESCAPE KEY
  ====================================================== */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      search?.blur();

      links?.classList.remove("open");

    }

  });

}); document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     ELEMENTS
  ====================================================== */

  const menuBtn = document.getElementById("menuBtn");
  const links = document.getElementById("links");

  const search = document.getElementById("q");

  const glow = document.getElementById("glow");

  const avatarReveal =
    document.getElementById("avatarReveal");

  const avatarTwoWrapper =
    avatarReveal?.querySelector(".avatar-two-wrapper");

  const avatarTwo =
    avatarReveal?.querySelector(".avatar-two");


  /* =====================================================
     MOBILE MENU
  ====================================================== */

  if (menuBtn && links) {

    menuBtn.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    document.querySelectorAll("#links a").forEach(link => {

      link.addEventListener("click", () => {
        links.classList.remove("open");
      });

    });

  }


  /* =====================================================
     SEARCH
  ====================================================== */

  if (search) {

    search.addEventListener("keydown", event => {

      if (event.key === "Enter") {

        const value =
          search.value.trim().toLowerCase();

        if (!value) return;

        const sections = [
          {
            words: ["home", "hero"],
            id: "home"
          },
          {
            words: ["work", "video", "portfolio", "edit"],
            id: "work"
          },
          {
            words: ["skill", "skills"],
            id: "skills"
          },
          {
            words: ["process"],
            id: "process"
          },
          {
            words: ["contact", "hire", "email"],
            id: "contact"
          }
        ];

        const result =
          sections.find(section =>
            section.words.some(word =>
              value.includes(word)
            )
          );

        if (result) {

          document.getElementById(result.id)
            ?.scrollIntoView({
              behavior: "smooth"
            });

        }

      }

    });

  }


  /* =====================================================
     MOUSE GLOW
  ====================================================== */

  if (glow) {

    document.addEventListener("mousemove", event => {

      glow.style.left =
        `${event.clientX}px`;

      glow.style.top =
        `${event.clientY}px`;

    });

  }


  /* =====================================================
     SCROLL REVEAL
  ====================================================== */

  const revealElements =
    document.querySelectorAll(".rv");

  if (revealElements.length) {

    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("visible");

            revealObserver.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.15
        }
      );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  }


  /* =====================================================
     AVATAR SMOKE REVEAL
  ====================================================== */

  const SAMURAI_OFFSET_X = 100;
  const SAMURAI_OFFSET_Y = 18;

  if (
    avatarReveal &&
    avatarTwoWrapper &&
    avatarTwo
  ) {

    avatarReveal.addEventListener(
      "mousemove",
      event => {

        const rect =
          avatarReveal.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;


        /* Reveal window */

        const revealWidth = 220;
        const revealHeight = 220;


        /* Center reveal on cursor */

        const left =
          x - revealWidth / 2;

        const top =
          y - revealHeight / 2;


        /* Move reveal */

        avatarTwoWrapper.style.left =
          `${left}px`;

        avatarTwoWrapper.style.top =
          `${top}px`;


        /* Align second avatar */

        avatarTwo.style.left =
          `${-left - SAMURAI_OFFSET_X}px`;

        avatarTwo.style.top =
          `${-top - SAMURAI_OFFSET_Y}px`;


        /* Show */

        avatarTwoWrapper.style.opacity = "1";

      }
    );


    /* =================================================
       RESET WHEN MOUSE LEAVES
    ================================================== */

    avatarReveal.addEventListener(
      "mouseleave",
      () => {

        avatarTwoWrapper.style.opacity = "0";

        avatarTwoWrapper.style.left =
          "-9999px";

        avatarTwoWrapper.style.top =
          "-9999px";

        avatarTwo.style.left =
          "0px";

        avatarTwo.style.top =
          "0px";

      }
    );

  }


  /* =====================================================
     ESCAPE KEY
  ====================================================== */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      search?.blur();

      links?.classList.remove("open");

    }

  });

});