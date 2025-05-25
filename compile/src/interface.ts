interface takePhoto {
    camaraMode: string
    filter: string
    burst: number
}

interface Story{
    createStory():void
}

class Instagram implements takePhoto {
    constructor(
        public camaraMode: string,
        public filter: string,
        public burst: number
    ) { }
}

class YouTube implements takePhoto, Story {
    constructor(
        public camaraMode: string,
        public filter: string,
        public burst: number,
        public Short: string
    ) { }

    createStory(): void {
        console.log("story");
    }
}