const DAY_OF_WEEK = {
    0: 'Chủ nhật',
    1: 'Thứ hai',
    2: 'Thứ ba',
    3: 'Thứ tư',
    4: 'Thứ năm',
    5: 'Thứ sáu',
    6: 'Thứ bảy',
    10: 'Hôm nay',
    20: 'Ngày mai'
}

class Helper {
    constructor() {

    }

    getCalendarMovie = () => {
        const calendars = [];
        for(let i = 0; i <= 6; i++) {
            var date = new Date();
            date.setDate(date.getDate() + i);
            const dayOfWeek = date.getDay();
            let label = DAY_OF_WEEK[dayOfWeek];
            if (i === 0) {
                label = DAY_OF_WEEK[10];
            } else if (i === 1) {
                label = DAY_OF_WEEK[20];
            }

            const formatValue = this.formatDate(date);
            const item = {day: label, date: formatValue, value: date};
            calendars.push(item);
        }

        return calendars;
    }

    formatDate= (date) => {
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();

        const ret = mm + '/' + dd + '/' + yyyy;
        return ret;
    }
}

const helper = new Helper();
export default helper;