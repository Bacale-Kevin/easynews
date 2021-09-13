export class News {

    constructor(
        public title: string,
        public content: string,
        public link: string,
        public video: string,
        public image: string,
        public createdAt: Date,
        public category: any,
        public audienceActuelle: boolean,
        public ads: boolean,
    ) {}
};
