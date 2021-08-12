import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import EventEmitter from 'events';
import { HeaderService } from '../../layout/services/header.service';
import { QueryComponent } from '../query/query.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}
}
