import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaTwitter, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { logEvent } from "../utils/analytics"

const ConnectSection = (props) => {
   useEffect(() => {
      if (typeof window !== "undefined") {
         gsap.registerPlugin(ScrollTrigger);
      }
      //Connect section
      const connectTl = gsap.timeline({
         scrollTrigger: {
            trigger: "#connect",
            start: "center bottom",
            end: "=-300",
         }
      });
      connectTl.fromTo("#connect .section-line", 1, {
         width: 0,
      }, {
         width: "4rem",
         ease: "power3.inOut"
      }).from("#connect .section-category", 1.5, {
         x: -10,
         opacity: 0,
         stagger: 0.3,
         delay: -0.5,
         ease: "power3.out"
      }).from(".connect-h2", 1, {
         x: -70,
         opacity: 0,
         stagger: 0.3,
         skewX: 3,
         delay: -1.5,
         ease: "power3.out"
      }).from(".connect-content", 1, {
         y: -20,
         opacity: 0,
         stagger: 0.3,
         delay: -0.75,
         ease: "power3.out"
      }).from("#connect .connect-cta", 1, {
         y: -20,
         opacity: 0,
         stagger: 0.3,
         delay: -0.75,
         ease: "power3.out"
      });

      //footer section
      const footerTl = gsap.timeline({
         scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            end: "=-300",
         }
      });
      footerTl.from("footer", 1.5, {
         y: -30,
         opacity: 0,
         ease: "power3.inOut"
      });
   })

   return (
      <section
         id='connect'
         className={'pt-26 md:pt-32 pb-14 md:pb-0 overflow-x-hidden' + (props.sectionNumber % 2 === 0 ? ' bg-backgroundTwo ' : ((props.sectionNumber % 2) != 0 ? ' bg-backgroundOne' : ''))}
      >
         <div className='container pb-36 md:pb-48'>
            <div className='flex flex-row items-center'>
               <div className='w-16 h-1 mr-6 section-line bg-primaryBrand'></div>
               <p className='text-base font-medium section-category text-greyText'>Connect</p>
            </div>

            <h2 className='mt-8 text-4xl font-semibold text-white lg:text-secheader'>
               <div className="connect-h2">Interested in working with me</div>
               <div className="connect-h2">or perhaps just talk?</div>
            </h2>

            <p className='mt-6 text-base font-normal leading-loose connect-content text-greyText'>
               Reach me on social media or by sending an<br></br> email to <a href="mailto:hey@olivercederborg.com?subject=Contact from olivercederborg.com&amp;body=Hey Oliver, I'm contacting you because..." target="_blank" onClick={() => logEvent("Contact me", "Email link clicked")} className="duration-200 ease-in-out text-primaryBrand border-b-1 border-backgroundTwo hover:border-primaryBrand">hey@olivercederborg.com</a>
            </p>

            <div className="connect-cta">
               <a
                  href="mailto:hey@olivercederborg.com?subject=Contact from olivercederborg.com&amp;body=Hey Oliver, I'm contacting you because..."
                  onClick={() => logEvent("Contact me", "Contact me button clicked")}
                  className='inline-flex w-auto px-8 py-4 mt-12 text-base font-medium text-white duration-300 ease-in-out bg-primaryBrand hover:bg-primaryGrey'
               >
                  Drop an email
						</a>
            </div>
         </div>
         <footer className='container flex flex-col-reverse items-center justify-between pb-10 text-gray-600 md:flex-row lg:items-center'>
            <p className='mb-5 duration-300 ease-in-out hover:text-greyText md:mb-0'>
               &copy; 2020 Oliver Cederborg
					</p>

            <div className='flex flex-row mb-10 text-white md:mb-0'>
               <a
                  href='https://dribbble.com/oliver'
                  target='_blank'
                  className='p-4 mx-1 text-xl duration-300 ease-in-out bg-primaryGrey hover:bg-primaryBrand'
               >
                  <FaDribbble />
               </a>
               <a
                  href='https://twitter.com/olivercederborg'
                  target='_blank'
                  className='p-4 mx-1 text-xl duration-300 ease-in-out bg-primaryGrey hover:bg-primaryBrand'
               >
                  <FaTwitter />
               </a>
               <a
                  href='https://instagram.com/olivercederborg'
                  target='_blank'
                  className='p-4 mx-1 text-xl duration-300 ease-in-out bg-primaryGrey hover:bg-primaryBrand'
               >
                  <FaInstagram />
               </a>
               <a
                  href='https://www.linkedin.com/in/olivercederborg'
                  target='_blank'
                  className='p-4 mx-1 text-xl duration-300 ease-in-out bg-primaryGrey hover:bg-primaryBrand'
               >
                  <FaLinkedin />
               </a>
            </div>
         </footer>
      </section>
   )
}

export default ConnectSection;