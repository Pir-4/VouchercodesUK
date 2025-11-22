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
		peopleName: "Any",
	},
	{
		peopleValue: "1",
		peopleName: "1",
	},
	{
		peopleValue: "2",
		peopleName: "2",
	},
	{
		peopleValue: "3",
		peopleName: "3",
	},
	{
		peopleValue: "4",
		peopleName: "4",
	},
	{
		peopleValue: "5",
		peopleName: "5",
	},
	{
		peopleValue: "6",
		peopleName: "6",
	},
	{
		peopleValue: "7",
		peopleName: "7",
	},
	{
		peopleValue: "8",
		peopleName: "8",
	},
	{
		peopleValue: "9",
		peopleName: "9",
	},
	{
		peopleValue: "10",
		peopleName: "10",
	},
	{
		peopleValue: "10+",
		peopleName: "10+",
	},
];
