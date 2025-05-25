"use strict";
class Instagram {
    constructor(camaraMode, filter, burst) {
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(camaraMode, filter, burst, Short) {
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
        this.Short = Short;
    }
    createStory() {
        console.log("story");
    }
}
