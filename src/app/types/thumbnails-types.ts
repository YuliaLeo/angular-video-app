import { IImageInfo } from "./image-info";

export interface IThumbnailsTypes {
	default: IImageInfo,
	medium?: IImageInfo,
	high?: IImageInfo,
	standard?: IImageInfo,
	maxres?: IImageInfo
}
