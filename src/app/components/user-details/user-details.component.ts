import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../../services/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  private username: string = '';
  public user: any;

  constructor(private route: ActivatedRoute, private userService: UserDetailsService) {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this.getUserDetails();
    });
  }

  ngOnInit(): void {}

  getUserDetails() {
    this.userService.getUsers(this.username).subscribe((data) => {
      this.user = data;
    });
  }
}
