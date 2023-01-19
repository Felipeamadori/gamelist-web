import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../utils/header/header.component';
import { FooterComponent } from '../utils/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoadscreenComponent } from './loadscreen/loadscreen.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { FormsModule } from '@angular/forms';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';

@NgModule({
    declarations: [ 
        HeaderComponent,
        FooterComponent,
        LoadscreenComponent,
        CreateReviewComponent,
        ReviewsComponent,
        AboutComponent,
        UserReviewsComponent
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
        CreateReviewComponent,
        ReviewsComponent,
        UserReviewsComponent
    ]
})

export class UtilsModule {}