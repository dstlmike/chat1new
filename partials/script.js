gsap.utils.toArray(".parallax").forEach((section) => {
  section.bg = section.querySelector(".bg");
//var section-b = section.bg;
//var section-c = section.bg;

  // Give the backgrounds some random images
  section.bg.style.backgroundImage = `url(Screenshot_20221204-214353_Chrome.jpg)` || section.bg.style.backgroundImage = `url(Screenshot_20221204-214401_Chrome.jpg)` || section.bg.style.backgroundImage = `url(Screenshot_20221204-214455_Chrome.jpg)`;

  // Do the parallax effect on each section
  if (i) {
    section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;
//section-b.style.backgroundPosition = `50% ${innerHeight / 2}px`;
//section-b.style.backgroundPosition = `50% ${innerHeight / 2}px`;

    gsap.to(section.bg, {
      backgroundPosition: `50% ${-innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  }
});
