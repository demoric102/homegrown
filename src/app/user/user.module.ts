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
import { UserRoutes } from "./user.routing";
import { ViewComponent } from "./view/view.component";
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
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
  declarations: [CreateComponent,ListComponent, ViewComponent]
})

export class UserModule {}
