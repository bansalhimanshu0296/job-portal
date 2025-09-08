import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

export interface certificationData{
    name: string;
    issuer: string;
    issueDate: string;
    certificateId: string;
    edit?: boolean;
}
const CertiCard = (props: certificationData) => {
    return <div className="flex justify-between">
        <div className="flex gap-2 items-center">
            <div className="p-2 bg-mine-shaft-800 rounded-md">
                <img className="h-7" src={`/icons/${props?.issuer}.png`} alt = {props?.issuer} />
            </div>
            <div className="flex flex-col">
                <div className="font-semibold">{props?.name}</div>
                <div className="text-sm text-mine-shaft-300">{props?.issuer}</div>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <div className="flex flex-col items-end text-sm text-mine-shaft-300">    
                <div>{props?.issueDate}</div>
                <div>ID: {props?.certificateId}</div>
            </div>
            {props?.edit &&
                <ActionIcon size="lg" color="red.8" variant="subtle">
                    <IconTrash className="w-4/5 h-4/5" stroke={1.5} />
                </ActionIcon>
            }
        </div>
        
    </div>
}

export default CertiCard