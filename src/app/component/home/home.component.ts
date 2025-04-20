import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ImageUploadDialogComponent } from '../image-upload-dialog/image-upload-dialog.component'
import { Router } from '@angular/router'
import { EasyHandWrittenUrls } from '../../constants/url-master'
import { HandWrittenConstants } from '../../constants/HandWrittenConstants'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router,
  )  {}

  judgeItems = [
    { type: 'number', image: 'assets/images/number.jpg', label: '数字判定', aiCode: HandWrittenConstants.numberJudge },
    { type: 'hiragana', image: 'assets/images/hiragana.jpg', label: 'ひらがな判定', aiCode: HandWrittenConstants.hiraganaJudge },
    { type: 'marubatu', image: 'assets/images/marubatu.png', label: 'マルバツ判定', aiCode: HandWrittenConstants.marubatuJudge },
    { type: 'math', image: 'assets/images/math-formula.png', label: '数式判定', aiCode: HandWrittenConstants.formulaJudge }
  ];
  

  // 画像アップロードダイアログを開く

  openImageUploadDialog(fromScreen: string, aiCode: number): void {
    this.dialog.open(ImageUploadDialogComponent, {
      data: { screen: fromScreen, aiCode: aiCode }
    });
  }

  // 履歴ダイアログを開く
  openJudgeHistory() {
    this.router.navigate([EasyHandWrittenUrls.judgeHistory]);
  }
}
