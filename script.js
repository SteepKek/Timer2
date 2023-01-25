'use strict';

const deadline = '2023-02-14 GMT+02:00';

function setTime(endtime) {
	const t = Date.parse(endtime) - Date.parse(new Date()),
		days = Math.floor(t / (1000 * 60 * 60 * 24)),
		hours = Math.floor((t / (1000 * 60 * 60)) % 24),
		minutes = Math.floor((t / (1000 * 60)) % 60),
		seconds = Math.floor((t / 1000) % 60);

	return {
		total: t,
		days,
		hours,
		minutes,
		seconds
	};
}

function uploadTimer(endtime) {
	const days = document.querySelector('#days'),
		hours = document.querySelector('#hours'),
		minutes = document.querySelector('#minutes'),
		seconds = document.querySelector('#seconds'),
		timerId = setInterval(updateTime, 1000);

	updateTime();

	function updateTime() {
		const timeValues = setTime(endtime);

		if (timeValues.total >= 0) {
			days.innerHTML = zeroAdder(timeValues.days);
			hours.innerHTML = zeroAdder(timeValues.hours);
			minutes.innerHTML = zeroAdder(timeValues.minutes);
			seconds.innerHTML = zeroAdder(timeValues.seconds);
		}
		else {
			clearInterval(timerId);
		}
	}
}

function zeroAdder(num) {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	}
	else {
		return num;
	}
}

uploadTimer(deadline);
