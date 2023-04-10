const magicPath = {
   curviness: 1.25,
   autoRotate: true,
   values: [
      {x: 300, y: 320},
      {x: 800, y: 610},
      {x: 350, y: 530},
      {x: 1000, y: 280},
      {x: 750, y: 230},
      {x: -350, y: 130},
      {x: 350, y: 330},
      {x: 150, y: 130},
      {x: 100, y: 580},
      {x: 890, y: 180},
      {x: 200, y: 200},
   ]
}

const tween = new TimelineLite();

tween.add(
   TweenLite.to('.magic-point', 1, {
      bezier: magicPath,
      ease: Power1.easeInOut
   })
);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
   triggerElement: '.anim',
   duration: 2000,
   triggerHook: 0
})

.setTween(tween)

.setPin('.anim')
.addTo(controller);