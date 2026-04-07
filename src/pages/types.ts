export interface HeaderHomeProps {
    title: string;
    subtitle: string;
    image_day: string;
    image_afternoon: string;
    image_night: string;
}

export interface BodyHomeProps {
    id: number;
}

export type HomeProps = HeaderHomeProps & BodyHomeProps;