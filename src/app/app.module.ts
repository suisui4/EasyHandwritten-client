import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // 追加
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ImageUploadDialogComponent } from './component/image-upload-dialog/image-upload-dialog.component';
import { JudgeHistoryComponent } from './component/judge-history/judge-history.component';
import { UploadResultComponent } from './component/upload-result/upload-result.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutesModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DeleteConfirmDialogComponent } from './component/judge-history/delete-confirm-dialog/delete-confirm-dialog.component';
import { ImageUploadService } from './service/image-upload.service';
import { LatexViewerComponent } from './component/latex-viewer/latex-viewer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageUploadDialogComponent,
    JudgeHistoryComponent,
    UploadResultComponent,
    DeleteConfirmDialogComponent,
    LatexViewerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutesModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [ImageUploadService],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
