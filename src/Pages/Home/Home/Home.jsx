import Hero from "../../Hero/Hero";
import Properties from "../../Properties/Properties";
import Banner from "../Banner/Banner";
import LatestProperties from "../LatestProperties/LatestProperties";



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