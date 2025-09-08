import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core"
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react"
import ExpCard, { type experienceData } from "./ExpCard"
import CertiCard, { type certificationData } from "./CertiCard"
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../../data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

interface ProfileData{
    name: string;
    role: string;
    organization: string;
    location: string;
    about: string;
    skills: string[];
    experience: experienceData[];
    certifications: certificationData[]; 
}


const Profile = (props: ProfileData) => {
    const select = fields;
    const [edit, setEdit] = useState<boolean[]>([false, false, false, false, false]);
    const [skills, setSkills] = useState<string[]>(props?.skills);
    const [about, setAbout] = useState<string>(props?.about);
    const [addExp, setAddExp] = useState<boolean>(false);
    const [addCerti, setAddCerti] = useState<boolean>(false);
    const experience = {} as experienceData;
    const handleEdit = (contentIndex: number) => {
        const newEdit = [...edit]
        newEdit[contentIndex] = !newEdit[contentIndex];
        setEdit(newEdit);
    }
    return <div className="w-4/5 mx-auto">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="banner" />
            <img className="rounded-full w-48 h-48 -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" src="/avatar.png" alt="avatar" />
        </div>
        <div className="px-3 mt-20">
            <div className="text-3xl font-semibold flex justify-between">
                {props?.name}
                <ActionIcon color="brightSun.4" variant="subtle" size="lg" onClick={()=>handleEdit(0)}>
                    {edit[0] ?
                        <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> :
                        <IconPencil className="w-4/5 h-4/5" stroke={1.5} />
                        
                    }
                </ActionIcon>
            </div>
            {
                edit[0] ? <>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <SelectInput {...select[0]} />
                        <SelectInput {...select[1]} />
                    </div>
                    <SelectInput {...select[2]} />
                </> : <>
                    <div className="text-xl flex gap-1 items-center">
                        <IconBriefcase className="h-5 w-5" stroke={1.5} />
                        {props?.role} &bull; {props?.organization}
                    </div>
                    <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                        <IconMapPin className="h-5 w-5" stroke={1.5} /> {props?.location}    
                    </div> 
                </>
            }
            
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex justify-between">
                About <ActionIcon color="brightSun.4" variant="subtle" size="lg" onClick={()=>handleEdit(1)}>
                    {edit[1] ?
                        <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> :
                        <IconPencil className="w-4/5 h-4/5" stroke={1.5} />
                        
                    }
                </ActionIcon>
            </div>
            {edit[1] ? 
                <Textarea value={about} onChange={(e) => setAbout(e.target.value)}
                    autosize minRows={3} placeholder="Enter about yourself..."/> :
                <div className="text-sm text-mine-shaft-300 text-justify">
                    {about}
                </div>
            }
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-3 flex justify-between">
                Skills <ActionIcon color="brightSun.4" variant="subtle" size="lg" onClick={()=>handleEdit(2)}>
                    {edit[2] ?
                        <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> :
                        <IconPencil className="w-4/5 h-4/5" stroke={1.5} />
                        
                    }
                </ActionIcon>
            </div>
            {
                edit[2] ?
                    <TagsInput placeholder="Add a Skill" splitChars={[",", " ", "|"]}
                        value={skills} onChange={setSkills} /> : 
                    <div className="flex flex-wrap gap-2">
                        {skills?.map((skill, index) =>
                            <div className="bg-bright-sun-300/15 text-sm font-medium rounded-3xl text-bright-sun-450 px-3 py-1" key={index}>
                                {skill}
                            </div>
                        )}
                    </div>
            }
            
            
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-4 flex justify-between">
                Experience <div className="flex gap-2">
                    <ActionIcon color="brightSun.4" variant="subtle" size="lg" onClick={() => setAddExp(true)}>
                        <IconPlus className="w-4/5 h-4/5" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon color="brightSun.4" variant="subtle" size="lg" onClick={() => handleEdit(3)}>
                        {edit[3] ?
                            <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> :
                            <IconPencil className="w-4/5 h-4/5" stroke={1.5} />
                            
                        }
                    </ActionIcon>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                {
                    props?.experience?.map((exp: experienceData, index: number) => <ExpCard key={index} {...exp} edit={edit[3]} />)
                }
                { addExp && <ExpInput add setEdit={setAddExp} {...experience} /> }
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className="px-3">
            <div className="text-2xl font-semibold mb-4 flex justify-between">
                Certifications  <div className="flex gap-2">
                    <ActionIcon color="brightSun.4" variant="subtle" size="lg" onClick={() => setAddCerti(true)}>
                        <IconPlus className="w-4/5 h-4/5" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon color="brightSun.4" variant="subtle" size="lg" onClick={() => handleEdit(4)}>
                        {edit[4] ?
                            <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> :
                            <IconPencil className="w-4/5 h-4/5" stroke={1.5} />
                            
                        }
                    </ActionIcon>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                {
                    props?.certifications?.map((certification: certificationData, index: number) => <CertiCard key={index}
                        {...certification} edit={edit[4]} />)
                }
                { addCerti && <CertiInput setEdit={setAddCerti}/>}
            </div>
        </div>
    </div>
}

export default Profile