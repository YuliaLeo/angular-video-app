import {IVideoSnippet} from "./video-snippet";

export interface IVideo {
	kind: string,
	etag: string,
	id: string,
	snippet: IVideoSnippet
}
