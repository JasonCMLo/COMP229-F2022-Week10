import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  showMoviesList: boolean = false;
  username?: string;

  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user: any = this.tokenStorage.getUser();
      this.showMoviesList = true;
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorage.signout();
    window.location.reload();
  }
}
