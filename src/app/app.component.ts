import { Person } from './entity/Person/person';
import { Component, OnInit, ChangeDetectionStrategy, Output, InjectionToken, ElementRef, ViewChild, Renderer, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import Xp from 'tsxp/dist/indexX';
import XpTest from 'tsxp/dist/indexP';
import Vector3D from 'tsxp/dist/xpT';
import Kmp from 'ty-algorithm/dist/ty_kmp';
import { Company } from './entity/Person/company';
import { Autowired } from './core/decorator/DI.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit{
  
  title = 'app';
  public t :number =2;
  public c:number =1;

  @Autowired(Person)
  public person: Person;

  @Autowired(Company)
  public com:Company;

  @ViewChild('vc')
  vc:ElementRef;

  constructor(private ele:ElementRef,private renderer: Renderer,private cd:ChangeDetectorRef){
  }

  ngOnInit(): void {
  }

}

