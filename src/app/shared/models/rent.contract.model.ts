export interface IRentContract {
    rentContractID: number;
    apartmentID:    number;
    apartmentName:  string;
    amount:         number;
    startDate:      Date;
    endDate:        Date;
    renterID:       number;
    renterName:     string;
    userID:         number;
    totalAmount:    number;
    payments:       number;
    noUsedMonths:   number;
    noOfMonths:     number;
    name:           string;
    isActive:       boolean;
}
