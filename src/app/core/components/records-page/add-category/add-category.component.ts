import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CategoriesService } from '../../../services/category.service';
import { Category } from '../../../../common/models/category.model';
import { Message } from '../../../../common/models/message.model';
@Component({
  selector: 'core-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  @Output() CategoryAdd = new EventEmitter<Category>();
  message: Message;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
let {categoryName, capacity} = form.value;
if (capacity < 0) {capacity *= -1; }
const category = new Category(categoryName, capacity);
this.categoriesService.addCategory(category).subscribe((cat: Category) =>

{
  form.reset();
form.form.patchValue({capacity : 1});
this.CategoryAdd.emit(cat);
this.message = new Message('success', 'Category was successfully added!');

setTimeout(() => {this.message = null; }, 2000);
}
);
}
}
