
function getDateFormat(date: Date) {
	return date.toISOString().split('T')[0];
}

/**
 * Returns date in format "Monday 24th Nov"
 * @param date Date object
 * @returns string with date in format "Monday 24th Nov"
 */
export function getFormattedDate(date: Date): string {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const dayOfWeek = daysOfWeek[date.getDay()];
	const day = date.getDate();
	const month = months[date.getMonth()];

	// Get suffix for day number (1st, 2nd, 3rd, 4th, etc.)
	const getDaySuffix = (day: number): string => {
		if (day >= 11 && day <= 13) {
			return 'th';
		}
		switch (day % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	};

	return `${dayOfWeek} ${day}${getDaySuffix(day)} ${month}`;
}

export function dateConverter(date: string | Date): { inputValue: string, expectedValue: string } {
	switch (date) {
		case "Any":
			return { inputValue: "Any", expectedValue: "Any" };
		case "Today":
			return { inputValue: "Today", expectedValue: getDateFormat(new Date()) };
		case "Tomorrow":
			return { inputValue: "Tomorrow", expectedValue: getDateFormat(new Date(Date.now() + 24 * 60 * 60 * 1000)) };
		default:
			if (typeof date === "string") {
				throw new Error(`${date} is not a valid date`);
			}
			return { inputValue: getFormattedDate(date), expectedValue: getDateFormat(date) };
	}
}

