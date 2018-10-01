import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../../../common/models/category.model';
import { CategoriesService } from '../../../services/category.service';
import { Message } from '../../../../common/models/message.model';

@Component({
  selector: 'core-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @Input() categoriesList: Category[];
  @Output() CategoryEdit = new EventEmitter<Category>();
  // listening for choosing category
  currentCategoryId = 1;
  // data of all model
  currentCategory: Category;
  message: Message;
  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
    this.onCategoryChange();
  }

  onSubmit(form: NgForm) {
    let {capacity, categoryName} = form.value;
    if (capacity < 0) { capacity *= -1; }
    const category = new Category(categoryName, capacity, +this.currentCategoryId);
    this.categoryService.updateCategory(category).subscribe((c: Category) => {
      this.CategoryEdit.emit(c);
      this.message = new Message('success', 'Category was successfully edited');

  setTimeout(() => {this.message = null; }, 2000);
});
}
onCategoryChange() {
this.currentCategory = this.categoriesList.find((c) => c.id === +this.currentCategoryId );
}

}
