import {Component, NgZone, OnInit} from '@angular/core';
import {UserService} from "../../../core/services/user.service";
import {Observable} from "rxjs/Observable";
import {User} from "../../../core/models/user.model";
import {Router} from "@angular/router";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  users: Observable<User[]>;

  constructor(zone: NgZone, private userService: UserService, private router: Router) {
    this.mediaMatcher.addListener(x =>
      zone.run(() => this.mediaMatcher = x));
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data => {
      if (data.length > 0) {
        this.router.navigate(['/contacts', data[0].id]);
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
