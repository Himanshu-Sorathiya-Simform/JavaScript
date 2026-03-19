const inputs = [
	'himanshu_sorathiya',
	' krish_patel',
	'jenith_panchal   ',
	'   krutARTH_pipaliya   ',
	'Kushal_zinzuvadia',
	'   Satyam_Singh ',
	'  MantU_MaUrya   ',
	'    \n\n\n  VaTSaL_bhArkAdA \n  \n  \n  ',
];

// underscore to camel case conversion
function toCamelCase(names) {
	return names.map((name, index) => {
		let [first, second] = name.trim().toLowerCase().split('_');

		//?             ${second[0]}${second.slice(1)}
		return `${first}${second.replace(second[0], second[0].toUpperCase())}`
			.padEnd(20, ' ')
			.concat('+'.repeat(index + 1));
	});
}

console.log('Output :', toCamelCase(inputs));

// Formatting String
function formatData(str) {
	return str.split('+').map((entry) => {
		const [first, second, third, forth] = entry.slice(1).split(';');

		return `${first} from ${second.slice(0, 3).toUpperCase()} to ${third.slice(0, 3).toUpperCase()} ${forth.slice(0, 2)}:${forth.slice(2)}`.padStart(
			40,
		);
	});
}

const str =
	'_Delayed_Departure;jfk847362915;lhr564738291;0935+_Arrival;cdg192837465;dxb918273645;2210+_Delayed_Departure;sin564738291;ams102938475;1745+_Arrival;fra675849302;hnd564738920;0615+_Delayed_Departure;ord908172635;yyz817263540;1430+_Arrival;mad345672819;fco998877665;2355+_Delayed_Departure;bkk112233445;icn556677889;0820+_Arrival;syd667788990;gru223344556;1945+_Delayed_Departure;mia778899001;bos334455667;1215+_Arrival;del990011223;bom445566778;2105+_Delayed_Departure;kul135792468;zrh246813579;1600+_Arrival;ist864209753;cpt753190864;0500';
console.log(formatData(str));
