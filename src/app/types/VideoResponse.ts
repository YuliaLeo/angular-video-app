import { ContentKind } from './ContentKinds';
import { IPageInfo } from './PageInfo';
import { IVideo } from './Video';

export interface IVideoResponse {
	kind: ContentKind,
	etag: string,
	nextPageToken?: string,
	prevPageToken?: string,
	pageInfo: IPageInfo,
	items: IVideo[],
}