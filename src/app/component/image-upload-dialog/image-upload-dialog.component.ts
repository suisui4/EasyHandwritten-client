import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageUpload } from '../../ intarface/image-upload';
import { ImageUploadService } from '../../service/image-upload.service';
import { EasyHandWrittenUrls } from '../../constants/url-master';
import { Router } from '@angular/router';


@Component({
  selector: 'app-image-upload-dialog',
  templateUrl: './image-upload-dialog.component.html',
  styleUrls: ['./image-upload-dialog.component.scss'],
})
export class ImageUploadDialogComponent implements OnInit {
  selectedImage: File | null = null;
  sourceScreen: string;
  isDragging = false;
  errorMessage: string = '';

  /** 判定する名前 */
  judgeName?: string

  isLoading = false

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { screen: string, aiCode: number },
    public imageUploadService: ImageUploadService,
    private dialogRef: MatDialogRef<ImageUploadDialogComponent>,
    private router: Router
  ) {
    this.sourceScreen = data.screen;
  }

  ngOnInit(){
    this.imageUploadService.getJudegeName(this.data.aiCode).subscribe((data: any) => {
      this.judgeName = data.judge_name
    })
  }

  // 画像が選択された時
  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        this.selectedImage = file;
        this.errorMessage = '';
      } else {
        this.selectedImage = null;
        this.errorMessage = '画像ファイルを選択してください。';
      }
    }
  }

  // ドラッグオーバーイベント
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  // ドラッグアウトイベント
  onDragLeave(event: DragEvent) {
    this.isDragging = false;
  }

  // ドロップイベント
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files && files[0]) {
      if (files[0].type.startsWith('image/')) {
        this.selectedImage = files[0];
        this.errorMessage = ''; // エラーをクリア
      } else {
        this.selectedImage = null;
        this.errorMessage = '画像ファイルを選択してください。';
      }
    }
  }

  /** ダイアログ内で表示する画像のURLを生成 */
  getImageSrc(): string {
    return this.selectedImage ? URL.createObjectURL(this.selectedImage) : '';
  }

  /** 読み込み開始ボタン押下時 */
  onJudgeImageAI() {
    this.isLoading = true;
    if (!this.selectedImage) return;
    const imageData: ImageUpload = {
      file_name: this.selectedImage.name,
      judge_id: this.data.aiCode,
      image: this.selectedImage
    }
    this.imageUploadService.uploadImage(imageData).subscribe({
      next: (response) => {
        this.dialogRef.close(response)
        this.isLoading = false;
        this.router.navigate([EasyHandWrittenUrls.uploadResult],{
          queryParams: { imageId: response.body.imageId, image: response.body.image, result: response.body.result }
        })
      }
    })
  }

  /** ダイアログを閉じる */
  closeDialog() {
    this.dialogRef.close();
  }

}
