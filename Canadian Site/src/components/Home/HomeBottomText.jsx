import { Link } from "react-router-dom";


const HomeBottomText = () => {
  return (
    <>
    <div className='font-[font2] flex justify-center items-center gap-2'>
        <div className="border-1 hover:border-[#D3FD50] hover:text-[#D3FD50] text-white flex items-center px-5 border-white rounded-full uppercase">
             <Link className="text-[5.5vw] mt-6]" to='/Projects'>Projects</Link>
        </div>
        <div className="border-1 hover:border-[#D3FD50] hover:text-[#D3FD50] text-white  flex items-center px-5 border-white rounded-full uppercase">
            <Link className="text-[5.5vw] mt-6]" to='/agence'>Agence</Link>
        </div>
       
        
    </div>
    </>
  )
}

export default HomeBottomText