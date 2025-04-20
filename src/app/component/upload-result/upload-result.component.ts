import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageUploadService } from '../../service/image-upload.service';
import { EasyHandWrittenUrls } from '../../constants/url-master';

@Component({
  selector: 'app-upload-result',
  templateUrl: './upload-result.component.html',
  styleUrls: ['./upload-result.component.scss'],
})
export class UploadResultComponent implements OnInit {
  imageId!: number;
  imageData: any;
  imageBase64!: string;
  result!: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private imageUploadService: ImageUploadService
  ) {}

  ngOnInit() {
    // クエリパラメータから画像IDと結果を取得
    this.route.queryParams.subscribe(params => {
      this.imageId = params['imageId']
      this._init();
    });
  }

  /** ホームボタン押下時 */
  goBack(): void {
    this.router.navigate(['/']);
  }

  /** 戻るボタンを押した時 */
  goBackHistory(): void {
    this.router.navigate([EasyHandWrittenUrls.judgeHistory]);
  }

  /** DBから画像を取得する */
  private _init() {
    this.imageUploadService.getImageById(this.imageId).subscribe({
      next: (response) => {
        this.imageData = response
        this.imageBase64 = response.image
        this.result = '\\(' + response.result + '\\)'
      },
      error: (error) => {
        console.error('画像の取得に失敗しました:', error);
      }
    })
  }
}