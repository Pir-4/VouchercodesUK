
import {getDayShiftDate} from "./helpers"

export const LOCATIONS = [
    "N17 9QJ",
    "n17 9qj",
    "SW7 5ND",
];
export const DATES = [
	// {
	// 	dateValue: "Any",
	// 	dateName: "Any",
	// },
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
		peopeleValue: "Any",
		dateName: "Any",
	},
	{
		peopeleValue: "1",
		dateName: "1",
	},
	{
		peopeleValue: "2",
		dateName: "2",
	},
	{
		peopeleValue: "3",
		dateName: "3",
	},
	{
		peopeleValue: "4",
		dateName: "4",
	},
	{
		peopeleValue: "5",
		dateName: "5",
	},
	{
		peopeleValue: "6",
		dateName: "6",
	},
	{
		peopeleValue: "7",
		dateName: "7",
	},
	{
		peopeleValue: "8",
		dateName: "8",
	},
	{
		peopeleValue: "9",
		dateName: "9",
	},
	{
		peopeleValue: "10",
		dateName: "10",
	},
	{
		peopeleValue: "10+",
		dateName: "10+",
	},
];
