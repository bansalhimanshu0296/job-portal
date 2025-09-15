import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router";

interface BackButtonData{
  toLink: string;
  label?: string;
}
const BackButton = (props: BackButtonData) => {
    const navigate = useNavigate()
    const button = (
        <Button
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
          color="brightSun.4"
          my= {props?.toLink && "md"}  
          onClick={props?.toLink ? undefined : () => navigate(-1)}
        >
        {props?.label ?? "Back"}
        </Button>
      );
    
      return props?.toLink ? (
        <Link className="my-4 inline-block" to={props?.toLink}>
          {button}
        </Link>
      ) : (
        <div className="my-4 inline-block">{button}</div>
      );
}

export default BackButton