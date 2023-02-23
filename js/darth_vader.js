class Darth_Vader{
    constructor(elem) {
        this.el = $(elem);
    }

    find(selector){return this.el.find(selector);}
}