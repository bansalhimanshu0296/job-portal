import Marquee from "react-fast-marquee";
import { organizations } from '../../data/Data';

const Organizations = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-10">
            Trusted By <span className="text-bright-sun-450">1000+</span> Companies
        </div>
        <Marquee pauseOnHover={true}>
            {
                organizations.map((organization, index)=><div key={index} className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl">
                        <img className="h-14" src={`/organizations/${organization}.png`} alt={organization} />
                </div>
                )
            }
        </Marquee>
    </div>
    
}

export default Organizations;