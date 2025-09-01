import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconBookmark } from "@tabler/icons-react"
import { Link } from "react-router"
import { card, desc, skills } from "../../data/JobDescData"
import DOMPurify from 'dompurify'

const JobDesc = () => {
    const data = DOMPurify.sanitize(desc)
    return <div className="w-2/3">
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
        <Divider my='xl' />
        <div className="flex justify-between">
            {
                card.map((item: any, index: number) =>
                    <div key={index} className="flex flex-col items-center gap-1">
                        <ActionIcon className="!h-12 !w-12" variant="light" size="lg" radius="xl" aria-label="Settings" color="brightSun.4">
                            <item.icon stroke={1.5} className="w-4/5 h-4/5"/>
                        </ActionIcon>
                        <div className="text-mine-shaft-300 text-sm">{item.name}</div>
                        <div className="font-semibold">{item.value}</div>
                    </div>
                )
            }
        </div>
        <Divider my='xl' />
        <div>
            <div className="text-xl font-semibold mb-5">Required Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    skills.map((skill: string, index: number) =>
                        <ActionIcon key={index} className="!h-fit !w-fit font-medium !text-sm" variant="light" size="lg" p="xs" radius="xl" aria-label="Settings" color="brightSun.4">
                            {skill}
                        </ActionIcon>
                    )
                }
            </div>
        </div>
        <Divider my='xl' />
        <div className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_*]:text-mine-shaft-300 [&_h4]:text-mine-shaft-200 [&_p]:text-justify 
        [&_li]:marker:text-bright-sun-400 [&_li]:mb-1" dangerouslySetInnerHTML={{ __html: data }}>
        </div>
        <Divider my='xl' />
        <div>
            <div className="text-xl font-semibold mb-5">About Company</div>
            <div className="flex justify-between mb-3">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="h-8" src={`/icons/Google.png`} alt="Google" />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-medium text-lg">Google</div>
                        <div className="text-mine-shaft-300">10K+ Employees</div>
                    </div>
                </div>
                <Link to="/company-page">
                    <Button color="brightSun.4" variant="light">Company Page</Button>
                </Link>
            </div>
            <div className="text-mine-shaft-300 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas dignissim tempus. Morbi a erat eget justo elementum rutrum ac ut eros. Vestibulum id quam metus. Morbi hendrerit vestibulum pulvinar. Mauris fermentum est libero, eget fermentum risus rhoncus eget. Donec ante enim, rutrum a aliquet vitae, accumsan viverra enim. Etiam est mi, auctor non sem in, rhoncus lobortis purus. Integer convallis ultricies eros id viverra. Praesent efficitur imperdiet sodales. Nam id sem ac dui scelerisque laoreet. Donec mattis ex vel metus vehicula cursus. Donec non ullamcorper erat, in pretium ante. Fusce id arcu molestie, bibendum sem sed, eleifend eros. Maecenas placerat quam diam, vel fringilla urna maximus sit amet.

Maecenas at mauris at felis tristique sagittis non ac nunc. Mauris quis lectus nisl. Ut et purus aliquet, ullamcorper dui volutpat, dictum justo. Morbi ut egestas mi. Aenean a bibendum sem, laoreet hendrerit lectus. Nunc eleifend felis et lobortis scelerisque. Proin at molestie dolor, blandit posuere diam. Mauris sagittis eu augue pharetra venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam accumsan diam in ligula venenatis elementum nec vitae orci. Nullam mauris augue, placerat et vulputate vitae, bibendum ut nunc. Maecenas at justo in neque posuere congue et non ex. Donec dictum nec ligula in porttitor. Etiam at eleifend massa.
                </div>
        </div>
    </div>
}

export default JobDesc