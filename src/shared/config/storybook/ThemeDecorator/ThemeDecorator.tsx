/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import "app/styles/index.scss";
import { Theme } from "../../../../shared/config/theme/ThemeContext";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
