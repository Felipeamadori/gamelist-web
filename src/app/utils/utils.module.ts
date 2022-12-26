import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../utils/header/header.component';
import { FooterComponent } from '../utils/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoadscreenComponent } from './loadscreen/loadscreen.component';
import { CreateReviewComponent } from './create-review/create-review.component';

@NgModule({
    declarations: [ 
        HeaderComponent,
        FooterComponent,
        LoadscreenComponent,
        CreateReviewComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LoadscreenComponent,
        CreateReviewComponent
    ]
})

export class UtilsModule {}