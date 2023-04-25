gsap.utils.toArray(".parallax").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 

  // Give the backgrounds some random images
  section.bg.style.backgroundImage = `url(https://www.istockphoto.com/photo/toronto-skyline-with-purple-light-toronto-ontario-canada-gm626545182-110694889)`;

  // Do the parallax effect on each section
  if (i) {
    section.bg.style.backgroundPosition = `50% ${innerHeight = 25%}`;

    gsap.to(section.bg, {
      backgroundPosition: `50% ${-innerHeight = 25%}`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  } 
});
