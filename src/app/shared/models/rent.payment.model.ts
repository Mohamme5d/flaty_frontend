export interface IRentPayment {
    rentPaymentID:    number;
    renterID:         number;
    renterName:       string;
    rentContractID:   number;
    rentContractName: string;
    amount:           number;
    paymentDate:      Date;
    month:            number;
    year:             number;
    createdOn:        Date;
    userID:           number;
    isClosed:         boolean;
}
