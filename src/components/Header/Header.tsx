import { Avatar, Indicator } from "@mantine/core"
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react"
import NavLinks from "./NavLinks"
import { Link } from "react-router"

const Header = () =>{
    return(
        <div className="w-full bg-mine-shaft-950 font-['poppins'] px-6 text-white h-20 flex justify-between items-center">
            <Link to="/" className="flex gap-1 text-bright-sun-450">
                <IconAnchor className="h-8 w-8" stroke={2.5} />
                <div className="text-3xl font-semibold">JobHook</div>
            </Link>
            <NavLinks/>
            <div className="flex gap-5 items-center">
                <div className="flex items-center gap-3">
                    <div>
                        Himanshu
                    </div>
                    <Avatar src="avatar.png" alt="it's me" />
                </div>
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
    )
}
export default Header