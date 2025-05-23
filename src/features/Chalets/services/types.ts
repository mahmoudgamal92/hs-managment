type UpdateOfferDetail = {
    offerID: number;
    offerTimeFrom: string;
    offerTimeTo: string;
    price: number;
    reserveAvailable: boolean;
  };
  
  export type UpdateOfferDetailsRequest = {
    updateOfferDetailsList: UpdateOfferDetail[];
  };



  export type getOffersReq = {
    ChaletId: string;
    OfferType: string;
    FromDate: string;
    ToDate: string;
}