let attendees = [
  { name: "John", age: 25, ticketType: "VIP", checkedIn: false },
  { name: "Jane", age: 30, ticketType: "Regular", checkedIn: true },
  { name: "Mike", age: 22, ticketType: "VIP", checkedIn: false },
  { name: "Emily", age: 28, ticketType: "Regular", checkedIn: true },
];

const addAttendee = (name, age, ticketType, checkedIn) => {
  attendees.push({
    name: name,
    age: age,
    ticketType: ticketType,
    checkedIn: checkedIn,
  });
};

addAttendee("Sinan", 40, "VIP", true);

console.log(attendees);
