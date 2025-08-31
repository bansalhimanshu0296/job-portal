import { Button } from "@mantine/core"
import { IconBookmark } from "@tabler/icons-react"
import { Link } from "react-router"

const ApplyJob = () => {
    return <div>
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-14" src={`/icons/Google.png`} alt="Google" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-2xl">Software Engineer</div>
                    <div className="text-lg text-mine-shaft-300">Google &bull; 3 days ago &bull; 48 Applicants</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply-job">
                    <Button color="brightSun.4" size="sm" variant="light">Apply</Button>
                </Link>
                <IconBookmark className="text-bright-sun-400 cursor-pointer" stroke={1.5}/>
            </div>
        </div>
    </div>
}

export default ApplyJob