import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-confirm-dialog',
  template: `
    <h2 mat-dialog-title>削除確認</h2>
    <mat-dialog-content>本当に削除しますか？</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancel()">キャンセル</button>
      <button mat-button color="warn" (click)="onConfirm()">削除</button>
    </mat-dialog-actions>
  `,
})
export class DeleteConfirmDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeleteConfirmDialogComponent>) {}

  onCancel() {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
}
