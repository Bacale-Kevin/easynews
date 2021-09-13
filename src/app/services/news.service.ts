import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable, of } from 'rxjs';
import { News } from '../models/news';
import { AdminService } from './admin.service';
import { OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = 'http://127.0.0.1:8000/';
  baseUrlImg = 'https://nothing/to/say/';
  newsSubject$ = new Subject<News[]>();
  private newsArray: News[] = [];


  constructor(
    private adminService: AdminService,
    private http: HttpClient) { }



    emitNews() {
        this.newsSubject$.next(this.newsArray.slice());
    }

    getAllLocataireBailleur(data){
      return this.http.post('https://nothing/to/say/', data);
    }
    getAllNews(){
      return this.http.get<News[]>(this.baseUrl + 'news');
    }
    getAllCategory(){
      return this.http.get<Category[]>(this.baseUrl + 'category');
    }
    creerLocataire(data){
      return this.http.post(this.baseUrl + 'nothing/to/say/', data);
    }
}
