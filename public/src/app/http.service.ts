import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PetClass} from "./pet";

@Injectable({
  providedIn: "root"
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  pets() {
    return this._http.get("/api/pets");
  }

  createPet(pet: PetClass) {
    return this._http.post("/api/pets/new", pet);
  }

  showPet(id: any) {
    return this._http.get(`/api/pets/${id}`);
  }

  editPet(id: any, pet: PetClass) {
    return this._http.put(`/api/pets/${id}`, pet);
  }

  deletePet(id: any) {
    return this._http.delete(`/api/pets/${id}`);
  }

  likePet(id: any, pet: PetClass) {
    return this._http.put(`/api/pets/${id}/like`, pet);
  }
}

