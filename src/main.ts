import { bootstrapApplication } from '@angular/platform-browser';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, Subject, takeUntil } from 'rxjs';
import { NewsService } from './app/news.service';
import { ArticleComponent } from './app/article/article.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ArticleComponent],
  template: `
    @for (article of articles; track article.title) {
    <app-article [article]="article"></app-article>
    }
  `,
})
export class App implements OnInit {
  articles: any[] = [];
  newsService = inject(NewsService);

  ngOnInit(): void {
    this.articles = this.newsService.getArticles();
  }
}

bootstrapApplication(App);
