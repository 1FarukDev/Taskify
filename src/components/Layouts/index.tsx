import { ReactNode } from "react";
import SideNav from "./SideNav";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <SideNav>
            {children}
        </SideNav>
    );
}

export default AppLayout;
