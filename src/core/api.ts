import { NewsFeed, NewsDetail } from '../types';

export default class Api {
    http: XMLHttpRequest;
    url: string;

    constructor(url: string) {
        this.http = new XMLHttpRequest();
        this.url = url;
    }

    getRequest<HttpResponse>(callBack: (data: HttpResponse) => void): void {
        this.http.open('GET', this.url);

        this.http.addEventListener(('load'), () => {
            callBack(JSON.parse(this.http.response) as HttpResponse);
        });

        this.http.send();
    }
}

export class NewsFeedApi extends Api {
    constructor(url: string) {
        super(url);
    }

    getData(callBack: (data: NewsFeed[]) => void): void {
        return this.getRequest<NewsFeed[]>(callBack);
    }
}

export class NewsDetailApi extends Api {
    constructor(url: string) {
        super(url);
    }
    
    getData(callBack: (data: NewsDetail) => void): void {
        return this.getRequest<NewsDetail>(callBack);
    }
}

