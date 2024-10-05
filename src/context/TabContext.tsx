import { TabContextProps } from "@/components/Types/types";
import { createContext, ReactNode, useContext, useState } from "react";


const TabContext = createContext<TabContextProps | undefined>(undefined);

export const useTabContext = () => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error("useTabContext must be used within a TabProvider");
    }
    return context;
};

export const TabProvider = ({ children }: { children: ReactNode }) => {
    const [activeTab, setActiveTab] = useState<string>("Overview");

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
};
