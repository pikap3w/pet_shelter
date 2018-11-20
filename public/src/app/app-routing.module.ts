import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NewComponent} from "./new/new.component";
import {EditComponent} from "./edit/edit.component";
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
  {
    path: "pets", children: [
      {path: "", component: HomeComponent},
      {path: "new", component: NewComponent},
      {path: ":id/edit", component: EditComponent},
      {path: ":id", component: ViewComponent},
    ]
  },
  {path: "", pathMatch: "full", redirectTo: "/pets"},
  {path: "**", redirectTo: "/pets"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
