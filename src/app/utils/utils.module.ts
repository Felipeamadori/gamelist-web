import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../utils/header/header.component';
import { FooterComponent } from '../utils/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoadscreenComponent } from './loadscreen/loadscreen.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ 
        HeaderComponent,
        FooterComponent,
        LoadscreenComponent,
        CreateReviewComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LoadscreenComponent,
        CreateReviewComponent
    ]
})

export class UtilsModule {}