import {IThumbnailsTypes} from "./thumbnails-types";

export interface IVideoSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnailsTypes,
  channelTitle: string,
  tags?: string[],
  categoryId: string,
  liveBroadcastContent?: string,
  localized?: {
    title: string,
    description?: string
  },
  defaultAudioLanguage?: string
}
