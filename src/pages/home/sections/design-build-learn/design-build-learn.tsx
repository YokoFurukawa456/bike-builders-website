import "@/pages/home/home.css";
import "@/pages/home/sections/design-build-learn/design-build-learn.css";
import {dbl_left, dbl_right} from "@/assets/home";

function DesignBuildLearnSection() {
  return (
    <section className="dbl-section">
      <h2 className="dbl-title">Design, Build, Learn</h2>
      <p className="dbl-description">
        We design, build, and test all things bikes with a focus on creating frames from scratch.
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="dbl-images">
        <img src={dbl_left} alt="" className="dbl-image" />
        <img src={dbl_right} alt="" className="dbl-image" />
      </div>
    </section>
  );
}

export default DesignBuildLearnSection;
