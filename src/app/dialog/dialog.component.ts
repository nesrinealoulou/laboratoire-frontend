import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }


  message = 'do you really want to delete';
  title = 'are you sure ! ';
  cancel = 'cancel';
  confirm = 'confirm';



  ngOnInit(): void {
  }

}
