import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookconfirmService {

  public distance:any;
  public src:any;
  public dest:any;
  public msg:any;
  public date:Date;
  constructor() { 
    this.msg="he";
  }
}
