import View from "../core/view";

export interface News {
    readonly id: number;
    readonly title: string;
    readonly url: string;
    readonly user: string;
    readonly time_ago: string;
    readonly content: string;
}

export interface NewsFeed extends News {
    readonly comments_count: number;
    readonly points: number;
    read?: boolean;
}

export interface NewsDetail extends News {
    readonly comments: [];
}

export interface NewsComment extends News {
    readonly comments: [];
    readonly level: number;
}

export interface RouteInfo {
    path: string;
    page: View;
    params: RegExp | null;
}

export interface NewsStore {
    getAllFeeds: () => NewsFeed[];
    getFeed: (position: number) => NewsFeed;
    setFeeds: (feeds: NewsFeed[]) => void;
    makeRead: (id: number) => void;
    hasFeeds: boolean;
    numberOfFeed: number;
    currentPage: number;
    nextPage: number;
    prevPage: number;
}
