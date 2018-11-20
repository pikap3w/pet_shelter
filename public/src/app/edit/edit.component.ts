import {Component, OnInit} from "@angular/core";
import {PetClass} from "../pet";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  id: any;
  petToEdit: PetClass;
  err: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.petToEdit = new PetClass();
    this.getId();
    this.getPet();
  }

  getId() {
    this._route.params.subscribe((prms: Params) => {
      this.id = prms["id"];
    });
  }

  getPet() {
    const getObservable = this._httpService.showPet(this.id);
    getObservable.subscribe((data: any) => {
      this.petToEdit = data["pet"];
    });
  }

  editPet() {
    const editObservable = this._httpService.editPet(this.id, this.petToEdit);
    editObservable.subscribe((data: any) => {
      if (data.errors) {
        this.err = data.errors;
      } else {
        this.petToEdit = data["pet"];
        return this._router.navigate([`pets/${this.id}`]);
      }
    });
  }
}
