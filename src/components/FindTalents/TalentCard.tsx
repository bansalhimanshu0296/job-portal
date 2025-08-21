import { Avatar, Button, Divider, Text } from "@mantine/core"
import { IconHeart, IconMapPin } from "@tabler/icons-react"
import { Link } from "react-router";

interface JobCardData{
    name: string;
    company: string;
    role: string;
    topSkills: string[];
    image: string;
    about: string;
    location: string;
    expectedCtc: string;
}

const TalentCard = (props: JobCardData) => {
    return <div className="bg-mine-shaft-900 p-4 w-110 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400
    transition duration-300 ease-in-out">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-full">
                    <Avatar size="lg" src={`/${props?.image}.png`} alt = {props?.name} />
                </div>
                <div>
                    <div className="font-semibold">{props?.name}</div>
                    <div className="text-xs text-mine-shaft-300">{props?.role} &bull; {props?.company}</div>
                </div>
            </div>
            <IconHeart className="text-mine-shaft-300 cursor-pointer" />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400
        [&>div]:rounded-lg text-xs">
            {
                props?.topSkills?.map((skill, index) => <div key={index}>
                    {skill}
                </div>)
            }
        </div>
        <Text lineClamp={3} className="!text-xs text-justify text-mine-shaft-300">
            {props?.about}
        </Text>
        <Divider size="xs" color="mineShaft.7" />
        <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">
                {props?.expectedCtc}
            </div>
            <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
                <IconMapPin className="h-5 w-5" stroke={1.5} /> {props?.location}
            </div>
        </div>
        <Divider size="xs" color="mineShaft.7" />
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            <Link to="/talent-profile">
                <Button variant="outline" color="brightSun.4" fullWidth>Profile</Button>
            </Link>
            <div>
                <Button variant="light" color="brightSun.4" fullWidth>Message</Button>
            </div>
        </div>
    </div>
}

export default TalentCard