import { Avatar, Divider, Tabs } from "@mantine/core"
import { IconMapPin } from "@tabler/icons-react"
import AboutOrg from "./AboutOrg"
import OrgJobs from "./OrgJobs"
import OrgEmployees from "./OrgEmployees"

const Organization = () => {
    return <div className="w-3/4">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="banner" />
            <img className="rounded-3xl w-36 h-36 -bottom-1/4 absolute p-2 left-5 border-mine-shaft-950 border-8 bg-mine-shaft-950" src="/icons/Google.png" alt="Google" />
        </div>
        <div className="px-3 mt-12">
            <div className="text-3xl font-semibold flex justify-between">
                Google
                <Avatar.Group>
                    <Avatar src="avatar.png"/>
                    <Avatar src="avatar1.png"/>
                    <Avatar src="avatar2.png"/>
                    <Avatar>+10k</Avatar>
                </Avatar.Group>
            </div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                <IconMapPin className="h-5 w-5" stroke={1.5} /> New York, United States   
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="about">
                <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:!text-bright-sun-450">
                    <Tabs.Tab value="about">About</Tabs.Tab>
                    <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                    <Tabs.Tab value="employees">Employees</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="about"><AboutOrg /></Tabs.Panel>
                <Tabs.Panel value="jobs"><OrgJobs /></Tabs.Panel>
                <Tabs.Panel value="employees"><OrgEmployees /></Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default Organization