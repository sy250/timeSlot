import "./styles.css";
var moment = require("moment");
moment.locale("ja");

class TimeSlot {
  // constructor() {
  // constructor(date, startTime, endTime) {
  constructor(date, week, startTime, endTime) {
    this.date = date || "2019-01-01";
    // this.week = week || "日";
    this.week = moment(date).format("dd") || "日";
    this.startTime = startTime || "08:00";
    this.endTime = endTime || "21:00";
    // startTime = startTime || "09:00";
    // endTime = endTime || "20:00";
    // this.TimeSlotMap = this.initTimeSlot(startTime, endTime);
    // this.TimeSlotMap = this.initTimeSlot(this.startTime, this.endTime);
    // date();
    // this.TimeSlotMap = this.initTimeSlot();
    this.TimeSlotMap = "";
  }

  // static getHours(date, time) {
  //   let inTime = "11:40";
  //   let outTime = "18:57";
  //   console.log("getHours time =>", time);
  //   let oDate = new Date(`${date} ${time}`);
  //   // let d = new Date("1992-05-29" + " 09:00");
  //   // let d = new Date(`${this.date} ${t}`);
  //   console.log("getHours => ", oDate);
  //   return oDate.getHours();
  // }

  // static getSpanOfTime(date, startTime, endTime) {
  //   // let et = this.getHours(this.endTime);
  //   // let st = this.getHours(this.startTime);
  //   let et = this.getHours(date, endTime);
  //   let st = TimeSlot.getHours(date, startTime);
  //   console.log(et);
  //   return et - st;
  // }

  initTimeSlot(startTime, endTime) {
    let st = startTime || "08:00";
    let et = endTime || "21:00";
    // return Array.from(Array(12).keys(), x => x + 9);
    let spanOfTime = TimeSlotUtil.getSpanOfTime(st, et) || 13;
    // console.log("spanOfTime =>", spanOfTime);
    // let k = Array.from(Array(1 + TimeSlot.getSpanOfTime()).keys(), x => {
    let k = Array.from(Array(1 + spanOfTime).keys(), x => {
      return x + TimeSlotUtil.getHours(st);
    });
    // console.log("array =>", k);
    // let k = Array.from(Array(1 + this.getSpanOfTime()).keys(), x => {
    //   return x + this.getHours(this.startTime);
    // });
    //  Array(1 + this.endTime - this.startTime).keys(),
    //   x => x + this.getHours(this.startTime)
    //  );
    let m = new Map();
    k.forEach(v => {
      m.set(v, 0);
    });
    // return m;
    this.TimeSlotMap = m;
  }

  sumTimeSlot(timeArray) {
    timeArray.forEach(v => {
      // console.log(v);
      this.TimeSlotMap.set(v, this.TimeSlotMap.get(v) + 1);
    });
  }
}

/**
 * Utitity クラス
 */
class TimeSlotUtil {
  static getHours(time) {
    // console.log("getHours time =>", time);
    // let oDate = new Date(`${date} ${time}`);
    let houre = moment(time, "hh:mm").format("H");
    houre = parseInt(houre, 10);
    // let d = new Date("1992-05-29" + " 09:00");
    // let d = new Date(`${this.date} ${t}`);
    // console.log("getHours => ", houre);
    return houre;
  }

  static getSpanOfTime(startTime, endTime) {
    // let et = this.getHours(this.endTime);
    // let st = this.getHours(this.startTime);
    let et = this.getHours(endTime);
    let st = this.getHours(startTime);
    // console.log(st, et);
    return et - st;
  }

  static getTimeSlot(it, ot) {
    let inTime = this.getHours(it);
    let outTime = this.getHours(ot);
    let timeSlot = [];
    let stayTime = outTime - inTime;
    for (let i = 0; i <= stayTime; i++) {
      timeSlot.push(inTime + i);
    }
    return timeSlot;
  }
}

// let ts = new TimeSlot("2019-06-17");
// let ts = new TimeSlot("2019-06-17", "09:00", "20:00");
// let timeslot = new TimeSlot("2019-06-19", "水", "09:00", "20:00");
let timeslot = new TimeSlot("2019-06-19", "水");
timeslot.initTimeSlot();

// moment("123", "hmm").format("HH:mm") === "01:23";
// console.log(moment("123", "hmm").format("H"));
// console.log(TimeSlotUtil.getHours("12:30"));

// timeslot.date("2019-06-17");
// console.log(ts);
// console.log(ts.TimeSlotMap);

// let date = "2019-06-17";
// let inTime = "11:40";
// let outTime = "18:57";

// let outDatetime = new Date(`${date} ${outTime}`);
// let inDatetime = new Date(`${date} ${inTime}`);

// let timeslot = TimeSlot.getTimeSlot(
//   inDatetime.getHours(),
//   outDatetime.getHours()
// );
// ts.sumTimeSlot(timeslot);

timeslot.sumTimeSlot(TimeSlotUtil.getTimeSlot("10:12", "16:26"));
timeslot.sumTimeSlot(TimeSlotUtil.getTimeSlot("9:12", "15:26"));
timeslot.sumTimeSlot(TimeSlotUtil.getTimeSlot("11:12", "13:26"));
timeslot.sumTimeSlot(TimeSlotUtil.getTimeSlot("19:12", "20:26"));
// timeslot.sumTimeSlot(TimeSlotUtil.getTimeSlot("8:12", "21:26"));

// ts.sumTimeSlot(TimeSlot.getTimeSlot("09:12", "13:26"));
// ts.sumTimeSlot(TimeSlot.getTimeSlot("09:22", "19:26"));
console.log(timeslot);

document.getElementById("app").innerHTML = `

<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
