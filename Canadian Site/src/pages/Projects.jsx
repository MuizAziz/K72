import ProjectCards from '../components/Projects/ProjectCards'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from "gsap";

const Projects = () => {

    const projects = [{
        image1: '/images/projects1.png',
        image2: '/images/projects2.jpg'
    }, {
         image1: '/images/projects3.jpg',
        image2: '/images/projects4.jpg'
    }, {
         image1: '/images/projects5.jpg',
        image2: '/images/projects6.jpg'
    }, {
         image1: '/images/projects7.jpg',
        image2: '/images/projects8.jpg'
    }, {
         image1: '/images/projects9.jpg',
        image2: '/images/projects10.jpg'
    }, {
         image1: '/images/projects11.jpg',
        image2: '/images/projects12.jpg'
    }, {
         image1: '/images/projects13.jpg',
        image2: '/images/projects6.jpg'
    }]

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
      gsap.from('.hero' , {
        height:'100px',
        stagger:{
          amount:0.4
        },
        scrollTrigger:{
          trigger:'.lol',
          start:'top 100%',
          end:'top -150%',
          scrub:true
        }
      })
    })

//     gsap.registerPlugin(ScrollTrigger);

// useGSAP(() => {
//   gsap.utils.toArray(".hero").forEach((card, i) => {
//     gsap.from(card, {
//       height: 0,             // stacked (flat) look
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: card,
//         start: "top 80%",    // when card enters viewport
//         end: "top 50%",      // finish animation halfway in viewport
//         scrub: true,
//         markers: true
//       }
//     });
//   });
// });


  return (
    <>
    <div className='lg:p-4 p-2'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>


      <div className='-lg:mt-14 lol'>

      {projects.map(function(elem , idx ){
    return <div key={idx} className='hero w-full lg:h-[400px] mb-4 flex lg:flex-row flex-col  lg:gap-4 gap-2'>
    <ProjectCards image1={elem.image1} image2={elem.image2} />  
    </div>
})}

      </div>


    </div>
    </>
  )
}

export default Projects