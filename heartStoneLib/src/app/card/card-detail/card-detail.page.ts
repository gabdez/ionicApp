import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CardService } from "../shared/card.service";
import { Card } from "../shared/card.model";
import { LoaderService } from "../shared/loader.service";

@Component({
  selector: "app-card-detail",
  templateUrl: "./card-detail.page.html"
})
export class CardDetailPage {
  card: Card;

  constructor(
    private route: ActivatedRoute,
    private CardService: CardService,
    private loader: LoaderService
  ) {}

  ionViewWillEnter() {
    let cardId = this.route.snapshot.paramMap.get("cardId");

    this.loader.presentLoading();

    this.CardService.getCardById(cardId).subscribe((card: Card[]) => {
      this.card = card[0];
      this.loader.dismissLoading();
    });
  }

  updateImage($event) {
    this.card.img = "assets/images/DefaultCard.png";
  }
}
