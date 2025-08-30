import { Divider } from "@mantine/core";
import SearchBar from "../../components/Common/SearchBar";
import Talents from "../../components/FindTalents/Talents";

const FindTalentPage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
            <SearchBar isJobSearch={false} />
            <Divider size="xs" mx="md" />
            <Talents />
        </div>
    )
}
export default FindTalentPage