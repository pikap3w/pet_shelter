import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  id: any;
  petToShow: any;
  err: any;
  disabled = false;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) {
  }

  ngOnInit() {
    this.getId();
    this.getPet();
  }

  getId() {
    this._route.params.subscribe((prms: Params) => {
      console.log("prms[id]:", prms["id"]);
      this.id = prms["id"];
    });
  }

  getPet() {
    const getObservable = this._httpService.showPet(this.id);
    getObservable.subscribe((data: any) => {
      this.petToShow = data["pet"];
      console.log(this.petToShow);
    });
  }


  deletePet() {
    this._httpService.deletePet(this.id).subscribe((data: any) => {
      if (data.errors) {
        this.err = data.errors;
        console.log("this.err:", this.err);
      } else {
        console.log("Deleted pet", data);
        return this._router.navigate(["pets"]);
      }
    });
  }

  likePet() {
    const editObservable = this._httpService.likePet(this.id, this.petToShow);
    editObservable.subscribe((data: any) => {
      if (data.errors) {
        this.err = data.errors;
      } else {
        this.petToShow = data["pet"];
        this.getPet();
        this.disabled = true;
      }
    });
  }
}
