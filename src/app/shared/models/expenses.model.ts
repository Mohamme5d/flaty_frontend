export interface IExpenses {
    apratmentExpenseID: number;
    amount:             number;
    dueDate:            Date;
    month:              number;
    year:               number;
    reason:             string;
    apartmentID:        number;
    apartmentName:      null;
    userID:             number;
    isClosed:           boolean;
}
