import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../feature-modules/profile/model/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public searchField: string;
  public searchMode: boolean = false;
  public logo: string = '../../../../assets/images/logo-icon.png'
  public userPic: string;

  userList: User;

  private _jsonUrl: string = "/assets/json/user.json"

  constructor(private http: HttpClient) {
    const postss: Observable<User> = http.get<User>(this._jsonUrl);
    postss.subscribe(post => {
      this.userList = post;
    })
  }

  ngOnInit(): void {
    // this.getUserPic().pipe(map((data) => {
    //   console.log(data);
    // })
    // ).subscribe((d) => {
    //   console.log(d)
    // }
    // )
  }

  // getUserPic(): Observable<User> {
  //   return this.http.get<User>('/src/assets/json/user.json')
  // }

  modeSwitch() {
    this.searchMode = true
  }
  resetSearch() {
    this.searchField = '';
    console.log(this.searchField);
    this.searchMode = false
  }
}
