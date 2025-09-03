import { Divider, Indicator } from "@mantine/core"
import { IconBell, IconSettings } from "@tabler/icons-react"
import NavLinks from "./NavLinks"
import { useLocation } from "react-router"
import { paths } from "../../Paths"
import HeaderLogo from "./HeaderLogo"
import ProfileMenu from "./ProfileMenu"

const Header = () => {
    const location = useLocation();
    return(
        location.pathname !== '/signup' && location.pathname !== '/login' &&
        <>
            <div className="w-full bg-mine-shaft-950 font-['poppins'] px-6 text-white h-20 flex justify-between items-center">
                <HeaderLogo />
                <NavLinks/>
                <div className="flex gap-5 items-center">
                    <ProfileMenu />
                    <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                        <IconSettings stroke={1.5}/>
                    </div>
                    <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                        <Indicator color="brightSun.4" size={8} offset={6} processing>
                            <IconBell stroke={1.5}/>
                        </Indicator>
                    </div>
                </div>
            </div>
            {paths.includes(location.pathname) && <Divider size="xs" mx="md" />}
        </>
    )
}
export default Header