import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UploadResultComponent } from './component/upload-result/upload-result.component';
import { JudgeHistoryComponent } from './component/judge-history/judge-history.component';
import { EasyHandWrittenUrls } from './constants/url-master';


export const routes: Routes = [
  { path: EasyHandWrittenUrls.home, component: HomeComponent },
  { path: EasyHandWrittenUrls.uploadImage, component: HomeComponent },
  { path: EasyHandWrittenUrls.uploadResult, component: UploadResultComponent },
  { path: EasyHandWrittenUrls.judgeHistory, component: JudgeHistoryComponent },
  { path: '', redirectTo: EasyHandWrittenUrls.home, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutesModule {}
