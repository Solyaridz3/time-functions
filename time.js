function addLeadingZero(value) {
    return value.length === 1 ? '0' + value : value;
}

function convertToMinutes(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
}

/**
 * Завдання 1
 * */
export function getCurrentDate() {
    const today = new Date();
    const weekDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const weekDay = addLeadingZero(String(weekDays[today.getDay()]));
    const hours = addLeadingZero(String(today.getHours()));
    const minutes = addLeadingZero(String(today.getMinutes()));
    const seconds = addLeadingZero(String(today.getSeconds()));
    const milliseconds = addLeadingZero(String(today.getMilliseconds().toFixed(0)).slice(0, 2));
    return `Сьогодні ${weekDay}.\nПоточний час ${hours}:${minutes}:${seconds}:${milliseconds}`;
}

/**
 * Завдання 2
 */
export function getLastDayOfMonth(year, month) {
    // в Date 0 - означає останній день поточного місяця
    let lastDay = new Date(year, month, 0);
    return lastDay.getDate();
}

/**
 * Завдання 3
 */
export function getTimeUntilNextDay() {
    // Отримуємо поточну дату та час
    const now = new Date();

    // Знаходимо початок сьогоднішнього дня
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Кількість секунд, яка пройшла від початку сьогоднішнього дня
    const secondsPassed = Math.floor((now - startOfDay) / 1000);

    // Знаходимо початок наступного дня
    const startOfNextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    // Кількість секунд до початку наступного дня
    const secondsUntilNextDay = Math.floor((startOfNextDay - now) / 1000);

    return {
        secondsPassed, secondsUntilNextDay
    };
}


/**
 *  Завдання 4
 */
export function getCenturyAndMillennium(year) {
    // Визначаємо століття
    const century = Math.ceil(year / 100);
    const centuryYear = year % 100;
    const centuryHalf = centuryYear >= 50 ? 2 : 1;
    // Визначаємо тисячоліття
    const millennium = Math.ceil(year / 1000);

    return `${year} рік це ${centuryHalf} половина ${century} століття ${millennium} тисячоліття`;
}


/**
 * Завдання 5
 *
 * Повертає нуль  у випадку коли стартова дата була пізніше кінцевої,
 * або введений нульовий рік, так як такого не існує.
 * Це не відбудеться в іншому випадку навіть коли ми працюємо з роками до н.е
 */

export function getYearDiff(start, end) {
    start = start.split('.').map(Number);
    end = end.split('.').map(Number);
    const [startDay, startMonth, startYear] = start;
    const [endDay, endMonth, endYear] = end;
    let yearDiff = endYear - startYear;
    if (yearDiff < 0 || startYear === 0 || endYear === 0) {
        console.log('Неправильно введені початкові або кінцеві роки');
        return null;
    }
    if (endMonth < startMonth || (endMonth === startMonth && endDay < startDay)) {
        yearDiff = yearDiff > 0 ? yearDiff - 1 : yearDiff;
    }
    if (startYear < 0 && endYear > 0) {
        yearDiff--; // Так як, нульовий рік відсутній у григоріанському та юліанському календарях
    }
    return yearDiff;
}

/**
 * Завдання 6
 */
export function calculateTimeDeviation(sunrise, sunset) {
    // Перетворюємо час сходу і заходу Сонця в хвилини
    const sunriseTime = convertToMinutes(sunrise);
    const sunsetTime = convertToMinutes(sunset);
    // Обчислюємо середній час сходу і заходу
    const averageTime = (sunriseTime + sunsetTime) / 2;
    // Теоретичний час зеніту
    const zenithTime = 12 * 60;
    const deviation = averageTime - zenithTime;
    const hours = deviation >= 0 ? Math.floor(deviation / 60) : Math.ceil(deviation / 60);
    const minutes = deviation % 60;
    return {minutes, hours};
}






