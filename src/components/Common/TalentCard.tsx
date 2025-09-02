import { Avatar, Button, Divider, Modal, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react"
import { Link } from "react-router";
import { DateInput, TimeInput } from '@mantine/dates';
import { useRef, useState } from "react";
import dayjs from "dayjs";

interface JobCardData{
    name: string;
    organization: string;
    role: string;
    topSkills: string[];
    image: string;
    about: string;
    location: string;
    expectedCtc: string;
    posted?: boolean;
    invited?: boolean;
}

const TalentCard = (props: JobCardData) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<string | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    return <div className="bg-mine-shaft-900 p-4 w-110 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-450
    transition duration-300 ease-in-out">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-full">
                    <Avatar size="lg" src={`/${props?.image}.png`} alt = {props?.name} />
                </div>
                <div>
                    <div className="font-semibold">{props?.name}</div>
                    <div className="text-xs text-mine-shaft-300">{props?.role} &bull; {props?.organization}</div>
                </div>
            </div>
            <IconHeart className="text-mine-shaft-300 cursor-pointer" />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-450
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
        {
            props?.invited ?
            <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
                <IconCalendarMonth stroke={1.5} />Interview: August 27, 2025 10:00 AM
            </div> :
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">
                    {props?.expectedCtc}
                </div>
                <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
                    <IconMapPin className="h-5 w-5" stroke={1.5} /> {props?.location}
                </div>
            </div>
        }
        
        <Divider size="xs" color="mineShaft.7" />
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            {!props?.invited &&
                <>
                    <Link to="/talent-profile">
                        <Button variant="outline" color="brightSun.4" fullWidth>Profile</Button>
                    </Link>
                    <div>
                        {
                            props?.posted ?
                                <Button rightSection={<IconCalendarMonth className="w-5 h-5" />}
                                    variant="light" color="brightSun.4" fullWidth onClick={open}>
                                    Schedule
                                </Button>
                                : <Button variant="light" color="brightSun.4" fullWidth>Message</Button>
                        }
                    </div>
                </>
            }
            {
                props?.invited &&
                <>
                    <div>
                        <Button variant="outline" color="brightSun.4" fullWidth>Accept</Button>
                    </div>
                    <div>
                        <Button variant="light" color="brightSun.4" fullWidth>Reject</Button>
                    </div>
                </>
            }
        </div>
        <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
            <div className="flex flex-col gap-4">
                <DateInput value={value} onChange={setValue} label="Date" placeholder="Enter Date"
                    minDate={dayjs().add(7, 'days').format('YYYY-MM-DD')} />
                <TimeInput label="Time" ref={ref}
                    onClick={() => ref?.current?.showPicker()} />
                <Button variant="light" color="brightSun.4" fullWidth>Schedule</Button>
            </div>
        </Modal>
    </div>
}

export default TalentCard