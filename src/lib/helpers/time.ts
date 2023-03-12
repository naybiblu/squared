import hd from 'humanize-duration';

const shortTime = hd.humanizer({
	language: 'shortEn',
	languages: {
		shortEn: {
			y: () => 'y',
			mo: () => 'mo',
			w: () => 'w',
			d: () => 'd',
			h: () => 'h',
			m: () => 'm',
			s: () => 's',
			ms: () => 'ms'
		}
	}
});

const options = { largest: 1, round: true };

export function time(time: number) {
	return shortTime(time, options).replace(' ', '');
}

export function timeout(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getAge(birthDateString: string) {
	var today = new Date();
	var birthDate = new Date(birthDateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}
