import { Badge, Tabs } from "@mantine/core"
import JobDesc from "../JobDesc/JobDesc"

const PostedJobDesc = () => {
    return <div className="mt-5 px-5 w-3/4">
        <div className="text-2xl font-semibold flex items-center">
            Software Engineer
            <Badge variant="light" ml="sm" color="brightSun.4" size="sm">Badge</Badge>
        </div>
        <div className="font-medium text-mine-shaft-300 mb-5">New York, United States</div>
        <div>
            <Tabs variant="outline" radius="lg" defaultValue="overview">
                <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:!text-bright-sun-450">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="overview"><JobDesc /></Tabs.Panel>
                <Tabs.Panel value="applicants">f</Tabs.Panel>
                <Tabs.Panel value="invited">f</Tabs.Panel>
            </Tabs>
        </div>
    </div>
}

export default PostedJobDesc