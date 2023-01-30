import { IImageInfo } from "./ImageInfo";

export interface IThumbnailsTypes {
	default: IImageInfo,
	medium?: IImageInfo,
	high?: IImageInfo,
	standard?: IImageInfo,
	maxres?: IImageInfo
}