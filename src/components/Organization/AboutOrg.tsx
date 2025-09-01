import { organizationData } from "../../data/Organization"

const AboutOrg = () => {
    const organizationInfo: { [key: string]: any } = organizationData;
    return <div className="flex flex-col gap-5">
        {
            Object.keys(organizationInfo).map((key, index) => key !== 'Name' && <div key={index}>
                <div className="text-xl font-semibold mb-3">{key}</div>
                {key !== 'Website' &&
                    <div className="text-sm text-justify text-mine-shaft-300">
                        {
                            key !== 'Specialties' ? organizationInfo[key] : 
                                organizationInfo[key].map((item: string, index: number) =>
                                    <span key={index}> &bull; {item}</span>
                            )
                        }
                    </div>
                }
                {key === 'Website' &&
                    <a className="text-sm text-justify text-bright-sun-450" href={organizationInfo[key]}
                    target="_blank">
                        {organizationInfo[key]}
                    </a>
                }
            </div>)
        }
    </div>
}

export default AboutOrg