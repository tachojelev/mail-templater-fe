import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RecipientResource } from 'src/models/recipients/recipient-resource';
import { RecipientService } from 'src/services/recipient.service';
import { CreateRecipientComponent } from './create-recipient/create-recipient.component';
import { DeleteRecipientComponent } from './delete-recipient/delete-recipient.component';
import { EditRecipientComponent } from './edit-recipient/edit-recipient.component';

@Component({
  selector: 'app-view-recipients',
  templateUrl: './view-recipients.component.html',
  styleUrls: ['./view-recipients.component.scss']
})
export class ViewRecipientsComponent implements OnInit {

  recipients: Array<RecipientResource> = [];
  emailSearchValue: string = '';

  constructor(
    private dialog: MatDialog,
    private recipientService: RecipientService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchRecipients();
  }

  onCreateRecipient(): void {
    const dialogRef = this.dialog.open(CreateRecipientComponent, {
      data: {},
      disableClose: true,
      width: '700px',
      minHeight: 500,
      maxHeight: 800,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(({ success, cancelClicked }) => {
      if (!cancelClicked) {
        const message = success ? "Recipient created successfully!" : "ERROR when creating recipient!";
        this.snackbar.open(message, undefined, {
          duration: 3000
        });

        this.fetchRecipients();
      }
    });
  }

  onEditRecipient(recipientResource: RecipientResource): void {
    const dialogRef = this.dialog.open(EditRecipientComponent, {
      data: { recipientResource: recipientResource },
      disableClose: true,
      width: '700px',
      minHeight: 500,
      maxHeight: 800,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(({ success, cancelClicked }) => {
      if (!cancelClicked) {
        const message = success ? "Recipient edited successfully!" : "ERROR when editing recipient!";
        this.snackbar.open(message, undefined, {
          duration: 3000
        });

        this.fetchRecipients();
      }
    });
  }

  onDeleteRecipient(recipientResource: RecipientResource): void {
    const dialogRef = this.dialog.open(DeleteRecipientComponent, {
      data: { recipientResource: recipientResource },
      disableClose: true,
      width: '500px',
      minHeight: 200,
      maxHeight: 800,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(({ success, cancelClicked }) => {
      if (!cancelClicked) {
        const message = success ? "Recipient deleted successfully!" : "ERROR when deleting recipient!";
        this.snackbar.open(message, undefined, {
          duration: 3000
        });

        this.fetchRecipients();
      }
    });
  }

  private fetchRecipients(): void {
    this.recipientService.getRecipients().subscribe((recipients: Array<RecipientResource>) => {
      this.recipients = recipients;
    });
  }
}
