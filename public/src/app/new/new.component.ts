import {Component, OnInit} from "@angular/core";
import {PetClass} from "../pet";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../http.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  newPet: PetClass;
  err: any;
  newPetForm: FormGroup;
  message: any;

  constructor(private _httpService: HttpService, private _router: Router, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.resetNewPet();
    this.newPetForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      type: ["", [Validators.required, Validators.minLength(3)]],
      desc: ["", [Validators.required, Validators.minLength(3)]],
      skill1: "",
      skill2: "",
      skill3: "",
      likes: 0,
    });
  }

  createPet() {
    const createObservable = this._httpService.createPet(this.newPet);
    createObservable.subscribe((data: any) => {
      if (data.errors) {
        this.err = data.errors;
        console.log("this.err:", this.err);
      } else if (data.message) {
        this.message = data.message;
        console.log("this.message:", this.message);
      } else {
        this.resetNewPet();
        return this._router.navigate(["pets"]);
      }
    });
  }

  resetNewPet() {
    this.newPet = {_id: "", name: "", type: "", desc: "", skill1: "", skill2: "", skill3: "", likes: 0, errors: {}};
  }

}
