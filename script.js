gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// rotating an arrow in navbar

gsap.to("nav svg", {
    rotate: 90,
    duration: 1,
    backgroundColor: "#111",
    scrollTrigger: {
      trigger: "#nav svg",
      scroller: "#main",
      start: "top -5%",
      end: "top -6%",
      scrub: 1
    }
  })
  gsap.to("nav svg", {
    backgroundColor: "#111",
    scrollTrigger: {
      trigger: "#nav svg",
      scroller: "#main",
      start: "top -15%",
      end: "top -400%",
      scrub: 3
    }
  })
  
// page 1

document.addEventListener('mousemove', (e) => {
  const windowWidth = window.innerWidth;
  const mouseX = e.clientX;
  const centerX = windowWidth / 2;
  
 
  const distanceFromCenter = (mouseX - centerX) / (windowWidth / 2);
  
  
  const maxTranslation = 60;
  

  const row1 = document.getElementById('row1');
  const row2 = document.getElementById('row2');
  const row3 = document.getElementById('row3');
  
  
  row1.style.transform = `translateX(${distanceFromCenter * maxTranslation * 1.5}px)`;
  
  
  row2.style.transform = `translateX(${distanceFromCenter * maxTranslation}px)`;
  
  
  row3.style.transform = `translateX(${distanceFromCenter * maxTranslation * 0.5}px)`;
});


// Mouse Enter Effect


document.querySelector(".bottom-text").addEventListener('mouseenter', function(){
  gsap.to(".head-1", {
      y: "-100%",
      opacity: 0
  })
  gsap.to(".head-2", {
      y: "20%",
      opacity: 1
  })
  gsap.to(".ar1", {
      left: "100%",
      scale: 1,
      opacity: 0
  })
  gsap.to(".ar2", {
      left: "50%",
      scale: 1.2,
      opacity: 1
  })
  gsap.to(".red-cir", {
      // scale: 3.4,
  })
})
document.querySelector(".bottom-text").addEventListener('mouseleave', function(){
  gsap.to(".head-1", {
      y: "0%",
      opacity: 1
  })
  gsap.to(".head-2", {
      y: "100%",
      opacity: 0
  })
  gsap.to(".ar1", {
      left: "50%",
      scale: 1.2,
      opacity: 1
  })
  gsap.to(".ar2", {
      left: "-100%",
      scale: 1,
      opacity: 0
  })
  gsap.to(".red-cir", {
      // scale: 3
  })
})


  // scrolling a namediv
  
  gsap.to("#name-div h1", {
    transform: "translateX(calc(-100% - 2vw - 4px))",
    scrollTrigger: {
      trigger: "#name-div h1",
      scroller: "#main",
      // markers:true,
      scrub: 0.7
    }
  })
  gsap.to(".wl h1", {
    transform: "translateX(calc(-100% - 2vw - 4px))",
    scrollTrigger: {
      trigger: ".wl h1",
      scroller: "#main",
      // markers:true,
      scrub: 5,
    }
  })
  
  
  
  
  gsap.from("#intro-div h1:nth-child(1)", {
    scrollTrigger: {
      trigger: "#intro-div h1:nth-child(1)",
      scroller: "#main",
      // markers: true,
      start: "top 70%"
    },
    opacity: 0
  })
  gsap.from("#intro-div h1:nth-child(2)", {
  
    scrollTrigger: {
      trigger: "#intro-div h1:nth-child(2)",
      scroller: "#main",
      // markers: true,
      start: "top 60%"
    },
    duration: 1,
    opacity: 0
  })
  
  gsap.from("#intro-div h1:nth-child(3)", {
    scrollTrigger: {
      trigger: "#intro-div h1:nth-child(3)",
      scroller: "#main",
      // markers: true,
      start: "top 60%",
    },
    opacity: 0,
    duration: 1,
  })
  
  gsap.from(".box h4", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".box h4",
      scroller: "#main",
      // markers:true,
      start: "top 70%"
    },
    stagger: 0.5
  })
  
  gsap.from(".dev-box img", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".dev-box img",
      scroller: "#main",
      // markers:true,
      start: "top 80%"
    },
    y: 20,
    stagger: {
      amount: 2
    }
  
  })
  gsap.from(".des-box img", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".des-box img",
      scroller: "#main",
      // markers:true,
      start: "top 80%"
    },
    y: 20,
    stagger: {
      amount: 1
    }
  
  })