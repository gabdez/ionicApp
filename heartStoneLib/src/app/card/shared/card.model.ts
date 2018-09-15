export interface CardDeck {
    name: string;
    type: string[];
}

export interface Card{
    cardId: string,
    attack: number,
    cardSet: string,
    cost: number,
    faction: string,
    img: string,
    name: string,
    rarity: string,
    type: string,
    text: string,
}