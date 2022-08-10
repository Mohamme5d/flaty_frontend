export interface IBankDeposit {
    bankDepositID: number;
    amount:        number;
    currencyCode:  string;
    exchangeRate:  number;
    reciptNo:      string;
    date:          Date;
    month:         number;
    year:          number;
    notes:         string;
    createdOn:     Date;
    userID:        number;
    isClosed:      boolean;
}
