const Hero = () => {
    return (
        <div className="hero relative flex items-center justify-center mb-5">
            <div className="absolute h-[180px] w-[130px] rounded-lg bg-red-400 transform -rotate-12 -translate-x-28 z-10"></div>
            <div className="absolute h-[180px] w-[130px] rounded-lg bg-cyan-400 transform rotate-12 translate-x-28 z-10"></div>
            <div className="relative h-[200px] w-[140px] rounded-lg bg-yellow-300 z-20 -translate-y-2 shadow-lg"></div>
        </div>
    );
};

export default Hero;