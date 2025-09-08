import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { footerLinks } from "../../data/Data";
import { useLocation } from "react-router";

const Footer = () => {
    const location = useLocation();
    return location.pathname !== '/signup' && location.pathname !== '/login' && <div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">
        <div className="w-1/4 flex flex-col gap-4">
            <div className="flex gap-1 items-center text-bright-sun-450">
                <IconAnchor className="h-6 w-6" stroke={2.5} />
                <div className="text-3xl font-semibold">JobHook</div>
            </div>
            <div className="text-sm text-mine-shaft-300">
                Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
            </div>
            <div className="flex gap-3 text-bright-sun-450 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full
            [&>div]:cursor-pointer">
                <div className="hover:bg-mine-shaft-700"><IconBrandFacebook /></div>
                <div className="hover:bg-mine-shaft-700"><IconBrandInstagram /></div>
                <div className="hover:bg-mine-shaft-700"><IconBrandX /></div>
            </div>
        </div>
        {
            footerLinks.map((link, index) => <div key={index}>
                <div className="text-lg font-semibold mb-4 text-bright-sun-450">{link.title}</div>
                {
                    link.links.map((item, index) => <div key={index} className="text-mine-shaft-300 text-sm
                    hover:text-bright-sun-450 cursor-pointer mb-1 hover:translate-x-2 transition duration-300
                    ease-in-out">
                        {item}
                    </div>)
                }
            </div>)
        }
    </div>
    
}
export default Footer;