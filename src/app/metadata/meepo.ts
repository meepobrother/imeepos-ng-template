import { Observable } from "rxjs/Observable";
import { onItem, onRemoveItem, OnAddItem } from './item';
// 上拉加载更多
export interface OnLoadMore {
    meepoloadMore(e: any): Observable<any>;
}
// 下拉刷新
export interface OnRefresh {
    meepoOnRefresh(e: any): Observable<any>;
}
// 搜索
export interface OnSearch {
    meepoOnSearch(e: any): Observable<any>;
}
// 加载数据
export interface OnLoad {
    meepoOnLoad(e: any): Observable<any>;
}
// 缓存
export interface OnCache {
    meepoOnCache(key: string): Observable<any>;
}
// 保存到缓存
export interface OnSaveCache {
    meepoOnSaveCache(key: string, value: any): Observable<any>;
}

// 读取
export interface OnRead {
    meepoOnRead(): Observable<any>;
}

export interface OnLike {
    meeepoOnLike(): Observable<any>;
}

// 列表
export interface MeepoList extends OnLoad, OnSearch, OnRefresh, OnLoadMore { }
// 详情
export interface MeepoDetail extends OnLoad, OnRefresh { }
// 个人中心
export interface MeepoHome extends OnLoad, OnRefresh, OnAddItem, onRemoveItem { }

// 广告
export interface MeepoAdv extends OnAddItem, onRemoveItem { }

// 消息
export interface MeepoMessage extends OnRead { }

