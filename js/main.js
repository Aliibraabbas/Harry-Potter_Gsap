gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

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
      {x: 200, y: 200, scale: 100},
   ],
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


if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}

const cercle = document.querySelector('.cercle');
const imgs = document.querySelectorAll('.img');

const TL = gsap.timeline({paused: true});

TL.to(imgs, {scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)"});

cercle.addEventListener('mouseenter', () => {
   TL.play();
})

cercle.addEventListener('mouseout', () => {
   TL.reverse();
})
