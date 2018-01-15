import {Component, NgZone, OnInit} from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(zone: NgZone) {
    this.mediaMatcher.addListener(x =>
      zone.run(() => this.mediaMatcher = x));
  }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
