import { Link } from "react-router-dom";


const HomeBottomText = () => {
  return (
    <>
    <div className='font-[font2] flex justify-center items-center gap-2'>
        <div className="border-1 hover:border-[#D3FD50] hover:text-[#D3FD50] text-white flex items-center px-4 pt-1 lg:px-4 border-white rounded-full uppercase">
             <Link className="text-[5.5vw] lg:mt-5 leading-[4vw]" to='/Projects'>Projects</Link>
        </div>
        <div className="border-1 hover:border-[#D3FD50] hover:text-[#D3FD50] text-white  flex items-center px-4 pt-1 lg:px-4 border-white rounded-full uppercase">
            <Link className="text-[5.5vw] lg:mt-5 leading-[4vw]" to='/agence'>Agency</Link>
        </div> 
       
        
    </div>
    </>
  )
}

export default HomeBottomText