import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import WorkSlider from './workSlider';

const WorkSection = (props) => {
   useEffect(() => {
      if (typeof window !== "undefined") {
         gsap.registerPlugin(ScrollTrigger);
      }
      //work section timeline
      const workTl = gsap.timeline({
         scrollTrigger: {
            trigger: "#work .section-h2",
            start: "top bottom",
            end: "=-300",
         }
      });
      workTl.fromTo("#work .section-line", 1, {
         width: 0,
      }, {
         width: "4rem",
         ease: "power3.inOut"
      }).from("#work .section-category", 1.5, {
         x: -10,
         opacity: 0,
         stagger: 0.3,
         skewX: 3,
         delay: -0.5,
         ease: "power3.out"
      }).from(".work-h2", 1, {
         x: -70,
         opacity: 0,
         stagger: 0.3,
         skewX: 3,
         delay: -1.5,
         ease: "power3.out"
      });
   });

   return (
      <section
         id='work'
         className={'pt-26 pb-32 md:pt-32 md:pb-48 overflow-x-hidden' + (props.sectionNumber % 2 === 0 ? ' bg-backgroundTwo ' : ((props.sectionNumber % 2) != 0 ? ' bg-backgroundOne' : ''))}
      >
         <div className='container'>
            <div className='flex flex-row items-center'>
               <div className='w-16 h-1 mr-6 section-line bg-primaryBrand'></div>
               <p className='text-base font-medium section-category text-greyText'>Work</p>
            </div>

            <h2 className='mt-8 text-4xl font-semibold text-white section-h2 lg:text-secheader'>
               <div className="work-h2">Hand-picked projects</div>
               <div className="work-h2">for you to see.</div>
            </h2>
            <WorkSlider>

            </WorkSlider>
         </div>
      </section>
   );
};

export default WorkSection;