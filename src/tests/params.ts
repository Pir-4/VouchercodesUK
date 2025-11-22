import { getDayShiftDate } from "./helpers"

export const LOCATIONS = [
	"N17 10QJ",
	"n17 10qj",
	"SW7 5ND",
];
export const DATES = [
	{
		dateValue: "Any",
		dateCaseName: "Any",
	},
	{
		dateValue: "Today",
		dateCaseName: "Today",
	},
	{
		dateValue: "Tomorrow",
		dateCaseName: "Tomorrow",
	},
	{
		dateValue: getDayShiftDate(2),
		dateCaseName: "Tomorrow+1",
	},
	{
		dateValue: getDayShiftDate(3),
		dateCaseName: "Tomorrow+2",
	},
	{
		dateValue: getDayShiftDate(4),
		dateCaseName: "Tomorrow+3",
	},
	{
		dateValue: getDayShiftDate(5),
		dateCaseName: "Tomorrow+4",
	},
	{
		dateValue: getDayShiftDate(6),
		dateCaseName: "Tomorrow+5",
	},
];
export const PEOPLE = [
	{
		peopleValue: "Any",
		peopleCaseName: "Any",
	},
	{
		peopleValue: "1",
		peopleCaseName: "1",
	},
	{
		peopleValue: "2",
		peopleCaseName: "2",
	},
	{
		peopleValue: "3",
		peopleCaseName: "3",
	},
	{
		peopleValue: "4",
		peopleCaseName: "4",
	},
	{
		peopleValue: "5",
		peopleCaseName: "5",
	},
	{
		peopleValue: "6",
		peopleCaseName: "6",
	},
	{
		peopleValue: "7",
		peopleCaseName: "7",
	},
	{
		peopleValue: "8",
		peopleCaseName: "8",
	},
	{
		peopleValue: "9",
		peopleCaseName: "9",
	},
	{
		peopleValue: "10",
		peopleCaseName: "10",
	},
	{
		peopleValue: "10+",
		peopleCaseName: "10+",
	},
];
