class DateClass {
    constructor() {
        this.Date = new Date();

        this.events();
    }


    // a function that collects all time data into one object | object
    present() {
        let this_date = new Date();
        return {
            this_date,
            year: this_date.getFullYear(), month: this_date.getMonth(), date: this_date.getDate(),
            day: this_date.getDay(), hour: this_date.getHours(), min: this_date.getMinutes(),
            sec: this_date.getSeconds(), ms: this_date.getTime()
        };
    }


    // function returning time data with incremental values | object
    future_add(year = 0, month = 0, date = 0, hour = 0, min = 0, sec = 0) {
        let future_date = new Date(
            this.present().year + year,
            this.present().month + month,
            this.present().date + date,
            this.present().hour + hour,
            this.present().min + min,
            this.present().sec + sec,
        );
        return {
            this_date: future_date,
            year: future_date.getFullYear(),
            month: future_date.getMonth(),
            date: future_date.getDate(),
            hour: future_date.getHours(),
            min: future_date.getMinutes(),
            sec: future_date.getSeconds(),
            ms: future_date.getTime(),
            day: future_date.getDay(),
        };
    }


    // function returning time data with set values | object
    future_set(year = 0, month = 0, date = 0, hour = 0, min = 0, sec = 0) {
        let future_date = new Date(year, month - 1, date, hour, min, sec);

        return {
            this_date: future_date,
            year: future_date.getFullYear(),
            month: future_date.getMonth(),
            date: future_date.getDate(),
            hour: future_date.getHours(),
            min: future_date.getMinutes(),
            sec: future_date.getSeconds(),
            ms: future_date.getTime(),
            day: future_date.getDay(),
        };
    }


    // The function returns the time difference between the future and the present. | object
    msToTime(ms) {
        let cd = 24 * 60 * 60 * 1000,
            ch = 60 * 60 * 1000,
            d = Math.floor(ms / cd),
            h = Math.floor( (ms - d * cd) / ch),
            m = Math.round( (ms - d * cd - h * ch) / 60000),
            pad = function(n){ return n < 10 ? '0' + n : n; };
        if( m === 60 ){
            h++;
            m = 0;
        }
        if( h === 24 ){
            d++;
            h = 0;
        }
        return {days: d, hours: h, minutes: m};
    }


    // The function returns the time difference between the future and the present. | object
    difference(present_ms, future_ms){
        let difference_ms = future_ms - present_ms;
        let difference_obj = this.msToTime(difference_ms);
        difference_obj.difference_ms = difference_ms;
        return difference_obj;
    }



    events(){
        // console.log(this.difference(this.present().ms, this.future_set(2023, 2, 24).ms));
    }
}