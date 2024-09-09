import Hero from "../../Hero/Hero";
import Banner from "../Banner/Banner";
import LatestProperties from "../LatestProperties/LatestProperties";
import Properties from "../Properties/Properties";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hero></Hero>
            <LatestProperties></LatestProperties>
            <Properties></Properties>
        </div>
    );
};

export default Home;