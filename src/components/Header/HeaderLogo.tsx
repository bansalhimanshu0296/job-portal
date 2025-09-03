import { IconAnchor } from "@tabler/icons-react"
import { Link } from "react-router"

interface Props{
    isAuthentication?: boolean;
}

const HeaderLogo = (props: Props) => {
    return <Link to="/" className="flex gap-1 text-bright-sun-450 items-center cursor-pointer">
        <IconAnchor className={`${props?.isAuthentication ? "h-14 w-14" : "h-8 w-8"}`} stroke={2.5} />
        <div className={`${props?.isAuthentication ? "text-6xl" : "text-3xl"} font-semibold`}>JobHook</div>
    </Link>
}

export default HeaderLogo