import Video from '../components/Home/Video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'

const Home = () => {
  return (
    <>
    <div className='fixed h-screen w-screen'>
      <Video/>
      </div>    

      <div className='relative h-screen w-screen flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </>
  )
}

export default Home