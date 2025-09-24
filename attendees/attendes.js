let attendees = [
  { name: "John", age: 25, ticketType: "VIP", checkedIn: false },
  { name: "Jane", age: 30, ticketType: "Regular", checkedIn: true },
  { name: "Mike", age: 22, ticketType: "VIP", checkedIn: false },
  { name: "Emily", age: 28, ticketType: "Regular", checkedIn: true },
];

//----------------------------------------
// ?  function addAttendee(attendees)
//----------------------------------------

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

//----------------------------------------
// ?function removeAttendee(attendees)
//----------------------------------------

const removeAttendee = (attendees, name, ticketType) => {
  return attendees.filter((item) => {
    return !(item.name === name && item.ticketType === ticketType);
  });
};

console.log(removeAttendee(attendees, "John", "VIP"));

//----------------------------------------
// ? function listByTicketType(attendees)
//----------------------------------------

const listByTicketTypeVIP = (list) => {
  return list.filter((ticket) => ticket.ticketType === "VIP");
};

console.log(listByTicketTypeVIP(attendees));

//----------------------------------------
// ? function listByTicketType(attendees)
//----------------------------------------

const listByTicketTypeRegular = (list) => {
  return list.filter((ticket) => ticket.ticketType === "Regular");
};

console.log(listByTicketTypeRegular(attendees));
