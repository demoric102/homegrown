import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { CatererService } from "./services/caterer";
import { LgaService } from "./services/lga";
import { BvnService } from "./services/bvn";
import { BankService } from "./services/bank";
import { FooditemService } from "./services/fooditem";
import { SupplierService } from "./services/supplier";
import { SchoolService } from "./services/school";
import { FoodService } from './services/food';
import { UserService } from "./services/user";
import { InvoiceService } from './services/invoice';
import { AuthGuardService } from './guard/auth-guard';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AsyncLocalStorageModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [
    CatererService,
    LgaService,
    BvnService,
    BankService,
    SchoolService,
    FoodService,
    FooditemService,
    UserService,
    SupplierService,
    InvoiceService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
