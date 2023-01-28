import { TContentKind } from './ContentKinds';
import { IVideo } from './Video';

export interface IResponse {
	"kind": TContentKind, // сделала типом, т. к. насколько поняла из описания API это константы и мне показалось, что это удобно, если добавляются другие значения
	"etag": string,
	"nextPageToken"?: string,
	"prevPageToken"?: string,
	"pageInfo": {
		"totalResults": number,
		"resultsPerPage": number
	},
	"items": Array<IVideo>,
}