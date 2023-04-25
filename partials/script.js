gsap.utils.toArray(".parallax").forEach((section) => {
  section.bg = section.querySelector(".bg"); 

  // Give the backgrounds some random images
  section.bg.style.backgroundImage = `url(/images/Screenshot_20221204-214353_Chrome.jpg)`;

  // Do the parallax effect on each section
//  if (i) {
   // section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;

    gsap.to(section.bg, {
      backgroundPosition: `50% ${-innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  
});
