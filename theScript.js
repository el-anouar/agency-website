// Get the device pixel ratio
const pixelRatio = window.devicePixelRatio || 1;

// Calculate the effective max-width considering pixel density
const defaultMaxWidth = 1900; // Your default max-height in CSS pixels
const adjustedMaxWidth = defaultMaxWidth * pixelRatio;
// Update the CSS variable with JavaScript
/*document.documentElement.style.setProperty('--default-max-width', adjustedMaxWidth + 'px');
alert("pixelratio "+pixelRatio+" windowWidth "+window.innerWidth+" windowInnerHeight "+window.innerHeight)*/
const navMobile = document.querySelector(".navMobile");
const navMobileListHolder = navMobile.querySelector(".navMobileListHolder");
document.querySelector(".hamburger").addEventListener("click", function () {
  navMobile.style.display = "flex";
  navMobile.classList.remove("animateCloseNavMobile");

  navMobile.classList.add("animateOpenNavMobile");
  navMobileListHolder.classList.remove("animateCloseNavMobileHolder");
  navMobileListHolder.classList.add("animateOpenNavMobileHolder");
});

navMobile.addEventListener("click", function (e) {
  if (e.target.classList.contains("navMobile")) {
    navMobile.classList.remove("animateOpenNavMobile");
    navMobile.classList.add("animateCloseNavMobile");
    navMobileListHolder.classList.remove("animateOpenNavMobileHolder");
    navMobileListHolder.classList.add("animateCloseNavMobileHolder");
    navMobile.addEventListener("animationend", function (event) {
      if (event.animationName === "animateCloseNavMobile") {
        navMobile.style.display = "none";
      }
    });
  }
});
function changeToDarkMode() { }
const root = document.documentElement;
let mode = "day";
const LDMode = document.querySelectorAll(".LDMode");
const navDeskTopDLMod = document.querySelector(".navDeskTopDLMod");
const navDeskTopDLModInner = document.querySelector(".navDeskTopDLModInner");
const navMobileDLMod = document.querySelector(".navMobileDLMod");
const navMobileDLModInner = document.querySelector(".navMobileDLModInner");
const desktopiInner = document
  .querySelector(".navDeskTopDLModInner")
  .querySelector(".inner");
const desktopiOuter = document
  .querySelector(".navDeskTopDLModOuter")
  .querySelector(".outer");
const mobileiInner = document
  .querySelector(".navMobileDLModInner")
  .querySelector(".inner");
const mobileiOuter = document
  .querySelector(".navMobileDLModOuter")
  .querySelector(".outer");
LDMode.forEach((item) => {
  item.addEventListener("click", function () {
    if (mode === "day") {
      navDeskTopDLModInner.classList.remove("navDeskTopDLModInnerAnimToDay");
      navDeskTopDLModInner.classList.add("navDeskTopDLModInnerAnimToNight");
      navMobileDLModInner.classList.remove("navDeskTopDLModInnerAnimToDay");
      navMobileDLModInner.classList.add("navDeskTopDLModInnerAnimToNight");
      const computedStyles = window.getComputedStyle(navDeskTopDLModInner);
      const computedStyles1 = window.getComputedStyle(navMobileDLModInner);

      // Get animation duration from computed styles
      const animationDuration = computedStyles.animationDuration;
      const animationDuration1 = computedStyles1.animationDuration;
      navDeskTopDLModInner.addEventListener("animationstart", function (event) {
        if (event.animationName === "navDeskTopDLModInnerAnimToNight") {
          setTimeout(() => {
            desktopiInner.classList.remove("fa-sun");
            desktopiInner.classList.add("fa-moon");
            desktopiOuter.classList.remove("fa-moon");
            desktopiOuter.classList.add("fa-sun");
          }, parseFloat(animationDuration.split("s")[0] * 1000) / 2);
        }
      });
      navMobileDLModInner.addEventListener("animationstart", function (event) {
        if (event.animationName === "navDeskTopDLModInnerAnimToNight") {
          setTimeout(() => {
            mobileiInner.classList.remove("fa-sun");
            mobileiInner.classList.add("fa-moon");
            mobileiOuter.classList.remove("fa-moon");
            mobileiOuter.classList.add("fa-sun");
          }, parseFloat(animationDuration.split("s")[0] * 1000) / 2);
        }
      });

      root.classList.remove("light-theme");
      root.classList.add("dark-theme");
      mode = "night";
    } else {
      navDeskTopDLModInner.classList.remove("navDeskTopDLModInnerAnimToNight");
      navDeskTopDLModInner.classList.add("navDeskTopDLModInnerAnimToDay");
      navMobileDLModInner.classList.remove("navDeskTopDLModInnerAnimToNight");
      navMobileDLModInner.classList.add("navDeskTopDLModInnerAnimToDay");
      const computedStyles = window.getComputedStyle(navDeskTopDLModInner);
      const computedStyles1 = window.getComputedStyle(navMobileDLModInner);

      // Get animation duration from computed styles
      const animationDuration = computedStyles.animationDuration;
      const animationDuration1 = computedStyles1.animationDuration;
      navDeskTopDLModInner.addEventListener("animationstart", function (event) {
        if (event.animationName === "navDeskTopDLModInnerAnimToDay") {
          setTimeout(() => {
            desktopiInner.classList.remove("fa-moon");
            desktopiInner.classList.add("fa-sun");
            desktopiOuter.classList.remove("fa-sun");
            desktopiOuter.classList.add("fa-moon");
          }, parseFloat(animationDuration.split("s")[0] * 1000) / 2);
        }
      });
      navMobileDLModInner.addEventListener("animationstart", function (event) {
        if (event.animationName === "navDeskTopDLModInnerAnimToDay") {
          setTimeout(() => {
            mobileiInner.classList.remove("fa-moon");
            mobileiInner.classList.add("fa-sun");
            mobileiOuter.classList.remove("fa-sun");
            mobileiOuter.classList.add("fa-moon");
          }, parseFloat(animationDuration.split("s")[0] * 1000) / 2);
        }
      });
      root.classList.remove("dark-theme");
      root.classList.add("light-theme");
      mode = "day";
    }
  });
});

const container = document.querySelector(".svg-container");
const hero = document.querySelector(".hero");
const aboutCardContainer = document.querySelector(".aboutCardContainer");
const aboutCardHolder = document.querySelector(".aboutCardHolder");
const aboutCardh2 = aboutCardContainer.querySelector("h2");
const aboutCardp = aboutCardContainer.querySelector("p");

const computedStyles = window.getComputedStyle(aboutCardContainer);
const containerPaddingLeft = parseFloat(computedStyles.paddingLeft);
const containerPaddingRight = parseFloat(computedStyles.paddingRight);
// Calculate the width of the container excluding padding
const containerWidthExcludingPadding =
  aboutCardContainer.offsetWidth - containerPaddingLeft - containerPaddingRight;
aboutCardh2.style.width = `${containerWidthExcludingPadding}px`;
aboutCardp.style.width = `${containerWidthExcludingPadding}px`;
const aboutButton = document.querySelector(".aboutButton");
const aboutCardSvg = document.querySelector("#svgElementAbout");
const svg = document.querySelector("#svgElement");
const theFirstTitle = document.querySelector(".theFirstTitle");
const letUsWork = document.querySelector(".letUsWork");
const underLetUsWork = document.querySelector(".underLetUsWork");
const theSecondTitle = document.querySelector(".theSecondTitle");
const theThirdTitle = document.querySelector(".theThirdTitle");
const theFirstTitleDiv = document.querySelector(".theFirstTitleDiv");
const theFirstTitleButt = document.querySelector(".theFirstTitleButt");
const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");
const leftHero = document.querySelector("#prev-btn");
const rightHero = document.querySelector("#next-btn");

var counter = 0;
rightHero.addEventListener("click", () => {
  images[counter].classList.remove("active");
  images[counter].style.animation = "next1 0.5s ease-in forwards";
  images[counter].style.zIndex = 0;
  if (counter >= images.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  images[counter].classList.add("active");
  images[counter].style.zIndex = 0;
  images[counter].style.animation = "next2 0.5s ease-in forwards";
});
leftHero.addEventListener("click", () => {
  images[counter].classList.remove("active");
  images[counter].style.animation = "prev1 0.5s ease-in forwards";
  images[counter].style.zIndex = 0;
  if (counter == 0) {
    counter = images.length - 1;
  } else {
    counter--;
  }
  images[counter].classList.add("active");
  images[counter].style.zIndex = 0;
  images[counter].style.animation = "prev2 0.5s ease-in forwards";
});
const clientTestimonialCard = document.querySelectorAll(
  ".clientTestimonialCard"
);
let tLeftButton = document.querySelector(".tLeftButton");
let tRightButton = document.querySelector(".tRightButton");
var tCounter = 0;
tRightButton.addEventListener("click", slideNext);
function slideNext() {
  clientTestimonialCard[tCounter].classList.remove("active");
  clientTestimonialCard[tCounter].style.animation =
    "next1 0.5s ease-in forwards";
  clientTestimonialCard[tCounter].style.zIndex = 0;

  if (tCounter >= clientTestimonialCard.length - 1) {
    tCounter = 0;
  } else {
    tCounter++;
  }
  clientTestimonialCard[tCounter].classList.add("active");
  clientTestimonialCard[tCounter].style.zIndex = 0;
  clientTestimonialCard[tCounter].style.animation =
    "next2 0.5s ease-in forwards";
}
tLeftButton.addEventListener("click", slidePrev);
function slidePrev() {
  clientTestimonialCard[tCounter].classList.remove("active");
  clientTestimonialCard[tCounter].style.animation =
    "prev1 0.5s ease-in forwards";
  clientTestimonialCard[tCounter].style.zIndex = 0;

  if (tCounter == 0) {
    tCounter = clientTestimonialCard.length - 1;
  } else {
    tCounter--;
  }
  clientTestimonialCard[tCounter].classList.add("active");
  clientTestimonialCard[tCounter].style.zIndex = 0;
  clientTestimonialCard[tCounter].style.animation =
    "prev2 0.5s ease-in forwards";
}



const whatWeDoSlider = document.querySelector(".whatWeDoSlider");
const whatWedoSection = document.querySelector(".whatWedoSection");
let whatWedoSliderMaxLeft = 0;
const whatWeDoSliderRect = whatWeDoSlider.getBoundingClientRect();
const whatWeDoSectionRect = whatWedoSection.getBoundingClientRect();
let freshed = true;
function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

let startPos = 0;
let lastPos = 0;
let velocity = 0;
let dragging = false;
let deceleration = 0.95; // Adjust this value for more or less deceleration
let decelerationInterval = 10; // Interval in milliseconds
let decelerationId = null;
let left =window.getComputedStyle(whatWeDoSlider);

whatWeDoSlider.style.left=left.left
whatWeDoSlider.addEventListener("touchstart", startDrag);
whatWeDoSlider.addEventListener("touchmove", doDrag);
whatWeDoSlider.addEventListener("touchend", endDrag);
whatWeDoSlider.addEventListener("mousedown", startDrag);
whatWeDoSlider.addEventListener("mousemove", doDrag);
whatWeDoSlider.addEventListener("mouseup", endDrag);
function startDrag(e) {
  startPos = (e.touches ? e.touches[0].clientX : e.clientX);
  lastPos = startPos;
  velocity = 0;
  dragging = true;
  if (decelerationId) {
      clearInterval(decelerationId);
      decelerationId = null;
  }
  if (freshed) {
    freshed = false;
    whatWedoSliderMaxLeft = parseInt(whatWeDoSliderRect.left-whatWeDoSectionRect.left);

  }
}
function doDrag(e) {
  window.addEventListener("scroll", preventScroll, { passive: false });
  e.preventDefault();
  e.stopPropagation();
  if (!dragging) return;
  const currentPos = e.touches ? e.touches[0].clientX : e.clientX;
  const deltaX = currentPos - lastPos;
  let newLeft = parseFloat(whatWeDoSlider.style.left || '0') + deltaX;
  const newRect = whatWeDoSlider.getBoundingClientRect();
  const rectSection = whatWedoSection.getBoundingClientRect();
  console.log(newRect.right+" 000000000000000000" )
  if (newRect.left-rectSection.left + deltaX < whatWedoSliderMaxLeft && newRect.right + deltaX > rectSection.right) {
    updateSliderPosition(newLeft);
  }

  if (newRect.left-rectSection.left + deltaX > whatWedoSliderMaxLeft) {
    if (newRect.left-rectSection.left < whatWedoSliderMaxLeft + 50) {
      currentX = deltaX;
      updateSliderPosition(newLeft);
    }
  }
  if (newRect.right + deltaX < rectSection.right) {
    if (newRect.right > rectSection.right - 50) {
      currentX = deltaX;
      updateSliderPosition(newLeft);
    }
  }

  lastPos = currentPos;
  velocity = deltaX; // Calculate velocity
}
function endDrag() {
  dragging = false;
  // Start the deceleration process
  decelerationId = setInterval(applyVelocity, decelerationInterval);
}
function updateSliderPosition(pos) {
    whatWeDoSlider.style.left = `${pos}px`;
}

function applyVelocity() {
    if (Math.abs(velocity) < 0.1) {
        clearInterval(decelerationId);
        decelerationId = null;
        return; // Stop the interval when velocity is very low
    }
    let currentLeft = parseFloat(whatWeDoSlider.style.left || '0');
    let newLeft = currentLeft + velocity;


    const newRect = whatWeDoSlider.getBoundingClientRect();
    const rectSection = whatWedoSection.getBoundingClientRect();

    updateSliderPosition(newLeft);
    velocity *= deceleration; // Apply deceleration
  if (newRect.left-rectSection.left > whatWedoSliderMaxLeft) {
    velocity=0
    lastPos = whatWedoSliderMaxLeft;
    updateSliderPosition(lastPos);
  }
  if (newRect.right < rectSection.right) {
    velocity=0
    // Snap back to right boundary
    lastPos=-whatWeDoSlider.offsetWidth+rectSection.right -rectSection.left;

    updateSliderPosition(lastPos);
  }
  
  
}











window.addEventListener("resize", handleResize);
let windowWidth769 = false;
function handleResize() {
  let windowWidth = window.screen.width;
  let windowHeight = window.screen.height;
  theThirdTitle.style.height="0px"
  theSecondTitle.style.height="0px"
  container.style.height = `calc(100vh - ${aboutCardHolder.clientHeight}px - 40px)`;
  slider.style.height = `calc(99.5vh - ${aboutCardHolder.clientHeight}px - 40px)`;
  const borderRadius = 20
  const innerShapeMargin = 20;
  const tCBorderRadius = 30;

  let theFirstTitleMaxWidth = 300;
  let theFirstTitleButtWidth = 50;
  let theFirstTitleButtHeight = 50;
  let removeFirstTitle = false;
  let theFirstTitleDivHeight = 100;
  if (windowWidth < 1024 *pixelRatio) {
    theFirstTitleMaxWidth = 200;
    theFirstTitleButtWidth = 40;
    theFirstTitleButtHeight = 40;
    removeFirstTitle = false;
    theFirstTitleDivHeight = 90;
  }
  if (windowWidth < 769 *pixelRatio) {
    theFirstTitleMaxWidth = 200;
    theFirstTitleButtWidth = 30;
    theFirstTitleButtHeight = 30;
    removeFirstTitle = false;
    theFirstTitleDivHeight = 70;
    container.style.height = `calc(100vh - ${aboutCardHolder.clientHeight}px - 40px)`;
    slider.style.height = `calc(99.5vh - ${aboutCardHolder.clientHeight}px - 40px)`;
    windowWidth769 = true;
  } else {
    container.style.height = `calc(100vh)`;
    slider.style.height = `calc(99.5vh)`;
    windowWidth769 = false;
  }
  if (windowWidth < 769*pixelRatio) {

    removeFirstTitle = true;
    container.style.height = `calc(100vh - ${aboutCardHolder.clientHeight}px - 40px)`;
    slider.style.height = `calc(99.5vh - ${aboutCardHolder.clientHeight}px - 40px)`;
    
  }
  if(windowHeight< 601) {
    console.log("windowHeight< 601*pixelRatio",windowHeight)
    if (windowWidth < 769*pixelRatio) {
      windowWidth769 = true;
    }
    
    removeFirstTitle = true;
    container.style.height = `calc(100vh)`;
    slider.style.height = `calc(99.5vh)`;

  }
  console.log(windowWidth ,"<" ,769 * pixelRatio,pixelRatio)
  ///////////////////////////////////////////////////////////////////

  svg.setAttribute("width", container.clientWidth);
  svg.setAttribute("height", container.clientHeight);
  const path = document.getElementById("svgPath");
  theThirdTitle.style.bottom = `${innerShapeMargin}px`; // Adjust as needed
  theThirdTitle.style.left = `${innerShapeMargin}px`; // Adjust as needed
  theThirdTitle.style.width = `auto`;
  theThirdTitle.style.height = `auto`;
  theThirdTitle.style.padding = `${5}px ${tCBorderRadius}px ${5}px ${0}px`;


  let theThirdW = parseFloat(theThirdTitle.offsetWidth);
  let theThirdH = parseFloat(theThirdTitle.offsetHeight);

  theThirdTitle.style.width = `${theThirdW + 1}px`; // Adjust as needed
  theThirdTitle.style.height = `${theThirdH}px`; // Adjust as needed
  let theThirdTitleWidth = theThirdW + tCBorderRadius;
  let theThirdTRectSideHight = theThirdH - tCBorderRadius - tCBorderRadius;
  if (theThirdTRectSideHight < 0) {
    theThirdTRectSideHight = 0;
    theThirdH = tCBorderRadius + tCBorderRadius;
    theThirdTitle.style.height = `${theThirdH}px`;
  }

  theSecondTitle.style.bottom = `${innerShapeMargin + theThirdH}px`; // Adjust as needed
  theSecondTitle.style.left = `${innerShapeMargin}px`; // Adjust as needed

  theSecondTitle.style.padding = `${5}px ${tCBorderRadius}px ${5}px ${0}px`;
  theSecondTitle.style.width = `auto`;
  theSecondTitle.style.height = `auto`;
  let theSecondW = parseFloat(theSecondTitle.offsetWidth);
  let theSecondH = parseFloat(theSecondTitle.offsetHeight);


  theSecondTitle.style.width = `${theSecondW + 1}px`; // Adjust as needed
  theSecondTitle.style.height = `${theSecondH}px`; // Adjust as needed
  let theSecondTitleWidth = theSecondW + tCBorderRadius;
  let theSecondTitleHeight = theSecondH + tCBorderRadius;
  let theSecondTRectSideHight = theSecondH - tCBorderRadius - tCBorderRadius;
  if (theSecondTRectSideHight < 0) {
    theSecondTRectSideHight = 0;
    theSecondH = tCBorderRadius + tCBorderRadius;
    theSecondTitle.style.height = `${theSecondH}px`;
  }

  //theFirstTitle.style.fontSize = `${theFirstitleFontSize}px`;
  theFirstTitle.style.display = `${removeFirstTitle ? "none" : "flex"}`;
  theFirstTitle.style.alignItems = `center`;
  theFirstTitle.style.maxWidth = `${theFirstTitleMaxWidth}px`;
  theFirstTitle.style.letterSpacing = "2px";
  theFirstTitleDiv.style.position = "absolute";
  theFirstTitleDiv.style.bottom = `${innerShapeMargin + theThirdH + theSecondH
    }px`;
  theFirstTitleDiv.style.left = `${innerShapeMargin}px`; // Adjust as needed
  theFirstTitleDiv.style.display = `${removeFirstTitle ? "none" : "flex"}`;
  theFirstTitleDiv.style.alignItems = `center`;
  theFirstTitleDiv.style.padding = "0px 0px 10px 0px";
  theFirstTitleDiv.style.letterSpacing = "2px";
  theFirstTitleDiv.style.height = `${theFirstTitleDivHeight === "auto" ? "auto" : theFirstTitleDivHeight + "px"
    }`;
  theFirstTitleDiv.style.width = "auto";
  theFirstTitleDiv.style.paddingRight = `${20}px`;
  theFirstTitleButt.style.borderRadius = "50%";
  theFirstTitleButt.style.fontSize = "xx-large";
  theFirstTitleButt.style.fontWeight = "bolder";
  theFirstTitleButt.style.display = `${removeFirstTitle ? "none" : "flex"}`;
  theFirstTitleButt.style.alignItems = "center";
  theFirstTitleButt.style.justifyContent = "center";
  theFirstTitleButt.style.width = `${theFirstTitleButtWidth}px`;

  theFirstTitleButt.style.height = `${theFirstTitleButtHeight}px`;

  const computedStyles1 = window.getComputedStyle(theFirstTitleDiv);
  const computedStylesFT = window.getComputedStyle(theFirstTitle);
  const theFirstW = parseFloat(computedStyles1.width);
  let theFirstH = parseFloat(
    theFirstTitleDivHeight !== "auto"
      ? theFirstTitleDivHeight
      : computedStyles1.height
  );

  const theFirstTitleWidth = theFirstW + tCBorderRadius;
  let theFirstTRectSideHight = theFirstH - tCBorderRadius - tCBorderRadius;
  if (theFirstTRectSideHight < 0) {
    theFirstTRectSideHight = 0;
    theFirstH = tCBorderRadius + tCBorderRadius;
    theFirstTitle.style.height = `${theFirstH}px`;
  }

  if (windowWidth769) {
    letUsWork.style.height = `${borderRadius + borderRadius}px`;
    letUsWork.style.borderRadius = `${borderRadius}px`;
    underLetUsWork.style.height = `${tCBorderRadius + tCBorderRadius / 2}px`;
    underLetUsWork.style.width = `${tCBorderRadius + tCBorderRadius / 2}px`;
    if (!removeFirstTitle) {
      underLetUsWork.style.left = `${theSecondW + tCBorderRadius + 5}px`;
      underLetUsWork.style.bottom = `${innerShapeMargin +
        theThirdH +
        tCBorderRadius -
        underLetUsWork.offsetHeight / 2 +
        5
        }px`;
      letUsWork.style.left = `${innerShapeMargin +
        tCBorderRadius +
        5 +
        theSecondW -
        letUsWork.offsetWidth / 2
        }px`;
      letUsWork.style.bottom = `${innerShapeMargin + theThirdH + theSecondH + borderRadius
        }px`;
    } else {
      underLetUsWork.style.left = `${theSecondW + tCBorderRadius + 5}px`;
      underLetUsWork.style.bottom = `${innerShapeMargin +
        theThirdH +
        tCBorderRadius -
        underLetUsWork.offsetHeight / 2 +
        5
        }px`;
      letUsWork.style.left = `${innerShapeMargin + borderRadius}px`;
      letUsWork.style.bottom = `${innerShapeMargin + theThirdH + theSecondH + borderRadius
        }px`;
    }
    letUsWork.style.fontSize = "12px";
    letUsWork.style.width = "150px";
  } else {
    letUsWork.style.height = `${tCBorderRadius + tCBorderRadius}px`;
    letUsWork.style.borderRadius = `${tCBorderRadius}px`;
    letUsWork.style.left = `${theSecondTitleWidth + 5}px`;
    letUsWork.style.bottom = `${innerShapeMargin + theThirdH + letUsWork.offsetHeight / 3
      }px`;

    underLetUsWork.style.height = `${tCBorderRadius + tCBorderRadius}px`;
    underLetUsWork.style.width = `${tCBorderRadius + tCBorderRadius}px`;
    underLetUsWork.style.left = `${theSecondW + tCBorderRadius + letUsWork.offsetWidth + tCBorderRadius
      }px`;
    underLetUsWork.style.bottom = `${innerShapeMargin + theThirdH + letUsWork.offsetHeight / 3
      }px`;
  }

  const points = [
    { M: { x: 0, y: 0 } },
    { L: { x: container.clientWidth, y: 0 } },
    { L: { x: container.clientWidth, y: container.clientHeight } },
    { L: { x: 0, y: container.clientHeight } },
    { L: { x: 0, y: 0 } },
    { Z: "" },
    { M: { x: innerShapeMargin + borderRadius, y: innerShapeMargin }},
    {L: {x: container.clientWidth - innerShapeMargin - borderRadius,y: innerShapeMargin,},},
    {Q: {x1: container.clientWidth - innerShapeMargin,y1: innerShapeMargin,x: container.clientWidth - innerShapeMargin,y: innerShapeMargin + borderRadius,},},
    {L: {x: container.clientWidth - innerShapeMargin,y: container.clientHeight - innerShapeMargin - borderRadius,},},
    {Q: {x1: container.clientWidth - innerShapeMargin,y1: container.clientHeight - innerShapeMargin,x: container.clientWidth - innerShapeMargin - borderRadius,y: container.clientHeight - innerShapeMargin,},},
    {L: {x: innerShapeMargin + theThirdTitleWidth,y: container.clientHeight - innerShapeMargin,},},
    {Q: {x1: innerShapeMargin + theThirdTitleWidth - tCBorderRadius,y1: container.clientHeight - innerShapeMargin,x: innerShapeMargin + theThirdTitleWidth - tCBorderRadius,y: container.clientHeight - innerShapeMargin - tCBorderRadius,},},
    {L: {x: innerShapeMargin + theThirdTitleWidth - tCBorderRadius,y:container.clientHeight -innerShapeMargin -borderRadius -theThirdTRectSideHight,},},
    {Q: {x1: innerShapeMargin + theThirdTitleWidth - tCBorderRadius,y1:container.clientHeight -innerShapeMargin -tCBorderRadius -theThirdTRectSideHight -tCBorderRadius,x: innerShapeMargin + theThirdTitleWidth - 2 * tCBorderRadius,y:container.clientHeight -innerShapeMargin -tCBorderRadius -theThirdTRectSideHight -tCBorderRadius,},},
    {L: {x: innerShapeMargin + theSecondTitleWidth,y:container.clientHeight -innerShapeMargin -tCBorderRadius -theThirdTRectSideHight -tCBorderRadius,},},
    /////////////
    {Q: {x1: innerShapeMargin + theSecondTitleWidth - tCBorderRadius,y1:container.clientHeight -innerShapeMargin -tCBorderRadius -theThirdTRectSideHight -tCBorderRadius,x: innerShapeMargin + theSecondTitleWidth - tCBorderRadius,y:container.clientHeight -innerShapeMargin -tCBorderRadius -theThirdTRectSideHight -tCBorderRadius -tCBorderRadius,},},
    {L: {x: innerShapeMargin + theSecondTitleWidth - tCBorderRadius,y:container.clientHeight -innerShapeMargin -tCBorderRadius -theThirdTRectSideHight -tCBorderRadius -tCBorderRadius -theSecondTRectSideHight,},},
    {Q: {x1: innerShapeMargin + theSecondTitleWidth - tCBorderRadius,y1:container.clientHeight -innerShapeMargin -tCBorderRadius -theThirdTRectSideHight -tCBorderRadius -tCBorderRadius -theSecondTRectSideHight -tCBorderRadius,x: innerShapeMargin + theSecondTitleWidth - 2 * tCBorderRadius,y:container.clientHeight -innerShapeMargin -tCBorderRadius -theThirdTRectSideHight -tCBorderRadius -tCBorderRadius -theSecondTRectSideHight -tCBorderRadius,},},
  ];
  if (removeFirstTitle) {
    points.push(
      {
        L: {
          x: innerShapeMargin + borderRadius,
          y:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius,
        },
      },

      {
        Q: {
          x1: innerShapeMargin,
          y1:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius,
          x: innerShapeMargin,
          y:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius -
            tCBorderRadius,
        },
      },
      { L: { x: innerShapeMargin, y: innerShapeMargin + borderRadius } },
      {
        Q: {
          x1: innerShapeMargin,
          y1: innerShapeMargin,
          x: innerShapeMargin + borderRadius,
          y: innerShapeMargin,
        },
      },
      { Z: "" }
    );
  } else {
    points.push(
      {
        L: {
          x: innerShapeMargin + theFirstTitleWidth,
          y:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius,
        },
      },
      {
        Q: {
          x1: innerShapeMargin + theFirstTitleWidth - tCBorderRadius,
          y1:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius,
          x: innerShapeMargin + theFirstTitleWidth - tCBorderRadius,
          y:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius -
            tCBorderRadius,
        },
      },
      {
        L: {
          x: innerShapeMargin + theFirstTitleWidth - tCBorderRadius,
          y:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theFirstTRectSideHight,
        },
      },
      {
        Q: {
          x1: innerShapeMargin + theFirstTitleWidth - tCBorderRadius,
          y1:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theFirstTRectSideHight -
            tCBorderRadius,
          x: innerShapeMargin + theFirstTitleWidth - 2 * tCBorderRadius,
          y:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theFirstTRectSideHight -
            tCBorderRadius,
        },
      },
      {
        L: {
          x: innerShapeMargin + borderRadius,
          y:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theFirstTRectSideHight -
            tCBorderRadius,
        },
      },

      {
        Q: {
          x1: innerShapeMargin,
          y1:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theFirstTRectSideHight -
            tCBorderRadius,
          x: innerShapeMargin,
          y:
            container.clientHeight -
            innerShapeMargin -
            tCBorderRadius -
            theThirdTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theSecondTRectSideHight -
            tCBorderRadius -
            tCBorderRadius -
            theFirstTRectSideHight -
            tCBorderRadius -
            borderRadius,
        },
      },
      { L: { x: innerShapeMargin, y: innerShapeMargin + borderRadius } },
      {
        Q: {
          x1: innerShapeMargin,
          y1: innerShapeMargin,
          x: innerShapeMargin + borderRadius,
          y: innerShapeMargin,
        },
      },
      { Z: "" }
    );
  }

  let newPath = "";
  points.forEach((point) => {
    const key = Object.keys(point)[0]; // Get the key (e.g., "M", "L", "Q", "Z")
    const value = point[key]; // Get the corresponding object {x, y, x1, y1} or ""

    if (key === "Z") {
      newPath += "Z ";
    } else {
      if (value.x1 === undefined && value.y1 === undefined) {
        newPath += `${key} ${value.x} ${value.y} `;
      }
      if (value.x1 !== undefined && value.y1 !== undefined) {
        newPath += `${key} ${value.x1} ${value.y1} `;
        newPath += `${value.x} ${value.y} `;
      }
    }
  });
  path.setAttribute("d", newPath);
  ///////////////////////////////////////////////////////////////////
  handleAboutCard(innerShapeMargin, theThirdH, borderRadius);
}
let animateAboutCardBool = false;
let aboutCardHolderWidth = aboutCardHolder.offsetWidth;
let aboutCardHolderHeight = aboutCardHolder.offsetHeight;
let aboutCardContainerWidth = aboutCardHolder.offsetWidth;
let aboutCardContainerHeight = aboutCardHolder.offsetHeight;
const aboutCardSvgPath = document.getElementById("svgPathAbout");
const aboutCardSvgBorderRadius = 30;
const ButtBorderRadius = 30;
const aboutCardContainerH2=aboutCardContainer.querySelector("h2")
const aboutCardContainerP=aboutCardContainer.querySelector("p")
let shrunk=false
function styleAboutCard(innerShapeMargin){

  aboutCardSvg.setAttribute("width",  `${shrunk?aboutCardSvgBorderRadius + 3 * ButtBorderRadius:aboutCardContainerWidth}px`);
  aboutCardSvg.setAttribute("height", `${shrunk?aboutCardSvgBorderRadius + 3 * ButtBorderRadius:aboutCardContainerHeight}px`);

  aboutButton.style.width = `${ButtBorderRadius * 2}px`;
  aboutButton.style.height = `${ButtBorderRadius * 2}px`;
  aboutButton.style.bottom = `${-(ButtBorderRadius / 3)}px`;
  aboutButton.style.right = `${0 - ButtBorderRadius / 3}px`;
  aboutButton.style.borderRadius = `${ButtBorderRadius * 2}px`;
  aboutCardHolder.style.width = `${shrunk?aboutCardSvgBorderRadius + 3 * ButtBorderRadius:aboutCardContainerWidth}px`;
  aboutCardHolder.style.height = `${shrunk?aboutCardSvgBorderRadius + 3 * ButtBorderRadius:aboutCardContainerHeight}px`;
  aboutCardContainer.style.display = "flex";
  aboutCardContainer.style.position = "absolute";
  aboutCardContainer.style.filter = "drop-shadow(0px 0px 30px #0000002b)";
  aboutCardContainer.style.width = `${shrunk?aboutCardSvgBorderRadius + 3 * ButtBorderRadius:aboutCardContainerWidth}px`;
  aboutCardContainer.style.height = `${shrunk?aboutCardSvgBorderRadius + 3 * ButtBorderRadius:aboutCardContainerHeight}px`;
  aboutCardContainer.style.right = `${0}px`;
  aboutCardContainer.style.bottom = `${0}px`;
  if (windowWidth769) {
    animateAboutCardBool = false;
    aboutCardHolder.style.position = "relative";
    aboutCardHolder.style.right = `unset`;
    aboutCardHolder.style.bottom = `unset`;
    //console.log("animate aboutCard should be false", animateAboutCardBool);
  } else {
    animateAboutCardBool = true;
    aboutCardHolder.style.position = "absolute";
    aboutCardHolder.style.right = `${Math.round(
      innerShapeMargin + ButtBorderRadius
    )}px`;
    aboutCardHolder.style.bottom = `${Math.round(
      innerShapeMargin + ButtBorderRadius
    )}px`;
    //console.log("animate aboutCard should be true", animateAboutCardBool);
  }
}
function handleAboutCard(innerShapeMargin, theThirdH, borderRadius) {

  styleAboutCard(innerShapeMargin)
  
  
  const aboutSvgPoints = [
    { M: { x: aboutCardSvgBorderRadius, y: 0 } },
    {
      L: { x: aboutCardContainer.clientWidth - aboutCardSvgBorderRadius, y: 0 },
    },
    {
      Q: {
        x1: aboutCardContainer.clientWidth,
        y1: 0,
        x: aboutCardContainer.clientWidth,
        y: aboutCardSvgBorderRadius,
      },
    },
    {
      L: {
        x: aboutCardContainer.clientWidth,
        y: aboutCardContainer.clientHeight - 3 * ButtBorderRadius,
      },
    },

    {
      Q: {
        x1: aboutCardContainer.clientWidth,
        y1: aboutCardContainer.clientHeight - 2 * ButtBorderRadius,
        x: aboutCardContainer.clientWidth - ButtBorderRadius,
        y: aboutCardContainer.clientHeight - 2 * ButtBorderRadius,
      },
    },
    {
      Q: {
        x1: aboutCardContainer.clientWidth - 2 * ButtBorderRadius,
        y1: aboutCardContainer.clientHeight - 2 * ButtBorderRadius,
        x: aboutCardContainer.clientWidth - 2 * ButtBorderRadius,
        y: aboutCardContainer.clientHeight - ButtBorderRadius,
      },
    },
    {
      Q: {
        x1: aboutCardContainer.clientWidth - 2 * ButtBorderRadius,
        y1: aboutCardContainer.clientHeight,
        x: aboutCardContainer.clientWidth - 3 * ButtBorderRadius,
        y: aboutCardContainer.clientHeight,
      },
    },

    { L: { x: aboutCardSvgBorderRadius, y: aboutCardContainer.clientHeight } },
    {
      Q: {
        x1: 0,
        y1: aboutCardContainer.clientHeight,
        x: 0,
        y: aboutCardContainer.clientHeight - aboutCardSvgBorderRadius,
      },
    },
    { L: { x: 0, y: aboutCardSvgBorderRadius } },
    { Q: { x1: 0, y1: 0, x: aboutCardSvgBorderRadius, y: 0 } },
    { Z: "" },
  ];
  let aboutCardNewPath = "";
  aboutSvgPoints.forEach((point) => {
    const key = Object.keys(point)[0];
    const value = point[key];

    if (key === "Z") {
      aboutCardNewPath += "Z ";
    } else {
      if (value.x1 === undefined && value.y1 === undefined) {
        aboutCardNewPath += `${key} ${value.x} ${value.y} `;
      }
      if (value.x1 !== undefined && value.y1 !== undefined) {
        aboutCardNewPath += `${key} ${value.x1} ${value.y1} `;
        aboutCardNewPath += `${value.x} ${value.y} `;
      }
    }
  });

  aboutCardSvgPath.setAttribute("d", aboutCardNewPath);
  if (animateAboutCardBool) {
    //console.log("animate aboutCard ",animateAboutCardBool);
    aboutButton.addEventListener("click",handleAboutCardButtonClick);
  } else {
    shrunk=false
    aboutCardContainerH2.style.width = `${containerWidthExcludingPadding}px`;
    aboutCardContainerP.style.width = `${containerWidthExcludingPadding}px`;
    aboutCardContainerH2.style.animation ="showH2 0.3s ease-in forwards";
    aboutCardContainerP.style.animation ="showP 0.3s ease-in forwards";
    aboutButton.removeEventListener('click', handleAboutCardButtonClick);
    styleAboutCard(innerShapeMargin)
    console.log("animate about card is ",animateAboutCardBool," remove");
  }
}
function handleAboutCardButtonClick(innerShapeMargin, theThirdH, borderRadius)
{
  if (
    parseInt(aboutCardHolder.style.width) >
    aboutCardSvgBorderRadius + 3 * ButtBorderRadius
  ) {
    animateAboutCard(
      aboutCardSvgBorderRadius + 3 * ButtBorderRadius,
      aboutCardSvgBorderRadius + 3 * ButtBorderRadius,
      500,
      innerShapeMargin,
      theThirdH,
      borderRadius,
      aboutCardSvgBorderRadius,
      ButtBorderRadius,
      aboutCardSvgPath
    );
    aboutCardContainerH2.style.width = `${containerWidthExcludingPadding}px`;
    aboutCardContainerP.style.width = `${containerWidthExcludingPadding}px`;
    aboutCardContainerH2.style.animation ="hideH2 0.3s ease-in forwards";
    aboutCardContainerP.style.animation ="hideP 0.3s ease-in forwards";
    shrunk=true;
  } else if (
    parseInt(aboutCardHolder.style.width) <=
    aboutCardSvgBorderRadius + 3 * ButtBorderRadius
  ) {
    animateAboutCard(
      aboutCardContainerWidth,
      aboutCardContainerHeight,
      500,
      innerShapeMargin,
      theThirdH,
      borderRadius,
      aboutCardSvgBorderRadius,
      ButtBorderRadius,
      aboutCardSvgPath
    );
    aboutCardContainerH2.style.width = `${containerWidthExcludingPadding}px`;
    aboutCardContainerP.style.width = `${containerWidthExcludingPadding}px`;
    aboutCardContainerH2.style.animation ="showH2 0.3s ease-in forwards";
    aboutCardContainerP.style.animation ="showP 0.3s ease-in forwards";
    shrunk=false
  }
}
function animateAboutCard(
  targetWidth,
  targetHeight,
  duration,
  innerShapeMargin,
  theThirdH,
  borderRadius,
  aboutCardSvgBorderRadius,
  ButtBorderRadius,
  aboutCardSvgPath
) {
  const startWidth = aboutCardContainer.clientWidth;
  const startHeight = aboutCardContainer.clientHeight;
  const startTime = performance.now();

  function easeIn(progress) {
    return 1 - Math.pow(1 - progress, 2);
  }

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easingProgress = easeIn(progress);

    const newWidth = Math.round(
      startWidth + (targetWidth - startWidth) * easingProgress
    );
    const newHeight = Math.round(
      startHeight + (targetHeight - startHeight) * easingProgress
    );

    aboutCardSvg.setAttribute("width", `${newWidth}px`);
    aboutCardSvg.setAttribute("height",`${newHeight}px`);
    // Update container dimensions and position
    aboutCardContainer.style.width = `${newWidth}px`;
    aboutCardContainer.style.height = `${newHeight}px`;
    aboutCardHolder.style.width = `${newWidth}px`;
    aboutCardHolder.style.height = `${newHeight}px`;

    // Update SVG path data points
    const aboutSvgPoints = [
      { M: { x: aboutCardSvgBorderRadius, y: 0 } },
      { L: { x: newWidth - aboutCardSvgBorderRadius, y: 0 } },
      { Q: { x1: newWidth, y1: 0, x: newWidth, y: aboutCardSvgBorderRadius } },
      { L: { x: newWidth, y: newHeight - 3 * ButtBorderRadius } },
      {
        Q: {
          x1: newWidth,
          y1: newHeight - 2 * ButtBorderRadius,
          x: newWidth - ButtBorderRadius,
          y: newHeight - 2 * ButtBorderRadius,
        },
      },
      {
        Q: {
          x1: newWidth - 2 * ButtBorderRadius,
          y1: newHeight - 2 * ButtBorderRadius,
          x: newWidth - 2 * ButtBorderRadius,
          y: newHeight - ButtBorderRadius,
        },
      },
      {
        Q: {
          x1: newWidth - 2 * ButtBorderRadius,
          y1: newHeight,
          x: newWidth - 3 * ButtBorderRadius,
          y: newHeight,
        },
      },
      { L: { x: aboutCardSvgBorderRadius, y: newHeight } },
      {
        Q: {
          x1: 0,
          y1: newHeight,
          x: 0,
          y: newHeight - aboutCardSvgBorderRadius,
        },
      },
      { L: { x: 0, y: aboutCardSvgBorderRadius } },
      { Q: { x1: 0, y1: 0, x: aboutCardSvgBorderRadius, y: 0 } },
      { Z: "" },
    ];

    let aboutCardNewPath = "";
    aboutSvgPoints.forEach((point) => {
      const key = Object.keys(point)[0];
      const value = point[key];

      if (key === "Z") {
        aboutCardNewPath += "Z ";
      } else {
        if (value.x1 === undefined && value.y1 === undefined) {
          aboutCardNewPath += `${key} ${value.x} ${value.y} `;
        }
        if (value.x1 !== undefined && value.y1 !== undefined) {
          aboutCardNewPath += `${key} ${value.x1} ${value.y1} `;
          aboutCardNewPath += `${value.x} ${value.y} `;
        }
      }
    });

    // Apply new path data to SVG path
    aboutCardSvgPath.setAttribute("d", aboutCardNewPath);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}
handleResize();

document.addEventListener("DOMContentLoaded", function () {
  // Get all FAQ question elements
  var faqQuestions = document.querySelectorAll(".faq-question");

  // Loop through each question
  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      // Toggle answer visibility
      var answer = this.nextElementSibling;
      if (answer.classList.contains("openAnswer")) {
        answer.classList.remove("openAnswer");
        answer.classList.add("closeAnswer");
      } else {
        answer.classList.remove("closeAnswer");
        answer.classList.add("openAnswer");
      }

      // Toggle icon direction
      var icon = this.querySelector("i");
      icon.classList.toggle("fa-chevron-up");
      icon.classList.toggle("fa-chevron-down");
    });
  });
});

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  const navbarDesktopHolder = document.querySelector(".navbarDesktopHolder");
  const navDesktop1 = document.querySelector(".navDesktop1");
  const navDesktopLogo = document.querySelector(".navDesktopLogo");
  const navDesktop2 = document.querySelector(".navDesktop2");

  if (scrollPosition > 10) {

  } else {

  }
  if (
    scrollPosition >
    container.offsetHeight - navbarDesktopHolder.offsetHeight
  ) {
    navbarDesktopHolder.classList.add("scrolled");
    navDesktopLogo.classList.add("scrolled");
    navDesktop1.classList.add("scrolled");
    navDesktop2.classList.add("scrolled");
  } else {
    navbarDesktopHolder.classList.remove("scrolled");
    navDesktopLogo.classList.remove("scrolled");
    navDesktop1.classList.remove("scrolled");
    navDesktop2.classList.remove("scrolled");
  }

  const navMobileLogo = document.querySelector(".navMobileLogo");
  // Get its position relative to the viewport
  const rect = navMobileLogo.getBoundingClientRect();

  if (
    scrollPosition >
    container.offsetHeight - navMobileLogo.offsetHeight - rect.top
  ) {
    navMobileLogo.classList.add("scrolled");
  } else {
    navMobileLogo.classList.remove("scrolled");
  }
  // Log the y-axis position
});
        // Add an event listener to all links
        document.querySelectorAll('.navMobileListItem a').forEach(link => {
          link.addEventListener('click', function(event) {
              // Prevent default action
              event.preventDefault();

              // Remove 'active' class from all items
              document.querySelectorAll('.navMobileListItem a').forEach(item => {
                  item.classList.remove('active');
              });

              // Add 'active' class to the parent of the clicked link
              this.classList.add('active');
          });
      });