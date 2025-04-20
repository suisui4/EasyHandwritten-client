import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { ImageUpload } from '../ intarface/image-upload';
import { EasyHandWrittenApiUrls } from '../constants/url-master';


@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  /** AI判定の名前を取得 */
  getJudegeName(aiCode:number){
    return this.http.get(EasyHandWrittenApiUrls.aiNameApi(aiCode))
  }

  // アップロード処理開始
  uploadImage(imageData: ImageUpload): Observable<any> {
    const formData = new FormData();
    formData.append('file_name', imageData.file_name);
    formData.append('judge_id', imageData.judge_id.toString());
    formData.append('file', imageData.image);

    return this.http.post(EasyHandWrittenApiUrls.uploadImageApi, formData, {
      headers: new HttpHeaders({}),
      observe: 'response',
      responseType: 'json'
    })
  }

  /** idを指定して画像を習得する */
  getImageById(id: number) : Observable<any> {
    return this.http.get(`${EasyHandWrittenApiUrls.getImageByIdApi(id)}/`);
  }
}
