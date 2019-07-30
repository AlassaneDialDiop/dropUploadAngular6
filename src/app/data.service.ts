import { Injectable } from '@angular/core';
import { Upload } from './upload';

@Injectable()
export class DataService {

  data: any[] = [];
  constructor() { }
  
  autoGrowTextZone(e) {
    
    e.target.style.background = 'white';
    e.target.style.border = '1px solid #ccc';
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 25)+"px";
  }
  autoResizeTextZone(e) {
    
    e.target.style.background = 'transparent';
    e.target.style.border = 'none';
    e.target.style.height = "0px";
    e.target.style.height = "100%";
  }
  
}