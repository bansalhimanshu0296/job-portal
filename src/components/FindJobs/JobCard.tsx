import { Divider, Text } from "@mantine/core"
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react"
import { Link } from "react-router";

interface JobCardData{
    jobTitle: string;
    organization: string;
    applicant: number;
    experience: string;
    jobType: string;
    location: string;
    package: string;
    postedDaysAgo: number;
    description: string;
}

const JobCard = (props: JobCardData) => {
    return <Link to="/job" className="bg-mine-shaft-900 p-4 w-80 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 
    transition duration-300 ease-in-out">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/icons/${props.organization}.png`} alt = {props.organization} />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">{props.organization} &#x2022; {props.applicant} Applicants</div>
                </div>
            </div>
            <IconBookmark className="text-mine-shaft-300 cursor-pointer" stroke={1.5}/>
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400
        [&>div]:rounded-lg text-xs">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text lineClamp={3} className="!text-xs text-justify text-mine-shaft-300">
            {props.description}
        </Text>
        <Divider size="xs" color="mineShaft.7" />
        <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">
                {props.package}
            </div>
            <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
                <IconClockHour3 className="h-5 w-5" stroke={1.5} /> {props.postedDaysAgo} days ago
            </div>
        </div>
    </Link>
}

export default JobCard