import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[]
  currentCategoryId:number=0;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories():void{
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
    })
  }
  setCurrentCategory(categoryId:number){
    this.currentCategoryId=categoryId;
  }
  getCurrentCategoryClass(categoryId:number){
    if(categoryId===this.currentCategoryId){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
