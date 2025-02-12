import Hero from "../components/Hero"
import NewCollection from "../components/NewCollection"
import Offers from "../components/Offers"
import Services from "../components/Services"
import TrendingNow from "../components/TrendingNow"
const Home = () => {
    return (
        <div>
            <Hero/>
            <NewCollection/>
            <TrendingNow/>
            <Offers/>
            <Services/>
        </div>
    )
}

export default Home