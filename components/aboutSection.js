import { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { logEvent } from "../utils/analytics";
 
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
		});

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
               <div className='w-16 h-1 mr-6 section-line bg-primaryBrand'></div>
               <p className='text-base font-medium section-category text-greyText'>About</p>
            </div>

            <h2 className='mt-8 text-4xl font-semibold text-white about-h2 lg:text-secheader'>
               Get a closer look at who I am.
            </h2>

            <div className='flex flex-col-reverse items-start lg:flex-row'>
               <div className='w-full lg:w-7/12'>

                  <div id="aboutme" className='flex flex-row items-center mt-16 lg:mt-36'>
                     <div className='w-6 h-1 mr-6 intro-line bg-primaryBrand'></div>
                     <p className='text-base font-medium text-white intro-text'>
                        Who am I
                     </p>
                  </div>

                  <p className='mt-6 text-base font-normal leading-loose aboutme-content text-greyText'>
                     I'm Oliver Cederborg, 23 years old and from Denmark. <br></br>Digital design has been an interest of mine for many years, and I work with anything from logo design to UI design and front-end development. <br></br>All the skills and tools I use, are self-taught over many years of practice and expanding my horizons.
                  </p>

                  <div id="skills" className='flex flex-row items-center mt-12'>
                     <div className='w-6 h-1 mr-6 intro-line bg-primaryBrand'></div>
                     <p className='text-base font-medium text-white intro-text'>
                        Skills &amp; Tools
                     </p>
                  </div>

                  <p className='mt-6 text-base font-normal leading-loose skills-content text-greyText'>
                     Design: Figma, Photoshop, Illustrator, After Effects
                  </p>
                  <p className='mt-2 text-base font-normal leading-loose skills-content text-greyText'>
                     Development: JavaScript, React, Next.js, HTML, CSS/SCSS, TailwindCSS, WordPress
                  </p>

                  <div className="about-cta">
                     <AnchorLink
								href='#connect'
								onClick={() => logEvent(`Get in touch`, `User clicked CTA on about section`)}
                        className='inline-flex w-auto px-8 py-4 text-base font-medium text-white duration-300 ease-in-out bg-primaryBrand hover:bg-primaryGrey mt-14'
                     >
                        Get in touch
                     </AnchorLink>
                  </div>
               </div>

               <div className='flex justify-end w-9/12 md:w-5/12'>
                  <img
                     id="about-img"
                     src='/images/about-oliver.webp'
                     alt='About Oliver Cederborg'
                     className='object-contain w-full h-full mt-20 pointer-events-none md:max-h-sm md:mt-30'
                  />
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutSection;