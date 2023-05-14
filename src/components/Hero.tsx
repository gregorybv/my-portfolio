// Main component
import photo from "../assets/image/photo.jpg"
import HeroLink from "./UI/HeroLink"
import HeroAnimation from "./UI/HeroAnimation"
import HeroTitle from "./UI/HeroTitle"

const Hero: React.FC = () => {

  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover object-left scale-x-[-1]'
        src={photo}
        alt='/'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          {/* plugging in the component HeroTitle */}
          <HeroTitle />
          {/* plugging in the component HeroAnimation */}
          <HeroAnimation />
          {/* plugging in the component HeroLink */}
          <HeroLink />
        </div>
      </div>
    </div>
  )
}

export default Hero
