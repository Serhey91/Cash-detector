import { Component, OnInit } from '@angular/core';
import { Category } from '../../../common/models/category.model';
import { CategoriesService } from '../../services/category.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.css']
})
export class RecordsPageComponent implements OnInit {
  categoriesList: Category[];
  isLoaded = false;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  this.getInfoFromServer();
  }
  newCategoryAdded(category: Category) {
    this.categoriesList.push(category);
  }
  newCategoryEdit(category: Category) {
    const index = this.categoriesList.findIndex(c => c.id === category.id);
    this.categoriesList[index] = category;
  }
  onRefresh() {
    this.isLoaded = false;
   this.getInfoFromServer();
  }
  // combineLatest - метод позволяет принимать несколько стримов одновременно
  getInfoFromServer() {
    this.categoriesService.getAllCategories().subscribe((categories: Category[]) => {
      this.categoriesList = categories;
      this.isLoaded = true;
    });
  }
}
