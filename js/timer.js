class Timer extends Darth_Vader{
    constructor(elem) {
        super(elem);

        this.date = new DateClass();

        this.time_left = {days: 0, hours: 0, minutes: 0};

        this.days_clock = new CircleClass('.days .progress-ring');
        this.hours_clock = new CircleClass('.hours .progress-ring');
        this.minutes_clock = new CircleClass('.minutes .progress-ring');

        this.days_text = this.find('.days .time');
        this.hours_text = this.find('.hours .time');
        this.minutes_text = this.find('.minutes .time');

        this.events();
    }

    refresh_timer(){
        let present_time = this.date.present().ms;
        let future_time = this.date.future_set(2023, 3, 25).ms;
        this.time_left = this.date.difference(present_time, future_time);
    }


    daysInThisMonth() {
        let now = new Date();
        return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    }


    if_timer_finish(){
        $(this.days_text).html(0);
        $(this.hours_text).html(0);
        $(this.minutes_text).html(0);
        this.days_clock.set_progress(0);
        this.hours_clock.set_progress(0);
        this.minutes_clock.set_progress(0);
    }


    set_days(){
        let percent = this.time_left.days / (this.daysInThisMonth() / 100);
        this.days_clock.set_progress(percent);
    }
    set_hours(){
        let percent = this.time_left.hours / (24 / 100);
        this.hours_clock.set_progress(percent);
    }
    set_minutes(){
        let percent = this.time_left.minutes / (60 / 100);
        this.minutes_clock.set_progress(percent);
    }

    set_progress(){
        this.refresh_timer();
        if(this.time_left.difference_ms > 0){
            this.refresh_timer();

            this.set_days();
            this.set_hours();
            this.set_minutes();

            $(this.days_text).html(this.time_left.days);
            $(this.hours_text).html(this.time_left.hours);
            $(this.minutes_text).html(this.time_left.minutes);
        }else{
            this.if_timer_finish();
        }
    }


    events(){
        this.set_progress();
        setInterval(() => {
            this.set_progress();
        }, 15000);
    }
}