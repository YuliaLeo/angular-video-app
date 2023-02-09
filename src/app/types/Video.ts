import { IThumbnailsTypes } from "./ThumbnailsTypes"

export interface IVideo {
	kind: string,
	etag: string,
	id: string,
  // По поводу такой типизации писал. Старайся выносить в отдельный интерфейсы/типы по возможности, будет проще читать
	snippet: {
		publishedAt: string,
		channelId: string,
		title: string,
		description: string,
		thumbnails: IThumbnailsTypes,
		channelTitle: string,
    // Array<string> - не ошибка, просто есть короткая запись "string[]", которая более удобна ИМХО. У нас на проекте используется именно она
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
