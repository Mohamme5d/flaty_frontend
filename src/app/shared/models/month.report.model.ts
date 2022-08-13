export interface IMonthReport {
    month:        number;
    year:         number;
    totalRents:   number;
    payments:     number;
    expenses:     number;
    net:          number;
    bankDeposets: number;
    differance:   number;
    date:         Date;
    isClosed:     boolean;
}
