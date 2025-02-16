// JavaScript untuk modal video
    function openModal(videoUrl) {
      document.getElementById("videoFrame").src = videoUrl + "?autoplay=1";
      document.getElementById("videoModal").classList.remove("hidden");
    }

    function closeModal() {
      document.getElementById("videoFrame").src = ""; // Menghentikan video saat modal ditutup
      document.getElementById("videoModal").classList.add("hidden");
    }
// JavaScript untuk modal video END

// JavaScript untuk mengatur tata letak proyek
document.addEventListener("DOMContentLoaded", function () {
  let projectContainer = document.getElementById("projectContainer");
  let projects = projectContainer.children.length;

  projectContainer.classList.remove(
    "flex",
    "grid",
    "justify-center",
    "items-center",
    "gap-10",
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-3"
  );

  if (projects === 1) {
    projectContainer.classList.add(
      "flex",
      "justify-center",
      "items-center",
      "min-h-[50vh]"
    );
  } else if (projects === 2) {
    projectContainer.classList.add(
      "flex",
      "justify-center",
      "gap-10",
      "flex-wrap"
    );
  } else {
    projectContainer.classList.add(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "gap-6"
    );
  }
});
// JavaScript untuk mengatur tata letak proyek END

// JavaScript untuk navigasi
   document.querySelectorAll("nav a").forEach((anchor) => {
     anchor.addEventListener("click", function (e) {
       e.preventDefault();

       const targetId = this.getAttribute("href").substring(1);
       const targetElement = document.getElementById(targetId);

       if (targetElement) {
         targetElement.scrollIntoView({ behavior: "smooth" });
       }
     });
   });
   // JavaScript untuk navigasi END

   // JavaScript untuk navigasi scroll
    document.addEventListener("DOMContentLoaded", () => {
  let sections = document.querySelectorAll("section");
  let currentIndex = 0;
  let isScrolling = false;

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 800); // Waktu yang sama dengan animasi CSS
    }
  }

  document.addEventListener("wheel", (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0) {
      currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else {
      currentIndex = Math.max(currentIndex - 1, 0);
    }

    scrollToSection(currentIndex);
  });

  document.addEventListener("keydown", (event) => {
    if (isScrolling) return;

    if (event.key === "ArrowDown") {
      currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else if (event.key === "ArrowUp") {
      currentIndex = Math.max(currentIndex - 1, 0);
    }

    scrollToSection(currentIndex);
  });

  // Tambahkan event listener untuk touch events pada mobile
  let touchStartY = 0;
  let touchEndY = 0;

  document.addEventListener("touchstart", (event) => {
    touchStartY = event.changedTouches[0].screenY;
  });

  document.addEventListener("touchend", (event) => {
    touchEndY = event.changedTouches[0].screenY;
    handleGesture();
  });

  function handleGesture() {
    if (isScrolling) return;

    if (touchEndY < touchStartY) {
      currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else if (touchEndY > touchStartY) {
      currentIndex = Math.max(currentIndex - 1, 0);
    }

    scrollToSection(currentIndex);
  }
});
    // JavaScript untuk navigasi scroll END

    // JavaScript untuk Floating Navbar
    document.addEventListener("DOMContentLoaded", function () {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");
      const mobileLinks = document.querySelectorAll(".mobile-link");

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // Aktif saat 60% section terlihat
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Hapus active state dari semua link
            navLinks.forEach((link) => link.classList.remove("active"));
            mobileLinks.forEach((link) => link.classList.remove("active"));

            // Tambahkan active state ke link yang sesuai dengan section yang terlihat
            const activeLink = document.querySelector(
              `.nav-link[href="#${entry.target.id}"]`
            );
            const activeMobileLink = document.querySelector(
              `.mobile-link[href="#${entry.target.id}"]`
            );
            if (activeLink) activeLink.classList.add("active");
            if (activeMobileLink) activeMobileLink.classList.add("active");
          }
        });
      }, observerOptions);

      sections.forEach((section) => observer.observe(section));
    });
    // JavaScript untuk Floating Navbar END
    
