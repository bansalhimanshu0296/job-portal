import { Divider } from "@mantine/core";
import SearchBar from "../../components/Common/SearchBar";

const FindTalent = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
            <Divider size="xs" mx="md" />
            <SearchBar isJobSearch={false} />

        </div>
    )
}
export default FindTalent;