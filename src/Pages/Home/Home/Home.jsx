import Hero from "../../Hero/Hero";
import Banner from "../Banner/Banner";
import LatestProperties from "../LatestProperties/LatestProperties";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hero></Hero>
            <LatestProperties></LatestProperties>
        </div>
    );
};

export default Home;