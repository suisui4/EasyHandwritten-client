import { Injectable } from '@angular/core';
import { EasyHandWrittenApiUrls } from '../constants/url-master';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpClient
  ) { }
  
  /** 履歴を取得 (ページング対応) */
  getHistory(page: number = 1, pageSize: number = 10): Observable<any> {
    return this.http.get<any>(EasyHandWrittenApiUrls.historyApi, {
      params: {
        page: page.toString(),
        pageSize: pageSize.toString(),
      },
    });
  }

  /** 履歴を削除 */
  deleteHistory(id: number): Observable<any> {
    return this.http.delete(`${EasyHandWrittenApiUrls.historyDeleteApi(id)}`);
  }
}
