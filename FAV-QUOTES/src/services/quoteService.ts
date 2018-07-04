


export class QuoteService {

  private favQuote: any = [];

  addQuoteTofav(selectedQuote) {
    this.favQuote.push(selectedQuote);
  }

  removeQuoteFromfav(selectedQuote) {
    const index = this.favQuote.findIndex((selectedQuoteElm) => {
      return selectedQuote.id == selectedQuoteElm.id;
    });
    this.favQuote.splice(index, 1);
  }

  getFavQuote() {
    return this.favQuote.slice();
  }
  isFavouriteQuote(selecteditem){
    return this.favQuote.find((quoteel)=>{
      return quoteel.id == selecteditem.id;
    })
    }
}
