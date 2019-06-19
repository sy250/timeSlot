import "./styles.css";
// import moment from "moment";

// class _TimeSlot {
//   constructor(date, statrTime, endTime) {
//     this.date = date || "2019-01-01";
//     this.statrTime = statrTime || "9:10";
//     this.endTime = endTime || "11:30";
//     this.defaultTimeSlot = this.getDefaultTimeSlot();
//   }
//   getDefaultTimeSlot() {
//     return Array.from(Array(12).keys(), x => x + 9);
//   }
// }

// let defaultTimeSlot1 = new _TimeSlot();
// console.log(defaultTimeSlot1);
// console.log(defaultTimeSlot1.defaultTimeSlot);

class TimeSlot {
  constructor(date, statrTime, endTime) {
    this.date = date || "2019-01-01";
    this.statrTime = statrTime || 9;
    this.endTime = endTime || 21;
    this.TimeSlotMap = this.getDefaultTimeSlot();
  }

  // static SpanOfStartTime(startTime) {
  //   var statrTime = startTime;
  //   return () => {
  //     return startTime;
  //   };
  // }

  getDefaultTimeSlot() {
    // return Array.from(Array(12).keys(), x => x + 9);
    let k = Array.from(Array(this.endTime - this.statrTime).keys(), x => x + 9);
    let m = new Map();
    k.forEach(v => {
      m.set(v, 0);
    });
    return m;
  }

  sumTimeSlot(timeArray) {
    timeArray.forEach(v => {
      // console.log(v);
      this.TimeSlotMap.set(v, this.TimeSlotMap.get(v) + 1);
    });
  }
}
let defaultTimeSlotMap = new TimeSlot("2019-06-17");
console.log(defaultTimeSlotMap);
console.log(defaultTimeSlotMap.TimeSlotMap);

let date = "2019-06-17";
let inTime = "11:40";
let outTime = "18:57";

// let inTime = moment("1992-05-29" + " 9:40");
// let inTime = moment("1992-05-29" + " 9:40");
// console.log(inTime);
// console.log(inTime.hour());
// let outTime = moment(`${date} ${time}`);
// console.log(outTime.hour());

// let datetime = new Date("1992-05-29" + " 18:57");
let outDatetime = new Date(`${date} ${outTime}`);
let inDatetime = new Date(`${date} ${inTime}`);
// console.log(outDatetime);
// console.log(outDatetime.getDate());
// console.log(outDatetime.getHours());

function getTimeSlot(it, ot) {
  let timeSlot = [];
  let stayTime = ot - it;
  for (let i = 0; i <= stayTime; i++) {
    timeSlot.push(it + i);
  }
  return timeSlot;
}

let timeslot = getTimeSlot(inDatetime.getHours(), outDatetime.getHours());
// console.log("timeslot =>", timeslot);
defaultTimeSlotMap.sumTimeSlot(timeslot);
// console.log(defaultTimeSlotMap.TimeSlotMap);
defaultTimeSlotMap.sumTimeSlot(getTimeSlot(10, 16));

let defaultTimeSlot = Array.from(Array(12).keys(), x => x + 9);
// console.log(defaultTimeSlot);
// let diffTimeSlot = defaultTimeSlot.map(t => t + 1);
// let diffTimeSlot = defaultTimeSlot.map(t => t).map;
// console.log(diffTimeSlot);
let diffTimeSlot = [];
defaultTimeSlot.forEach(v => {
  // defaultTimeSlot.forEach((v, i) => {
  // console.info(t);
  // console.log(i, v);
  // console.log(v);
  // console.log(timeslot.find(item => item === v));
  timeslot.find(item => item === v)
    ? diffTimeSlot.push(1)
    : diffTimeSlot.push(0);
  // if (timeslot[i] === v) {
  //   // console.info(timeslot[i], v);
  //   diffTimeSlot.push(1);
  // } else {
  //   diffTimeSlot.push(0);
  // }
});
// console.log(diffTimeSlot);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
