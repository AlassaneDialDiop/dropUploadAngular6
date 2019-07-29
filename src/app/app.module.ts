import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { FileDropDirective } from './file-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    FileDropDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
