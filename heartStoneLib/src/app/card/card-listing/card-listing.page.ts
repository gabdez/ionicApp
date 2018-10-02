import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CardService } from "../shared/card.service";
import { Card } from "../shared/card.model";
import { LoaderService } from "../shared/loader.service";

@Component({
  selector: "app-card-listing",
  templateUrl: "./card-listing.page.html",
  styleUrls: ["./card-listing.page.scss"]
})
export class CardListingPage {
  private cardDeckGroup: string;
  private cardDeck: string;
  cards: Card[] = [];

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private loader: LoaderService
  ) {}

  ionViewWillEnter() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get("cardDeckGroup");
    this.cardDeck = this.route.snapshot.paramMap.get("cardDeck");

    this.loader.presentLoading();

    this.cardService
      .getCardsByDeck(this.cardDeckGroup, this.cardDeck)
      .subscribe((cards: Card[]) => {
        this.cards = cards;
        this.loader.dismissLoading();
      });
  }
}
