gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Sync Locomotive Scroll with ScrollTrigger
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// Refresh ScrollTrigger on window updates
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Rotate Navbar Arrow on Scroll
gsap.to("nav svg", {
  rotate: 90,
  duration: 1,
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav svg",
    scroller: "#main",
    start: "top -5%",
    end: "top -6%",
    scrub: 1,
  },
});

gsap.to("nav svg", {
  backgroundColor: "#111",
  scrollTrigger: {
    trigger: "nav svg",
    scroller: "#main",
    start: "top -15%",
    end: "top -400%",
    scrub: 3,
  },
});

// Mouse Move Effect for Page 1
document.addEventListener("mousemove", (e) => {
  const windowWidth = window.innerWidth;
  const mouseX = e.clientX;
  const distanceFromCenter = (mouseX - windowWidth / 2) / (windowWidth / 2);
  const maxTranslation = 60;

  ["row1", "row2", "row3"].forEach((row, index) => {
    const factor = [1.5, 1, 0.5][index]; // Scaling factors for different rows
    document.getElementById(row).style.transform = `translateX(${
      distanceFromCenter * maxTranslation * factor
    }px)`;
  });
});

// Mouse Enter & Leave Effect
const bottomText = document.querySelector(".bottom-text");

bottomText.addEventListener("mouseenter", () => {
  gsap.to(".head-1", { y: "-100%", opacity: 0 });
  gsap.to(".head-2", { y: "20%", opacity: 1 });
  gsap.to(".ar1", { left: "100%", scale: 1, opacity: 0 });
  gsap.to(".ar2", { left: "50%", scale: 1.2, opacity: 1 });
});

bottomText.addEventListener("mouseleave", () => {
  gsap.to(".head-1", { y: "-5%", opacity: 1 });
  gsap.to(".head-2", { y: "100%", opacity: 0 });
  gsap.to(".ar1", { left: "50%", scale: 1.2, opacity: 1 });
  gsap.to(".ar2", { left: "-100%", scale: 1, opacity: 0 });
});

// Scrolling Animations
gsap.to("#name-div h1, .wl h1", {
  transform: "translateX(calc(-100% - 2vw - 4px))",
  scrollTrigger: {
    trigger: "#name-div h1, .wl h1",
    scroller: "#main",
    scrub: 5,
  },
});

gsap.from("#intro-div h1:nth-child(1)", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#intro-div h1:nth-child(1)",
    scroller: "#main",
    start: "top 70%",
  },
});

gsap.from(".box h4, .dev-box img, .des-box img", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: ".box h4, .dev-box img, .des-box img",
    scroller: "#main",
    start: "top 80%",
  },
  stagger: {
    amount: 1.5,
  },
});

// Text Splitting & Animation
const textSplitting = () => {
  document.querySelectorAll("#intro-div h1").forEach((elem) => {
    elem.innerHTML = [...elem.textContent]
      .map((char) => `<span>${char}</span>`)
      .join("");
  });
};

const gsapAnimation = () => {
  gsap.to("#intro-div h1 span", {
    color: "white",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#intro-div h1",
      scroller: "#main",
      start: "top 45%",
      end: "top -45%",
      scrub: 3,
    },
  });
};

textSplitting();
gsapAnimation();
