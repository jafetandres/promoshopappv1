import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() href: string = '';
  constructor() { }

  ngOnInit() {}

}
