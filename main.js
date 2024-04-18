import {
    getCurrentDate,
    getLastDayOfMonth,
    getTimeUntilNextDay,
    getCenturyAndMillennium,
    getYearDiff,
    calculateTimeDeviation,
} from "./time.js";

function main() {
    // Завдання 1
    console.log(getCurrentDate());
    // Завдання 2
    console.log(`Останній день обраного місяця в обраному році: ${getLastDayOfMonth(2024, 4)}`);
    // Завдання 3
    const {secondsPassed, secondsUntilNextDay} = getTimeUntilNextDay();
    console.log(`Секунд пройшло цього дня: ${secondsPassed}, секунд до наступного ${secondsUntilNextDay}`);
    // Завдання 4
    console.log(getCenturyAndMillennium(1653));
    // Завдання 5
    const startDate = '04.07.2020';
    const endDate = '03.07.2024';
    console.log(`Кількість повних років від стартової дати до кінечної: ${getYearDiff(startDate, endDate)}`);
    // Завдання 6
    const sunrise = '5:30';
    const sunset = '12:20';
    const {minutes, hours} = calculateTimeDeviation(sunrise, sunset);
    console.log(`Годинник збитий на ${hours} годин, ${minutes} хвилин`);
}

main()
