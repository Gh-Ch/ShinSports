import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

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
    height: new FormControl(''),
    weight: new FormControl('')
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

addCategory() {
  const headers = new HttpHeaders()
    // tslint:disable-next-line: max-line-length
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTAxZDE2MGI4NTI0MWI1NDk0YmMxZSIsInVzZXJuYW1lIjoic2hpbmlnYW1pIiwiYXZhdGFyIjoicHVibGljXFxhdmF0YXJzXFxkZWZhdWx0LnBuZyIsImFkbWluIjp0cnVlLCJpYXQiOjE1NzQ5Njg3MzYsImV4cCI6MTU3NDk3MjMzNn0.AHOAoZUNrr9s8gJk3xRDGu3ucaxg1B0q21zZLlsfniQ');

  this.http.post('api/categories', this.categoryForm.value, {headers})
    .subscribe((response) => {
      console.log('repsonse ', response);
    });
}

addPlayer() {
  const headers = new HttpHeaders()
    // tslint:disable-next-line: max-line-length
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDY4YjYyNGY0MzRkMWU5Y2RhMDY1ZiIsInVzZXJuYW1lIjoiU2hpbnRha2kiLCJhdmF0YXIiOiJwdWJsaWNcXGF2YXRhcnNcXGRlZmF1bHQucG5nIiwiYWRtaW4iOnRydWUsImlhdCI6MTU3NTI4NDkzMCwiZXhwIjoxNTc1Mjg4NTMwfQ.8dqyAwb6J99wSiS4Bsr8ypkl1Um7FW-UaeyGK8d6NP0');

    console.log('Player : ',this.playerForm.value);
    var fd = new FormData();
    fd.append('name',this.playerForm.value.name);
    fd.append('weight',this.playerForm.value.weight);
    fd.append('height',this.playerForm.value.height);
    fd.append('age',this.playerForm.value.age);
    fd.append('photo',this.playerForm.value.photo.files[0]);
    this.http.post('api/players', fd, {headers})
    .subscribe((response) => {
      console.log('repsonse ', response);
    });
}

addTeam() {
  const headers = new HttpHeaders()
    // tslint:disable-next-line: max-line-length
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTAxZDE2MGI4NTI0MWI1NDk0YmMxZSIsInVzZXJuYW1lIjoic2hpbmlnYW1pIiwiYXZhdGFyIjoicHVibGljXFxhdmF0YXJzXFxkZWZhdWx0LnBuZyIsImFkbWluIjp0cnVlLCJpYXQiOjE1NzQ5Njg3MzYsImV4cCI6MTU3NDk3MjMzNn0.AHOAoZUNrr9s8gJk3xRDGu3ucaxg1B0q21zZLlsfniQ');

  this.http.post('api/teams', this.teamForm.value, {headers})
    .subscribe((response) => {
      console.log('repsonse ', response);
    });
}
}
