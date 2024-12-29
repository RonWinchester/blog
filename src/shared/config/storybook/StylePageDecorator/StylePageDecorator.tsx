import "app/styles/index.scss";
import { Decorator } from "@storybook/react";

export const StylePageDecorator: Decorator = (Story) => {
    return (
        <div style={{ minHeight: "100vh", padding: "1rem" }}>
            <Story />
        </div>
    );
};
