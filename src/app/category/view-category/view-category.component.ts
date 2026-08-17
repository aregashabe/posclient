import { Component, viewChild, effect,inject} from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { Category } from '../../models/category';
import { CateoryService } from '../../services/cateory.service';

@Component({
  selector: 'app-view-category',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.scss',
})
export class ViewCategoryComponent {
readonly categoryService = inject(CateoryService);
displayedColumns = ['name', 'description', 'actions'];
dataSource = new MatTableDataSource<Category>();
readonly paginator = viewChild.required(MatPaginator);
readonly sort = viewChild.required(MatSort);
constructor() {
effect(() => {
this.dataSource.paginator = this.paginator();
this.dataSource.sort = this.sort();
});
}

}
