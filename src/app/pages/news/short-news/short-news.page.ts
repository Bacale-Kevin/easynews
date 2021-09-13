import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';
import { AdminService } from '../../../services/admin.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.page.html',
  styleUrls: ['./short-news.page.scss'],
})
export class ShortNewsPage implements OnInit {

  tabNews: News[];
  //newsSubscription$: Subscription;
  viewMenue = false;
  slideOpts = {
    direction:'vertical',
    initialSlide: 0,
    speed: 400
  };

  constructor(private newsService: NewsService,
                private adminService: AdminService) {
                  this.getAllNews();
                }

  ngOnInit() {
  }

  getAllNews(){
    this.newsService.getAllNews().subscribe(
      data =>{
        this.tabNews=data;
        console.log(this.tabNews);
      },
      error =>{console.log(error);}
    );
  }

  toggleMenu(){
    this.viewMenue=!this.viewMenue;
  }

  viewOff(){
    if(this.viewMenue){
      this.viewMenue = false;
    }
  }

}
