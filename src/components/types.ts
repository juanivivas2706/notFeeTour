export interface PlacesCardProps {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    score: number;
    id?: number;
} 

export interface FilterBoxProps {
    onPress?: () => void;
}

export interface FilterModalProps { 
    visible: boolean;
    onRequestClose: () => void;
    filters: {};
    categories: {};
    setFilters: any;
    setCategories: any;
}

export interface ButtonGenericProps {
    text: string;
    width?: number;
    height?: number;
    state: boolean;
    changeState: () => void;
}