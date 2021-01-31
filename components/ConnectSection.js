import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaTwitter, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { logEvent } from "../utils/analytics";

import ContactForm from "./ContactForm";

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
         <div className='pb-36 md:pb-48 container'>
            <div className='flex flex-row items-center'>
               <div className='section-line bg-primaryBrand w-16 h-1 mr-6'></div>
               <p className='section-category text-greyText text-base font-medium'>Connect</p>
            </div>

            <h2 className='lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white'>
               <div className="connect-h2">Interested in working with me</div>
               <div className="connect-h2">or perhaps just talk?</div>
            </h2>

            <p className='connect-content text-greyText mt-6 text-base font-normal leading-loose'>
               Reach me on social media or by sending an<br></br> email to <a href="mailto:hey@olivercederborg.com?subject=Contact from olivercederborg.com&amp;body=Hey Oliver, I'm contacting you because..." target="_blank" onClick={() => logEvent("Contact me", "Email link clicked")} className="text-primaryBrand border-b-1 border-backgroundTwo hover:border-primaryBrand duration-200 ease-in-out">hey@olivercederborg.com</a>
            </p>

            <div className="connect-cta">
               {/* <a
                  href="mailto:hey@olivercederborg.com?subject=Contact from olivercederborg.com&amp;body=Hey Oliver, I'm contacting you because..."
                  onClick={() => logEvent("Contact me", "Contact me button clicked")}
                  className='bg-primaryBrand hover:bg-primaryGrey inline-flex w-auto px-8 py-4 mt-12 text-base font-medium text-white duration-300 ease-in-out'
               >
                  Drop an email
						</a> */}
            </div>

            <ContactForm></ContactForm>
         </div>
         <footer className='md:flex-row lg:items-center container flex flex-col-reverse items-center justify-between pb-10 text-gray-600'>
            <p className='hover:text-greyText md:mb-0 mb-5 duration-300 ease-in-out'>
               &copy; 2020 Oliver Cederborg
					</p>

            <div className='md:mb-0 flex flex-row mb-10 text-white'>
               <a
                  href='https://dribbble.com/oliver'
                  target='_blank'
                  className='bg-primaryGrey hover:bg-primaryBrand p-4 mx-1 text-xl duration-300 ease-in-out'
               >
                  <FaDribbble />
               </a>
               <a
                  href='https://twitter.com/olivercederborg'
                  target='_blank'
                  className='bg-primaryGrey hover:bg-primaryBrand p-4 mx-1 text-xl duration-300 ease-in-out'
               >
                  <FaTwitter />
               </a>
               <a
                  href='https://instagram.com/olivercederborg'
                  target='_blank'
                  className='bg-primaryGrey hover:bg-primaryBrand p-4 mx-1 text-xl duration-300 ease-in-out'
               >
                  <FaInstagram />
               </a>
               <a
                  href='https://www.linkedin.com/in/olivercederborg'
                  target='_blank'
                  className='bg-primaryGrey hover:bg-primaryBrand p-4 mx-1 text-xl duration-300 ease-in-out'
               >
                  <FaLinkedin />
               </a>
            </div>
         </footer>
      </section>
   )
}

export default ConnectSection;
