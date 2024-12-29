import { createPortal } from "react-dom";

interface PortapProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

export const Portal = ({ children, element = document.body }: PortapProps) => {
    return createPortal(children, element);
};
