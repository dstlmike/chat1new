gsap.utils.toArray(".parallax").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); //, ".bgb", ".bgc", ".bgd"'); //section.querySelector(".bgb") && section.querySelector(".bgc") && section.querySelector(".bgd");
//section.bgb = section.querySelector(".bgb"),
//section.bgc = section.querySelector(".bgc"),
//section.bgd = section.querySelector(".bgd");
var myPix = new Array("Screenshot_20221204-214353_Chrome.jpg", "Screenshot_20221204-214401_Chrome.jpg", "Screenshot_20221204-214455_Chrome.jpg");
   var randomNum = Math.floor(Math.random() * myPix.length);

  // Give the backgrounds some random images
 section.bg.style.backgroundImage = `url(randomNum)`;
//  section.bgb.style.backgroundImage = `url(Screenshot_20221204-214401_Chrome.jpg)`;
  //section.bgc.style.backgroundImage = `url(Screenshot_20221204-214455_Chrome.jpg)`;
//section.bgd.style.backgroundImage = `url(Screenshot_20221204-214455_Chrome.jpg)`;

  // Do the parallax effect on each section
  if (i) {
//var myPix = new Array("Screenshot_20221204-214353_Chrome.jpg", "Screenshot_20221204-214401_Chrome.jpg", "Screenshot_20221204-214455_Chrome.jpg");
 //  var randomNum = Math.floor(Math.random() * myPix.length);

 section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;
 // section.bgb.style.backgroundPosition = `50% ${innerHeight / 2}px`;
 // section.bgc.style.backgroundPosition = `50% ${innerHeight / 2}px`;
//section.bgd.style.backgroundPosition = `50% ${innerHeight / 2}px`;

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
