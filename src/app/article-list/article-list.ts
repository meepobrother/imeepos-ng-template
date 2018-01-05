
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'article-list',
    templateUrl: './article-list.html'
})
export class ArticleListComponent implements OnInit {
    @Input() items: ArticleListInter[] = [{
        desc: '考上就“偷着乐”的五类专业, 20年后也不会“衰落”!',
        images: [
            'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
        ],
        avatar: 'https://q.qlogo.cn/g?b=qq&k=VIE5RHCJLvbeXSZXXndASw&s=100',
        nickname: '杨明明',
        goods: 0,
        discuss: 0,
        look: 0,
        title: '米波网络',
        color: 'red',
        link: ''
    }, {
        desc: '考上就“偷着乐”的五类专业, 20年后也不会“衰落”!',
        images: [
            'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
        ],
        avatar: 'https://q.qlogo.cn/g?b=qq&k=VIE5RHCJLvbeXSZXXndASw&s=100',
        nickname: '杨明明',
        goods: 0,
        discuss: 0,
        look: 0,
        title: '米波网络',
        color: 'red',
        link: ''
    }];
    constructor() { }
    ngOnInit() { }
}

export interface ArticleListInter {
    desc?: string;
    images?: string[];
    avatar?: string;
    nickname?: string;
    goods?: number;
    discuss?: number;
    look?: number;
    title?: string;
    color?: string;
    link?: string;
}
