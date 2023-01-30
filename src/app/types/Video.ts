import { IThumbnailsTypes } from "./ThumbnailsTypes"

export interface IVideo {
	kind: string,
	etag: string,
	id: string,
	snippet: {
		publishedAt: string,
		channelId: string,
		title: string,
		description: string,
		thumbnails: IThumbnailsTypes,
		channelTitle: string,
		tags?: Array<string>,
		categoryId: string,
		liveBroadcastContent?: string,
		localized?: {
			title: string,
			description?: string
		},
		defaultAudioLanguage?: string
	}
}