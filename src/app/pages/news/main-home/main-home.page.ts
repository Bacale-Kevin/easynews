import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit {
  tabCategory: Category[];
  constructor(
    private newsService: NewsService) {
      this.getAllCategory();
     }

  ngOnInit() {
  }

  getAllCategory(){
    this.newsService.getAllCategory().subscribe(
      data =>{
        this.tabCategory=data;
        console.log(this.tabCategory);
        this.tabCategory = this.tabCategory.filter((el, key)=>{
            if(this.tabCategory[key].logo!=null){
              return true;
            }
        });
        console.log(this.tabCategory);
      },
      error =>{console.log(error);}
    );
  }

}
