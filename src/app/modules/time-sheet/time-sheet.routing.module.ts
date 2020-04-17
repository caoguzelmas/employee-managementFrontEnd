import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimeSheetSearchComponent} from './time-sheet-search/time-sheet-search.component';
import {TimeSheetDetailComponent} from './time-sheet-detail/time-sheet-detail.component';
import {TimeSheetCreateComponent} from './time-sheet-create/time-sheet-create.component';

const routes: Routes = [
  { path: 'search', component: TimeSheetSearchComponent},
  { path: 'detail', component: TimeSheetDetailComponent},
  { path: 'create', component: TimeSheetCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSheetRoutingModule {}
