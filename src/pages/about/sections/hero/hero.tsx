import "@/pages/about/sections/hero/hero.css";
import {hero1, hero2, hero3, hero4, hero5} from "@/assets/about";

function HeroSection() {
  return (
    <div className="hero-wrapper">
        <div className="hero-section">
            <div className="left">
                <h1>
                    ABOUT US
                </h1>
                <div className="photos">
                    <div className="photo1">
                        <img src={hero1} alt=""/>
                    </div>
                        <div className="photo2">
                            <img src={hero2} alt=""/>
                        </div>
                        <div className="photo3">
                            <img src={hero3} alt=""/>
                        </div>
                        <div className="photo4">
                            <img src={hero4} alt=""/>
                        </div>
                        <div className="photo5">
                            <img src={hero5} alt=""/>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
  );
}

export default HeroSection;
