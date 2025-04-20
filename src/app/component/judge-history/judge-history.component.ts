import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EasyHandWrittenUrls } from '../../constants/url-master';
import { HistoryService } from '../../service/history.service';
import { History } from '../../ intarface/history';

@Component({
  selector: 'app-judge-history',
  templateUrl: 'judge-history.component.html',
  styleUrls: ['judge-history.component.scss'],
})
export class JudgeHistoryComponent implements OnInit {
// 履歴を取得するアイテム
  history: History[] = [];
  page: number = 1;
  pageSize: number = 10;
  totalItems: number = 0; // 総アイテム数
  pageOptions: number[] = [10, 30, 50]; // ページサイズ選択肢

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private historyService: HistoryService
  ) {}

  ngOnInit(){
    this.loadHistory()
    // this.historyService.getHistory().subscribe(data =>{
    //   this.history = data.images.map((item: History) => ({
    //     id: item.id,
    //     image: `data:image/jpeg;base64,${item.image}`,
    //     category: item.category,
    //     result:  '\\(' + item.result + '\\)'
    //   }))
    // })
  }

/** 履歴項目を削除 */
deleteHistory(id: number) {
  const dialogRef = this.dialog.open(DeleteConfirmDialogComponent);
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // サーバー側で削除を実行
      this.historyService.deleteHistory(id).subscribe(response => {
        // 履歴リストから削除された項目を削除
        this.history = this.history.filter(item => item.id !== id)
      }, error => {
        console.error('Error deleting item:', error)
      });
    }
  });
}

  /** 戻るボタン押下時 */
  goBack(): void {
    this.router.navigate([EasyHandWrittenUrls.home]);
  }

  /** 結果画面に遷移 */
  onResult(id:number){
    this.router.navigate([EasyHandWrittenUrls.uploadResult], {
      queryParams: { imageId: id }
    });
  }

  // 履歴データを取得する
  loadHistory(): void {
    this.historyService.getHistory(this.page, this.pageSize).subscribe((data) => {
      this.history = data.images.map((item: History) => ({
        id: item.id,
        image: `data:image/jpeg;base64,${item.image}`,
        category: item.category,
        result: '\\(' + item.result + '\\)',
      }));
      this.totalItems = data.totalCount; // 総アイテム数を取得
    });
  }

  // 次のページを取得
  nextPage(): void {
    if (this.page * this.pageSize < this.totalItems) {
      this.page++;
      this.loadHistory();
    }
  }

  // 前のページを取得
  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadHistory();
    }
  }

  // ページサイズを変更
  changePageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.page = 1; // 最初のページに戻す
    this.loadHistory();
  }
}
