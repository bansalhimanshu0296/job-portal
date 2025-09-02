import { talents } from "../../data/TalentData"
import TalentCard from "../Common/TalentCard"


const OrgEmployees = () => {
    return <div className="mt-10 flex flex-wrap gap-10">
    {talents.map((talent, index) => index<6 && <TalentCard key={index} {...talent} />)}
</div>
}

export default OrgEmployees