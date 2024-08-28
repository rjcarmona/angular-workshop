import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private articles: any[] = [
    {
      title: 'Article 1',
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:750/1*p3PWFgyr3YUaRJyAUHym2g.jpeg',
      comments: [
        'Article 1 Comment 1',
        'Article 1 Comment 2',
        'Article 1 Comment 3',
      ],
    },
  ];

  constructor() {}

  getArticles(): any[] {
    return this.articles;
  }
}
