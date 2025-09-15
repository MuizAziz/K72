import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font2] pt-2 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw] text-white flex items-center justify-center">L'étincelle</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] text-white flex items-start justify-center">
        qui
        <div className="h-[7vw] w-[16vw] overflow-hidden text-white rounded-full">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] text-white flex items-center justify-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
