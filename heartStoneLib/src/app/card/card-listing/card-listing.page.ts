import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CardService } from "../shared/card.service";
import { Card } from "../shared/card.model";
import { LoaderService } from "../shared/loader.service";
import { ToastService } from "../shared/toast.service";

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
    private loader: LoaderService,
    private toast: ToastService
  ) { }

  private getCards() {
    this.loader.presentLoading();

    this.cardService
      .getCardsByDeck(this.cardDeckGroup, this.cardDeck)
      .subscribe((cards: Card[]) => {
        this.cards = cards;
        this.loader.dismissLoading();
        this.toast.presentToast();
      }, () => {
        this.loader.dismissLoading();
        this.toast.presentErrorToast('error, try to refresh');
      });
  }

  ionViewWillEnter() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get("cardDeckGroup");
    this.cardDeck = this.route.snapshot.paramMap.get("cardDeck");

    //if(this.cards && this.cards.length === 0) this.getCards();
  }

  doRefresh(refresher) {
    this.getCards();
    refresher.target.complete();
  }
}
