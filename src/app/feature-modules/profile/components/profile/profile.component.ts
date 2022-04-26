import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userInfo: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {

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
  }


  get userData() {
    return this.userInfo.controls;
  }

  onFormSubmit() {
    console.log(this.userInfo.value);
  }
}
