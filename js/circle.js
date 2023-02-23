class CircleClass extends Darth_Vader{
    constructor(elem) {
        super(elem);

        this.circle = this.find('.progress-ring__circle')[0];
        this.radius = this.circle.r.baseVal.value;
        this.circumference = 2 * Math.PI * this.radius;

        this.events();
    }

    settings(){
        $(this.circle).css({'stroke-dasharray': `${this.circumference} ${this.circumference}`});
        $(this.circle).css({'stroke-dashoffset': `${this.circumference}`});
    }

    set_progress(percent){
        const offset = this.circumference - percent / 100 * this.circumference;
        $(this.circle).css({'stroke-dashoffset': offset});
    }

    events(){
        this.settings();
        // this.set_progress(10);
    }
}