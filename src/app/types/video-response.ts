import { ContentKind } from './content-kinds';
import { IPageInfo } from './page-info';
import { IVideo } from './video';

export interface IVideoResponse {
	kind: ContentKind,
	etag: string,
	nextPageToken?: string,
	prevPageToken?: string,
	pageInfo: IPageInfo,
	items: IVideo[],
}
