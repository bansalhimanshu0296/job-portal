import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const notificationComponent = (title: string, message: string, isError: boolean) => {
    notifications.show({
        title: title,
        message: message,
        icon: isError ? <IconX style={{ width: "90%", height: "90%" }} /> : <IconCheck style = {{ width: "90%", height: "90%" } } />,
        color: isError ? 'red' : 'teal',
        withBorder: true,
        className: isError ? '!border-red-500' : '!border-green-500'
    });
};

export default notificationComponent;