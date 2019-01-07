import { Person } from './entity/Person/person';
import { Component, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
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

  constructor(){
  }

  ngOnInit(): void {
    // let x= new Xp(1,23,3);
    // this.c = x.reduceXP();
    // let f = new XpTest(1,2);
    // this.t = f.addXP();
    // let v=new Vector3D(1,2,11111113);
    // this.c= v.z;
    let b = new Kmp(1,22);
    this.t= b.kmpReduce();
  }

  onClick(){
    this.person.openTheDoor();
    this.com.findJob();
  }

}

