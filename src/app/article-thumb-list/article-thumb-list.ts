import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ArticleListInter } from '../article-list/article-list';

@Component({
    selector: 'article-thumb-list',
    templateUrl: './article-thumb-list.html',
    styleUrls: ['./article-thumb-list.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ArticleThumbListComponent implements OnInit {
    @Input() widget: ArticleListInter = {};
    constructor() { }

    ngOnInit() { }
}