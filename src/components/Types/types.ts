import { ReactNode } from "react"
import { Control, FieldValues, Path } from "react-hook-form"


export interface SideNavTypes {
    icon: string | ReactNode
    name: string
    to: string
}

export interface TabContextProps {
    activeTab: string;
    setActiveTab: (tabName: string) => void;
}

export interface ProgressBarProps {
    progress: number;
}

export interface TodayTaskProps {
    id: number,
    task: string
}
export interface MentorsCardProps {
    name: string;
    title: string;
    avatarUrl: string;
    taskCount: number;
    rating: number;
    reviewCount: number;
}

export interface TaskProps {
    id: number;
    title: string;
    description: string;
    category: string;
    progress: number;
    daysLeft: number;
    imageUrl: string;
}

export interface ProgressBarProps {
    progress: number;
}
export interface ToggleProps {
    toggleValue?: boolean;
    onToggleChange: (toggleValue: boolean) => void;
}
export interface ReusableFieldProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    label: string
    placeholder?: string
    type?: string
}

export interface ChatCardProps {
    avatarUrl: string;
    name: string;
    message: string;
    time: string;
    isUnread: boolean;
}

export type SearchFormData = {
    search: string;
};
interface MessageProps {
    message: string;
    isSender: boolean;
  }
  
export type MessageTabProps = {
    avatarUrl: string;
    avatarFallback: string;
    name: string;
    status: "online" | "offline"; // Add more statuses as needed
    messages: MessageProps[];
};