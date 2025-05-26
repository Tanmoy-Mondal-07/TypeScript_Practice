"use strict";
class TakePhoto {
    constructor(camaramod, filter) {
        this.camaramod = camaramod;
        this.filter = filter;
    }
    getRealTime() {
        return 8;
    }
}
class instagram1 extends TakePhoto {
    constructor(camaramod, filter, brust) {
        super(camaramod, filter);
        this.camaramod = camaramod;
        this.filter = filter;
        this.brust = brust;
    }
    getSepia() {
        console.log("sapia");
    }
}
const clash1 = new instagram1("test", "test", 3);
