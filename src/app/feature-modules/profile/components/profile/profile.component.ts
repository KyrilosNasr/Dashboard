import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../model/profile.service';
import { Country } from '../../model/country.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userInfo: FormGroup;

  public countries: Country;

  constructor(private fb: FormBuilder, private ps: ProfileService) {

  }

  ngOnInit(): void {
    this.userInfo = this.fb.group({
      fullName: new FormControl((''), [Validators.required]),
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]{11}$")]],
      message: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      country: new FormControl(''),
    })
    this.getCountries();
  }

  getCountries() {
    this.ps.getCountires().subscribe(
      (data: Country) => this.countries = data
    )
  }
  get userData() {
    return this.userInfo.controls;
  }

  onFormSubmit() {
    console.log(this.userInfo.value);
  }
}
