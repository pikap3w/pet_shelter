import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from "./app.component";

import {HttpService} from "./http.service";

import {AppRoutingModule} from "./app-routing.module";
import {NewComponent} from "./new/new.component";
import {EditComponent} from "./edit/edit.component";
import {ViewComponent} from "./view/view.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    ViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
