import { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const AboutSection = (props) => {
   useEffect(() => {
      if (typeof window !== "undefined") {
         gsap.registerPlugin(ScrollTrigger);
		}
      //about section timeline
		const aboutTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#about .section-line",
				start: "top bottom",
				end: "=-300",
			}
		});
		aboutTl.fromTo("#about .section-line", 1, {
			width: 0,
		}, {
			width: "4rem",
			ease: "power3.inOut"
		}).from("#about .section-category", 1.5, {
			x: -10,
			opacity: 0,
			stagger: 0.3,
			skewX: 5,
			delay: -0.5,
			ease: "power3.out"
		}).from(".about-h2", 1, {
			x: -70,
			opacity: 0,
			stagger: 0.3,
			skewX: 3,
			delay: -1.5,
			ease: "power3.out"
		});

		//about skills timeline
		const skillsTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#skills",
				start: "top bottom",
				end: "=-300",
			}
		});
		skillsTl.fromTo("#skills .intro-line", 1, {
			width: 0,
		}, {
			width: "1.5rem",
			ease: "power3.inOut"
		}).from("#skills .intro-text", 1, {
			opacity: 0,
			x: -10,
			stagger: 0.3,
			skewX: 2,
			delay: -0.5
		}).from(".skills-content", 1, {
			y: -20,
			opacity: 0,
			stagger: 0.3,
			skewX: 2,
			delay: -0.75,
		}).from(".about-cta", 1, {
			y: -20,
			opacity: 0,
			stagger: 0.3,
			delay: -0.5,
			ease: "power3.out"
		});;

		const aboutMeTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#aboutme",
				start: "top bottom",
				end: "=-300",
			}
		});
		aboutMeTl.fromTo("#aboutme .intro-line", 1, {
			width: 0,
		}, {
			width: "1.5rem",
			ease: "power3.inOut"
		}).from("#aboutme .intro-text", 1, {
			opacity: 0,
			x: -10,
			stagger: 0.3,
			delay: -0.5
		}).from(".aboutme-content", 1, {
			y: -20,
			opacity: 0,
			stagger: 0.3,
			delay: -0.75,
		}).

		gsap.from("#about-img", 1, {
			opacity: 0,
			x: -50,
			ease: "power3.out",
			delay: 0.5,
			scrollTrigger: {
				trigger: "#about-img",
				start: "top bottom",
				end: "=-300",
			}
		});
   })

   return (
      <section
         id='about'
			className={'pt-26 pb-32 md:pt-32 md:pb-48 overflow-x-hidden' + (props.sectionNumber % 2 === 0 ? ' bg-backgroundTwo ' : ((props.sectionNumber % 2) != 0 ? ' bg-backgroundOne' : ''))}
      >
         <div className='container'>
            <div className='flex flex-row items-center'>
               <div className='section-line h-1 w-16 bg-primaryBrand mr-6'></div>
               <p className='section-category text-greyText text-base font-medium'>About</p>
            </div>

            <h2 className='about-h2 text-white font-semibold text-4xl lg:text-secheader mt-8'>
               Get a closer look at who I am.
            </h2>

            <div className='flex flex-col-reverse lg:flex-row items-start'>
               <div className='w-full lg:w-7/12'>

                  <div id="aboutme" className='flex flex-row items-center mt-16 lg:mt-36'>
                     <div className='intro-line h-1 w-6 bg-primaryBrand mr-6'></div>
                     <p className='intro-text text-white text-base font-medium'>
                        Who am I
                     </p>
                  </div>

                  <p className='aboutme-content text-greyText font-normal text-base mt-6 leading-loose'>
                     I'm Oliver Cederborg, 23 years old and from Denmark. <br></br>Digital design has been an interest of mine for many years, and I work with anything from logo design to UI design and front-end development. <br></br>All the skills and tools I use, are self-taught over many years of practice and expanding my horizons.
                  </p>

                  <div id="skills" className='flex flex-row items-center mt-12'>
                     <div className='intro-line h-1 w-6 bg-primaryBrand mr-6'></div>
                     <p className='intro-text text-white text-base font-medium'>
                        Skills &amp; Tools
                     </p>
                  </div>

                  <p className='skills-content text-greyText font-normal text-base mt-6 leading-loose'>
                     Design: Figma, Photoshop, Illustrator, After Effects
                  </p>
                  <p className='skills-content text-greyText font-normal text-base mt-2 leading-loose'>
                     Development: JavaScript, React, Next.js, HTML, CSS/SCSS, TailwindCSS, WordPress
                  </p>

                  <div className="about-cta">
                     <AnchorLink
                        href='#connect'
                        className='text-white text-base font-medium bg-primaryBrand hover:bg-primaryGrey ease-in-out duration-300 px-8 py-4 mt-14 inline-flex w-auto'
                     >
                        Get in touch
                     </AnchorLink>
                  </div>
               </div>

               <div className='flex w-9/12 md:w-5/12 justify-end'>
                  <img
                     id="about-img"
                     src='/images/about-oliver.webp'
                     alt='About Oliver Cederborg'
                     className='h-full md:h-sm w-full mt-20 md:mt-30 object-contain pointer-events-none'
                  />
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutSection;