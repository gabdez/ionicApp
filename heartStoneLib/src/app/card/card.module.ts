import { IonicModule } from '@ionic/Angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDeckPage } from './cardDeck/cardDeck.page';
import { CardService } from './shared/card.service';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './component/card-list.component';
import { CardListingPage } from './card-listing/card-listing.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule,
    ],
    providers: [
        CardService,
    ],
    declarations: [CardDeckPage, CardListComponent, CardListingPage]
})

export class CardPageModule { }