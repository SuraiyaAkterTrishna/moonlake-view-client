import mobile from "../../assets/images/mobile.png";
import PrimaryBtn from "../Shared/PrimaryBtn/PrimaryBtn";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-white lg:my-12 my:4">
        <div className="hero-content flex-col lg:flex-row">
          <img src={mobile} className=" rounded-lg" />
          <div className="ml-8">
            <h1 className="text-5xl font-bold">Newly-launched campaign in Whitby agencies</h1>
            <p className="py-6">
            Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors, Cherry Cabinets And New Bath And Complete Set Of Stainless Steel Appliances. Large 5 Bedrooms House With Seperate Living, Dinning And Office/Study Room. Must See To Appreciate.
            </p>
            <PrimaryBtn>Explore Now</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
