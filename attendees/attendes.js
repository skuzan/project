let attendees = [
  { name: "John", age: 25, ticketType: "VIP", checkedIn: false },
  { name: "Jane", age: 30, ticketType: "Regular", checkedIn: true },
  { name: "Mike", age: 22, ticketType: "VIP", checkedIn: false },
  { name: "Emily", age: 28, ticketType: "Regular", checkedIn: true },
];

//----------------------------------------
// ?  1- function addAttendee(attendees)
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
// ? 2- function removeAttendee(attendees)
//----------------------------------------

const removeAttendee = (attendees, name, ticketType) => {
  return attendees.filter((item) => {
    return !(item.name === name && item.ticketType === ticketType);
  });
};

console.log(removeAttendee(attendees, "John", "VIP"));

//----------------------------------------
// ? 3- function listByTicketType(attendees)
//----------------------------------------

const listByTicketTypeVIP = (list) => {
  return list.filter((ticket) => ticket.ticketType === "VIP");
};

console.log(listByTicketTypeVIP(attendees));

//----------------------------------------
// ? 4- function listByTicketType(attendees)
//----------------------------------------

const listByTicketTypeRegular = (list) => {
  return list.filter((ticket) => ticket.ticketType === "Regular");
};

console.log(listByTicketTypeRegular(attendees));

//----------------------------------------
// ? 5- function checkInAttendee(attendees)
//----------------------------------------

const checkInAttendee = (list) => {
  const checkInAttendeeFalse = list.filter(
    (ticket) => ticket.checkedIn === false
  );
  checkInAttendeeFalse.forEach((element) => {
    element.checkedIn = true;
  });
  return checkInAttendeeFalse;
};

console.log(checkInAttendee(attendees));
