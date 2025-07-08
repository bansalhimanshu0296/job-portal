import Header from "../../components/Header/Header"
import Organizations from "../../components/LandingPage/Organizations"
import DreamJob from "../../components/LandingPage/DreamJob"
import JobCategories from "../../components/LandingPage/JobCategories"
import Working from "../../components/LandingPage/Working"
import Testimonials from "../../components/LandingPage/Testimonials"
import Subscribe from "../../components/LandingPage/Subscribe"
import Footer from "../../components/Footer/Footer"

const HomePage = () =>{

    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Header />
            <DreamJob />
            <Organizations />
            <JobCategories />
            <Working />
            <Testimonials />
            <Subscribe />
            <Footer />
        </div>
    )
}
export default HomePage