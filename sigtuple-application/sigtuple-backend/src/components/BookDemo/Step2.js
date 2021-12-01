import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import moment from "moment";
import { useEffect, useState } from "react";
import { date } from "yup/lib/locale";
import TimezoneSelect from "react-timezone-select";
import { getBookingSlots } from "../../Api";
import _ from "lodash";

const momentTimeZone = require("moment-timezone");

const Step2 = (props) => {
  const { setMeetingDetails, sliderRef } = props;
  const [defaultValue, setDefaultValue] = useState(
    moment().add(1, "day").format()
  );
  // const [monthChanged, setMonthChanged] = useState(false)
  const [timezone, setTimeZone] = useState(momentTimeZone.tz.guess());
  const [timeZoneDetails, setTimeZoneDetails] = useState({
    value: "Asia/Kolkata",
    label: "(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi",
    offset: 5.5,
    abbrev: "Asia/Kolkata",
    altName: "Asia/Kolkata",
  });
  const [time, setTime] = useState();
  const [fillSlots, setFillSlots] = useState([]);
  const [slots, setSlots] = useState([]);
  const [renderSlots, setrenderSlots] = useState([]);

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, []);

  useEffect(() => {
    const getBooking = async () => {
      let data = await getBookingSlots({
        book_at: moment(defaultValue).format("YYYY-MM-DD"),
      });
      let slots = data.data;
      // console.log(data)
      let sData = [];

      slots.map((s) => {
        for (let i = 0; i <= 23; i++) {
          let hours = moment(s).utc().format("HH");
          let time = moment(s, "").utc().format("mm");

          let lTime = moment(`${i}`, "HH").format("HH");

          if (lTime === hours) {
            if (time > 0) {
              let nextHour = moment(hours, "HH").add(1, "hours").format("HH");
              // console.log(nextHour)
              // if(lTime!==nextHour){
              sData.push(lTime);
              sData.push(nextHour);
              // }
            } else {
              sData.push(lTime);
            }
          }
        }
        // console.log(s)
      });

      setFillSlots(_.map(_.uniq(sData), _.parseInt));
      // console.log(sData)
      // setFillSlots(slots)
    };
    getBooking();
  }, [defaultValue]);

  useEffect(() => {
    let allSlots = [];
    for (let i = 0; i <= 23; i++) {
      if (!fillSlots.includes(i)) {
        allSlots.push(i);
      }
    }
    // if(fillSlots && fillSlots.length){

    // }
    setSlots(allSlots);
    setrenderSlots(allSlots);
  }, [fillSlots]);

  useEffect(() => {
    let allData = [];
    slots.map((s) => {
      let date = moment(defaultValue).format("YYYY-MM-DD");
      let dateTime = moment(date + " " + moment(s, "HH").format("HH")).format();
      let timeZoneTime = moment(dateTime).tz(timezone).format("HH");
      allData.push(timeZoneTime);
    });
    setrenderSlots(allData);
    setTime(allData[0]);
  }, [timezone]);

  let renderSlot = renderSlots.map((s) => {
    return (
      <>
        {s < 12 ? (
          s === 0 ? (
            <option value={s}> 12 AM</option>
          ) : (
            <option value={s}> {s} AM</option>
          )
        ) : (
          <option value={s}> {s - 12 === 0 ? 12 : s - 12} PM</option>
        )}
      </>
    );
  });

  return (
    <div className="book-steps steps-two">
      <div className="book-steps-form">
        <form className="form  ">
          <div className="">
            <h2 className="text-title fw_2">
              <span className="fw_6">When </span> Works for you?
            </h2>
            <p className="fw_3 text-gray mb-40">
              Book in a time and a date with one of our specialists
            </p>
          </div>
          <div className="flatpickr-cal">
            <Flatpickr
              options={{
                inline: true,
                minDate: moment().add(1, "days").format(),
                maxDate: moment().add(12, "months").format(),
                defaultDate: defaultValue,
              }}
              // setDefaultValue={defaultValue}
              onChange={[
                function (selectedDates, dateStr, instance) {
                  setDefaultValue(moment(selectedDates[0]).format());
                },
              ]}

              // onMonthChange={
              //     [
              //         function(selectedDates, dateStr, instance) {
              //             let month=instance.currentMonth
              //             let year=instance.currentYear
              //             let currentMonth=new Date().getMonth()
              //             if(month!==currentMonth){
              //                 let changeDate=moment(`${year}-${month}-01`).format()
              //                 let arr = defaultValue.concat(changeDate)
              //                 console.log(arr)
              //                 setDefaultValue(arr)
              //             }

              //         }
              //      ]
              // }
            />
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="form-group mb-4">
                <TimezoneSelect
                  value={timezone}
                  onChange={(e) => {
                    setTimeZone(e.value);
                    setTimeZoneDetails(e);
                  }}
                />

                {/* <select className="selectpicker form-control" name="IST (GMT+5:30)">
                                    <option value="">IST (GMT+5:30) </option>
                                </select> */}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group mb-4">
                <select
                  className="selectpicker form-control"
                  name="10am"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                >
                  {renderSlot}
                  {/* <option value="10">10am</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12">
            {/* bug 1 fix to continue all slide */}
            <button
              className="button-active d-block w-100 px-4 fw_7 Whenworks-continue"
              onClick={(e) => {
                setMeetingDetails({
                  date: defaultValue,
                  time: time || "00",
                  timeZoneDetails,
                });
                sliderRef.current.slickNext();
                // props.nextStep();
              }}
            >
              Confirm
              <svg
                className="ml-3"
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z"
                  fill="#DE1A1B"
                />
              </svg>
            </button>
          </div>
        </form>
        <div className="row">
          <div className="col-12">
            <div className="text-center mt-4">
              <ul className="list-inline steps-dots">
                <li className="list-inline-item "></li>
                <li className="list-inline-item active"></li>
                <li className="list-inline-item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
