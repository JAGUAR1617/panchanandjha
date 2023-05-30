gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});


window.addEventListener('mouseup', (e) => {
    // Let's pick a random color between #000000 and #FFFFFF
    const color = Math.round(Math.random() * 0xFFFFFF)
  
    // Let's format the color to fit CSS requirements
    const fill = '#' + color.toString(16).padStart(6,'0')

      // e = e || window.event;
  // document.getElementById('pointer').style.top=e.clientY;
  // document.getElementById('pointer').style.left=e.clientX;
    // Let's apply our color in the
    // element we actually clicked on
    e.target.style.fill = fill
  })