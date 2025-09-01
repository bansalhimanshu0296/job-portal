import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";

interface BackButtonData{
    toLink: string;
}
const BackButton = (props: BackButtonData) => {
    return <Link className="my-4 inline-block" to={props.toLink}>
        <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="brightSun.4">Back</Button>
    </Link>
}

export default BackButton