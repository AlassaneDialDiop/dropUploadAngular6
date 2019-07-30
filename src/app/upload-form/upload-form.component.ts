import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { FileHandle } from '../dragDrop.directive';
import { DataService } from '../data.service';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent {

  constructor(private uploadService: UploadService,private dataService: DataService){}

  
  fileHandle: FileHandle = null;
  message : string ="Ce type de fichier n'est pas supporté.";
  error : boolean = false;

  fileDropped(fileHandle: FileHandle): void {
    console.log(fileHandle);

    const name = fileHandle.file.name;
    const indexOfExtension = name.lastIndexOf('.');
    const extension = name.substr(indexOfExtension, name.length);
    console.log("ext/", extension);
    if(extension != ".csv" && extension != ".xls" && extension != ".xlsx"){
      this.error = true;
    }
    else{
      this.fileHandle = fileHandle;
      this.error = false;
      this.uploadService.getCsv(fileHandle.file).then((data: any[])=>{
        console.log(data);
        this.dataService.data = data;
      });
    }
  }

  upload(): void {
    //get image upload file obj;
  }
}