import { IonicModule } from '@ionic/Angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDeckPage } from './cardDeck/cardDeck.page';
import { CardService } from './shared/card.service';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
    ],
    providers: [
        CardService,
    ],
    declarations: [CardDeckPage]
})

export class CardPageModule {}