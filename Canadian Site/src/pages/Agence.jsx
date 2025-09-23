import { useRef } from "react";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from "gsap";

const Agence = () => {

  const imageDivRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  const imageRef = useRef(null)

  const imageArray = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg',
    '/images/image9.jpg',
    '/images/image10.jpg',
    '/images/image11.jpg',
    '/images/image12.jpg',
    '/images/image13.jpg',
    '/images/image14.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: 'top 0%',
        end: 'top -130%',
        scrub: 1,
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate: (elem) => {
          let imageIndex
        if (elem.progress<1) {
          imageIndex =   Math.floor(elem.progress * imageArray.length) // 1 to 14
        } else {
          imageIndex = imageArray.length - 1
        }

        imageRef.current.src = imageArray[imageIndex]

        }
      }
    })
  })

  return (
    <>
   <div>
     <div className="section1 py-1">
      <div ref={imageDivRef} className="absolute lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] overflow-hidden lg:top-40 top-40 lg:left-[30vw] lg:rounded-3xl rounded-xl left-[30vw]">
        <img ref={imageRef} className="h-full w-full object-cover" src="\images\image1.jpg" alt="" />
      </div>
      <div className="relative font-[font2]">
        <div className="lg:mt-[55vh] mt-30">
          <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
            Soixan7e <br />
            Douze
          </h1>
        </div>
        <div className="lg:pl-[40%] lg:mt-10 p-3 mt-4">
          <p className="lg:text-5xl leading-tight text-[2xl]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
            curiosité nourrit notre créativité. On reste humbles et on dit non
            aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>
    </div>
    <div className="section2 h-screen">
      
    </div>
   </div>
   </>
  );
};

export default Agence;
