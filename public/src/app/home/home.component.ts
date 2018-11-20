import {Component, OnInit} from "@angular/core";
import {HttpService} from "../http.service";
import {PetClass} from "../pet";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  pets: PetClass[];
  selectedPet: PetClass;

  constructor(private _productsService: HttpService) {
  }

  ngOnInit() {
    // Initialize class attributes when Angular initializes this component
    this.pets = [];
    this.resetSelectedPet();

    // Create observable and subscribe ($.get('/products', function(products_data) { ... })) in JQuery
    this._productsService.pets().subscribe(
      // callback function
      (pets_data: Object[]) => {
        console.log("pets_data:", pets_data);
        this.pets = pets_data["pets"];
      }
    );
  }

  // This method will be called when the 'Show' button is clicked
  selectPet(pet: PetClass) {
    console.log("PetsComponent.selectPet.pet:", pet);
    console.log("PetsComponent.selectPet.this.selectedPet:", this.selectedPet);
    if (pet._id === this.selectedPet._id) {
      this.resetSelectedPet();
    } else {
      this.selectedPet = pet;
    }
  }

  resetSelectedPet() {
    this.selectedPet = {_id: "", name: "", type: "", desc: "", skill1: "", skill2: "", skill3: "", likes: 0, errors: {}};
  }
}
