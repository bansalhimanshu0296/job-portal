import { Button, Divider, Text } from "@mantine/core"
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react"
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
    applied?: boolean;
    saved?: boolean;
    offered?: boolean;
    interviewing?: boolean;
}

const JobCard = (props: JobCardData) => {
    return <Link to="/job" className="bg-mine-shaft-900 p-4 w-80 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-450 
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
            {props?.saved ? <IconBookmarkFilled className="text-bright-sun-450 cursor-pointer" stroke={1.5}/> : <IconBookmark className="text-mine-shaft-300 cursor-pointer" stroke={1.5}/> }
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-450
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
                <IconClockHour3 className="h-5 w-5" stroke={1.5} />
                {props?.applied ? 'Applied' : props?.offered ? 'Interviewed' : 'Posted'} {props.postedDaysAgo} days ago
            </div>
        </div>
        {
            (props?.offered || props?.interviewing) && <Divider color="mineShaft.7" size="xs" />
        }
        {
            props?.offered && 
                <div className="flex gap-2">
                    <Button color="brightSun.4" variant="outline" fullWidth>Accept</Button>
                    <Button color="brightSun.4" variant="light" fullWidth>Reject</Button>
                </div>
        }
        {
            props?.interviewing && <div className="flex gap-1 text-sm items-center">
                <IconCalendarMonth className="text-bright-sun-450 w-5 h-5" stroke={1.5} />
                Sun, 27 August &bull; <span className="text-mine-shaft-400">10:00 AM</span>
            </div>
        }
    </Link>
}

export default JobCard