import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFooterBottomComponent } from './article-footer-bottom/article-footer-bottom';
import { ArticleThumbListComponent } from './article-thumb-list/article-thumb-list';
import { ArticleListComponent } from './article-list/article-list';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        ArticleFooterBottomComponent,
        ArticleThumbListComponent,
        ArticleListComponent
    ],
    declarations: [
        ArticleFooterBottomComponent,
        ArticleThumbListComponent,
        ArticleListComponent
    ],
    providers: [
    ],
})
export class FooterModule { }
export { ArticleListInter } from './article-list/article-list';
