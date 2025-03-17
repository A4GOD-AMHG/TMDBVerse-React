const Hero = () => {
    return (
        <div className="hero relative flex items-center justify-center mb-5 group">
            <div className="absolute h-[180px] w-[130px] bg-red-400 transform -rotate-12 -translate-x-28 z-10 poster-card hover:z-30">
                <div className="absolute inset-0 transition-opacity rounded-lg" />
            </div>

            <div className="absolute h-[180px] w-[130px] bg-cyan-400 transform rotate-12 translate-x-28 z-10 poster-card hover:z-30">
                <div className="absolute inset-0 transition-opacity rounded-lg" />
            </div>

            <div className="relative h-[200px] w-[140px] bg-yellow-300 z-20 -translate-y-2 poster-card">
                <div className="absolute inset-0 transition-opacity rounded-lg" />
            </div>
        </div>
    );
};

export default Hero;