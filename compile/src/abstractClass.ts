abstract class TakePhoto {
    constructor(
        public camaramod: string,
        public filter: string
    ) { }

    abstract getSepia(): void
    getRealTime(): number{
        return 8
    }

}

class instagram1 extends TakePhoto {
    constructor(
        public camaramod: string,
        public filter: string,
        public brust: number
    ) {
        super(camaramod, filter)
    }

    getSepia(): void {
        console.log("sapia");
    }
}

const clash1 = new instagram1("test", "test", 3)