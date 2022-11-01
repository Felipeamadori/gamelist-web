import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../utils/header/header.component';
import { FooterComponent } from '../utils/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ 
        HeaderComponent,
        FooterComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class UtilsModule {}