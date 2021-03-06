import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ViewRecipientsComponent } from './view-recipients.component';
import { RecipientDashboardRoutingModule } from './recipient-dashboard-routing.module';
import { CreateRecipientComponent } from './create-recipient/create-recipient.component';
import { UtilModule } from 'src/util/util.module';
import { EditRecipientComponent } from './edit-recipient/edit-recipient.component';
import { DeleteRecipientComponent } from './delete-recipient/delete-recipient.component';
import { httpLoaderFactory } from 'src/app/app.module';

@NgModule({
  declarations: [
    ViewRecipientsComponent,
    CreateRecipientComponent,
    EditRecipientComponent,
    DeleteRecipientComponent
  ],
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory
      },
      defaultLanguage: 'en'
    }),
    CommonModule,
    RecipientDashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class RecipientDashboardModule { }
