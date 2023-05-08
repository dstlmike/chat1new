gsap.utils.toArray(".parallax").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); //, ".bgb", ".bgc", ".bgd"'); //section.querySelector(".bgb") && section.querySelector(".bgc") && section.querySelector(".bgd");

var pics = ["url(skyline1.jpg)", 
"url(skyline2.jpg)",
"url(skyline3.jpg)",
"url(skyline4.jpg)",
"url(pic1.jpeg)"
];
var pic = document.querySelector('section');

  
//function showImage() {

            var a = Math.floor(Math.random() * pics.length);

            var img = pics[a];

  // Give the backgrounds some random images
   section.bg.style.backgroundImage = img; // pics[a]; //showImage(); //`url(myPix[randomNum])`; //Screenshot_20221204-214401_Chrome.jpg)`;

  // Do the parallax effect on each section
  if (i) {

section.bg.style.backgroundPosition = `100% 100% ${innerHeight / 1}px`;


   


     gsap.to(section.bg, {
      backgroundPosition: `100% 100% ${innerHeight / 1}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });

   


 }
});

   

