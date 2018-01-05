import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ArticleListInter } from '../article-list/article-list';
@Component({
    selector: 'article-footer-bottom',
    templateUrl: './article-footer-bottom.html',
    styleUrls: ['./article-footer-bottom.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ArticleFooterBottomComponent implements OnInit {
    @Input() widget: ArticleListInter = {};
    constructor() { }

    ngOnInit() { }
}