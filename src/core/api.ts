import { NewsFeed, NewsDetail } from '../types';

export default class Api {
    http: XMLHttpRequest;
    url: string;

    constructor(url: string) {
        this.http = new XMLHttpRequest();
        this.url = url;
    }

    async request<HttpResponse>(): Promise<HttpResponse> {
        const response = await fetch(this.url)
        return await response.json() as HttpResponse;
    }
}

export class NewsFeedApi extends Api {
    constructor(url: string) {
        super(url);
    }

    async getData(): Promise<NewsFeed[]> {
        return this.request<NewsFeed[]>();
    }
}

export class NewsDetailApi extends Api {
    constructor(url: string) {
        super(url);
    }
    
    async getData(): Promise<NewsDetail> {
        return this.request<NewsDetail>();
    }
}

