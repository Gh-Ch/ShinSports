import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { }

  categoryForm: FormGroup = new FormGroup({
    $id: new FormControl(null),
    name: new FormControl('', Validators.required),
  });

  playerForm: FormGroup = new FormGroup({
    $id: new FormControl(null),
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    followers: new FormControl(),
    age: new FormControl('', Validators.required),
    careerStart: new FormControl(new Date()),
    birthDate: new FormControl(new Date()),
    photo: new FormControl(''),
    height: new FormControl(),
    weight: new FormControl()
  });

  teamForm: FormGroup = new FormGroup({
    $id: new FormControl(null),
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    followers: new FormControl(),
    coach: new FormControl('', Validators.required),
    foundationDate: new FormControl(new Date()),
    logo: new FormControl(''),
    president: new FormControl('', Validators.required),
  });

logger() {
  if (this.categoryForm.dirty) {
    console.log(this.categoryForm.value);
  } else if (this.playerForm.dirty) {
    console.log(this.playerForm.value);
  } else if (this.teamForm.dirty) {
    console.log(this.teamForm.value); 
    }
}
}
