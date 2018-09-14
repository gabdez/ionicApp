import { IonicModule } from '@ionic/Angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDeckPage } from './cardDeck/cardDeck.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
    ],
    declarations: [CardDeckPage]
})

export class CardPageModule {}