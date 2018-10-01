import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.page.html',
})

export class CardDetailPage {

    card: Card;

    constructor(private route: ActivatedRoute, private CardService: CardService) { }

    ionViewWillEnter() {
        let cardId = this.route.snapshot.paramMap.get('cardId');
        this.CardService.getCardById(cardId).subscribe(
            (card: Card[]) => {this.card = card[0]; }
        )
    }

    updateImage($event){
        this.card.img = "assets/images/DefaultCard.png"
    }
}