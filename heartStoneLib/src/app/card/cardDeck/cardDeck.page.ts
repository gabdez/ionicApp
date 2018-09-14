import { Component } from '@angular/core';
import { CardService } from '../shared/card.service';

@Component({
    selector: 'app-cardDeck',
    templateUrl: './cardDeck.page.html',
    styleUrls: ['./cardDeck.page.scss']
})
export class CardDeckPage {

    constructor(private cardService: CardService) {
        this.getCardDecks();
    }

    private cardDecks: string[] = [];

    private getCardDecks() {
        this.cardService.getAllCardsDecks().subscribe(
            (cardDecks: string[]) => this.cardDecks = cardDecks
        )
    }
}