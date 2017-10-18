import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { TreeModule } from 'angular-tree-component';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbProgressbarModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
import { CatererRoutes } from "./caterer.routing";
import { ViewComponent } from "./view/view.component";
import { DataTablesModule } from 'angular-datatables';
import { GetSupplyModalComponent } from './view/modals/get-supply/get-supply.component';
import { EditCatererModalComponent } from './view/modals/edit-caterer/edit-caterer.component';
import { BvnModalComponent } from './view/modals/bvn/bvn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CatererRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    CustomFormsModule,
    TreeModule,
    TextMaskModule,
    FileUploadModule,
    DataTablesModule,
    NgbTabsetModule
  ],
  declarations: [CreateComponent,ListComponent, ViewComponent, GetSupplyModalComponent, EditCatererModalComponent, BvnModalComponent]
})

export class CatererModule {}
