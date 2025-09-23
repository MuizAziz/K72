

const ProjectCards = (props) => {

  

  return (
    <>
      

          <div className='group relative lg:w-1/2 w- h-full rounded-none hover:rounded-[50px] overflow-hidden '>
          <img className='h-full w-full object-cover' src={props.image1} alt="" />
          <div className='absolute opacity-0 group-hover:opacity-100 flex items-center justify-center top-0 left-0 h-full w-full bg-black/50'>
            <h2 className='uppercase text-5xl font-[font1] border-3 text-white border-white pt-2 px-8 rounded-full'>vior le projet</h2>
          </div>
          </div>

          <div className='group relative lg:w-1/2 h-full rounded-none hover:rounded-[50px] overflow-hidden '>
          <img className='h-full w-full object-cover' src={props.image2} alt="" />
          <div className='absolute opacity-0 group-hover:opacity-100 flex items-center justify-center top-0 left-0 h-full w-full bg-black/50'>
            <h2 className='uppercase text-5xl font-[font1] border-3 text-white border-white pt-2 px-8 rounded-full'>vior le projet</h2>
          </div>
          </div>
        
    </>
  )
}

export default ProjectCards