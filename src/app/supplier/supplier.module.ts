import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { TreeModule } from 'angular-tree-component';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { SupplierRoutes } from "./supplier.routing";
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SupplierRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    CustomFormsModule,
    TreeModule,
    TextMaskModule,
    FileUploadModule
  ],
  declarations: [CreateComponent,ListComponent]
})

export class SupplierModule {}
