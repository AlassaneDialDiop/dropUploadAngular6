import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { FileHandle } from '../dragDrop.directive';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent {

  constructor(private uploadService: UploadService){}

  
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
          let data = this.uploadService.getCsv(fileHandle.file).then((data)=>{
            console.log(data);
          });
    }
  }

  upload(): void {
    //get image upload file obj;
  }
}