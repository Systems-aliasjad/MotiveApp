export interface ITRCToolbarConfig {
    id?: string;
    label?: string;
    iconUrl?: string;
    icon?: string;
    cssClass?: string;
    cssStyle?: {};
    hide?: boolean;
    listener?($event): void;
    iconText?: string;
}
