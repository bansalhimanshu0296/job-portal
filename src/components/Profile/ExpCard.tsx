import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";

export interface experienceData{
    title: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    edit?: boolean;
}

const ExpCard = (props: experienceData) => {
    const [edit, setEdit] = useState(false);
    return !edit ? <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img className="h-7" src={`/icons/${props?.organization}.png`} alt = {props?.organization} />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props?.title}</div>
                    <div className="text-sm text-mine-shaft-300">{props?.organization} &bull; {props?.location}</div>
                </div>
            </div>
            <div className="text-sm text-mine-shaft-300">
                {props?.startDate} - {props?.endDate}
            </div>
        </div>
        <div className="text-sm text-mine-shaft-300 text-justify">
            {props?.description}
        </div>
        {props?.edit && <div className="flex gap-5">
            <Button color="brightSun.4" onClick={()=>setEdit(true)} variant="outline">Edit</Button>
            <Button color="red.8" variant="light">Delete</Button>
        </div>}
    </div> : <ExpInput {...props} setEdit={setEdit} />
}

export default ExpCard