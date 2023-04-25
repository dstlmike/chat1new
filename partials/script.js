var pics = [

            'url(

"Screenshot_20221204-214353_Chrome.jpg)")',

            'url(

"Screenshot_20221204-214401_Chrome.jpg")',

            'url(

"Screenshot_20221204-214455_Chrome.jpg")'

        ];

        var pic = section.querySelector('.bg');

gsap.utils.toArray(".parallax").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); //, ".bgb", ".bgc", ".bgd"'); //section.querySelector(".bgb") && section.querySelector(".bgc") && section.querySelector(".bgd");
//section.bgb = section.querySelector(".bgb"),
//section.bgc = section.querySelector(".bgc"),
//section.bgd = section.querySelector(".bgd");
/*var pics = [

            'url(

"Screenshot_20221204-214353_Chrome.jpg)")',

            'url(

"Screenshot_20221204-214401_Chrome.jpg")',

            'url(

"Screenshot_20221204-214455_Chrome.jpg")'

        ];

        var pic = document.querySelector('section');

  */

    //    function showImage() {

            var a = Math.floor(Math.random() * pics.length);

            var img = pics[a];

          //  pic.style.backgroundImage = img;

    //    }

  

       // showImage();
//Screenshot_20221204-214353_Chrome.jpg)", "Screenshot_20221204-214401_Chrome.jpg", "Screenshot_20221204-214455_Chrome.jpg");
  // var randomNum = Math.floor(Math.random() * myPix.length);

  // Give the backgrounds some random images
 //section.bg.style.backgroundImage = myPix[randomNum]; // = randomNum;
  section.bg.style.backgroundImage = img; //showImage(); //`url(myPix[randomNum])`; //Screenshot_20221204-214401_Chrome.jpg)`;
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
