import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../utils/header/header.component';
import { FooterComponent } from '../utils/footer/footer.component';

@NgModule({
    declarations: [ 
        HeaderComponent,
        FooterComponent
    ],
    imports: [ 
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class UtilsModule {}