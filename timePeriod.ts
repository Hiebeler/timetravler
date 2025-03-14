export class TimePeriod {
    public name: string;
    public startYear: number;
    public endYear: number;
    constructor(name: string, startYear: number, endYear: number) {
        this.name = name;
        this.startYear = startYear;
        this.endYear = endYear;
      }
}