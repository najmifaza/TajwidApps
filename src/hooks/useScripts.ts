import { useEffect } from "react";

declare global {
  interface Window {
    AOS: any;
    GLightbox: any;
    Swiper: any;
    PureCounter: any;
  }
}

const useScripts = () => {
  useEffect(() => {
    // Load AOS
    const aosScript = document.createElement("script");
    aosScript.src = "/assets/vendor/aos/aos.js";
    aosScript.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      }
    };
    document.head.appendChild(aosScript);

    // Load GLightbox
    const glightboxScript = document.createElement("script");
    glightboxScript.src = "/assets/vendor/glightbox/js/glightbox.min.js";
    glightboxScript.onload = () => {
      if (window.GLightbox) {
        window.GLightbox({
          selector: ".glightbox",
        });
      }
    };
    document.head.appendChild(glightboxScript);

    // Load Swiper
    const swiperScript = document.createElement("script");
    swiperScript.src = "/assets/vendor/swiper/swiper-bundle.min.js";
    swiperScript.onload = () => {
      if (window.Swiper) {
        // Initialize swipers
        document
          .querySelectorAll(".init-swiper")
          .forEach(function (swiperElement: any) {
            let config = JSON.parse(
              swiperElement.querySelector(".swiper-config").innerHTML.trim()
            );
            new window.Swiper(swiperElement, config);
          });
      }
    };
    document.head.appendChild(swiperScript);

    // Load PureCounter
    const purecounterScript = document.createElement("script");
    purecounterScript.src = "/assets/vendor/purecounter/purecounter_vanilla.js";
    purecounterScript.onload = () => {
      if (window.PureCounter) {
        new window.PureCounter();
      }
    };
    document.head.appendChild(purecounterScript);

    // Initialize mobile nav and other interactions
    const initInteractions = () => {
      // Mobile nav toggle
      const mobileNavToggleBtn = document.querySelector(
        ".mobile-nav-toggle"
      ) as HTMLElement;
      const mobileNavToogle = () => {
        document.querySelector("body")?.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn?.classList.toggle("bi-list");
        mobileNavToggleBtn?.classList.toggle("bi-x");
      };

      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
      }

      // Hide mobile nav on same-page/hash links
      document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        navmenu.addEventListener("click", () => {
          if (document.querySelector(".mobile-nav-active")) {
            mobileNavToogle();
          }
        });
      });

      // Toggle mobile nav dropdowns
      document
        .querySelectorAll(".navmenu .toggle-dropdown")
        .forEach((navmenu) => {
          navmenu.addEventListener("click", function (e) {
            e.preventDefault();
            this.parentNode?.classList.toggle("active");
            (
              this.parentNode as HTMLElement
            )?.nextElementSibling?.classList.toggle("dropdown-active");
            e.stopImmediatePropagation();
          });
        });

      // Scroll top button
      const scrollTop = document.querySelector(".scroll-top") as HTMLElement;
      const toggleScrollTop = () => {
        if (scrollTop) {
          window.scrollY > 100
            ? scrollTop.classList.add("active")
            : scrollTop.classList.remove("active");
        }
      };

      scrollTop?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      window.addEventListener("load", toggleScrollTop);
      document.addEventListener("scroll", toggleScrollTop);

      // Frequently Asked Questions Toggle
      document
        .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
        .forEach((faqItem) => {
          faqItem.addEventListener("click", () => {
            faqItem.parentNode?.classList.toggle("faq-active");
          });
        });

      // Correct scrolling position upon page load for URLs containing hash links
      window.addEventListener("load", function (e) {
        if (window.location.hash) {
          if (document.querySelector(window.location.hash)) {
            setTimeout(() => {
              let section = document.querySelector(
                window.location.hash
              ) as HTMLElement;
              let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
              window.scrollTo({
                top: section.offsetTop - parseInt(scrollMarginTop),
                behavior: "smooth",
              });
            }, 100);
          }
        }
      });

      // Navmenu Scrollspy
      const navmenulinks = document.querySelectorAll(".navmenu a");
      const navmenuScrollspy = () => {
        navmenulinks.forEach((navmenulink) => {
          if (!navmenulink.hash) return;
          let section = document.querySelector(navmenulink.hash) as HTMLElement;
          if (!section) return;
          let position = window.scrollY + 200;
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            document
              .querySelectorAll(".navmenu a.active")
              .forEach((link) => link.classList.remove("active"));
            navmenulink.classList.add("active");
          } else {
            navmenulink.classList.remove("active");
          }
        });
      };

      window.addEventListener("load", navmenuScrollspy);
      document.addEventListener("scroll", navmenuScrollspy);
    };

    // Initialize interactions after a short delay to ensure DOM is ready
    setTimeout(initInteractions, 100);

    // Cleanup function
    return () => {
      // Remove event listeners if needed
    };
  }, []);
};

export default useScripts;
