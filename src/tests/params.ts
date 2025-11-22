import { getDayShiftDate } from "./helpers"

export const LOCATIONS = [
	"N17 9QJ",
	"n17 9qj",
	"SW7 5ND",
];
export const DATES = [
	{
		dateValue: "Any",
		dateName: "Any",
	},
	{
		dateValue: "Today",
		dateName: "Today",
	},
	{
		dateValue: "Tomorrow",
		dateName: "Tomorrow",
	},
	{
		dateValue: getDayShiftDate(2),
		dateName: "Tomorrow+1",
	},
	{
		dateValue: getDayShiftDate(3),
		dateName: "Tomorrow+2",
	},
	{
		dateValue: getDayShiftDate(4),
		dateName: "Tomorrow+3",
	},
	{
		dateValue: getDayShiftDate(5),
		dateName: "Tomorrow+4",
	},
	{
		dateValue: getDayShiftDate(6),
		dateName: "Tomorrow+5",
	},
];
export const PEOPLE = [
	{
		peopleValue: "Any",
		dateName: "Any",
	},
	{
		peopleValue: "1",
		dateName: "1",
	},
	{
		peopleValue: "2",
		dateName: "2",
	},
	{
		peopleValue: "3",
		dateName: "3",
	},
	{
		peopleValue: "4",
		dateName: "4",
	},
	{
		peopleValue: "5",
		dateName: "5",
	},
	{
		peopleValue: "6",
		dateName: "6",
	},
	{
		peopleValue: "7",
		dateName: "7",
	},
	{
		peopleValue: "8",
		dateName: "8",
	},
	{
		peopleValue: "9",
		dateName: "9",
	},
	{
		peopleValue: "10",
		dateName: "10",
	},
	{
		peopleValue: "10+",
		dateName: "10+",
	},
];
