import { styled } from "@mui/system";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as _ from "lodash";
export interface DayViewProps {
  start?: string;
  end?: string;
  title: string;
}
//1440 min in day
const TimeRow = styled("div")({
  boxSizing: "border-box",
  border: "1px solid rgb(250 171 171)",
  display: "flex",
  alignItems: "center",
  zIndex: 1,
  "& > div": {
    marginLeft: "10px",
  },
});
const ActiveTime = styled("div")({
  backgroundColor: "rgba(68, 87, 233, 0.95)",
  position: "absolute",
  width: "90%",
  marginLeft: "5%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-between",
  left: 0,
  zIndex: 99,
  color: "white",
  fontSize: 20,
  borderRadius: "5px",

  "& > div": {
    margin: 10,
  },
});

export const DayView: React.FC<DayViewProps> = ({ start, end, title }) => {
  const [rowHeight, setRowHeight] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref?.current?.clientHeight) setRowHeight(Math.round(Math.floor(ref?.current?.clientHeight / 24) / 10) * 10);
  }, [ref?.current?.clientHeight]);

  const times = useMemo(() => {
    return _.range(1, 24, 1).map((val) => `${val < 10 ? `0${val}` : val}:00`);
  }, []);

  const getRows = useCallback(() => {
    return times.map((time) => (
      <TimeRow
        key={time}
        style={{
          height: rowHeight,
          backgroundColor: Number(time.split(":")[0]) > 4 && Number(time.split(":")[0]) < 18 ? "rgb(230, 230, 230)" : "white",
        }}
      >
        <div>{time}</div>
      </TimeRow>
    ));
  }, [rowHeight, times]);

  const getActive = useCallback(() => {
    let posFromTop = "0px";
    let height = "0px";
    if (start && end) {
      const startTimeParts = start.split(":");
      const startH = Number(startTimeParts[0]);
      const startM = Math.floor((60 * Number(startTimeParts[1])) / 100);

      const endTimeParts = end.split(":");
      const endH = Number(endTimeParts[0]);
      const endM = Math.floor((60 * Number(endTimeParts[1])) / 100);

      posFromTop = `${startH * rowHeight + startM}px`;
      height = `${endH * rowHeight + endM - (startH * rowHeight + startM)}px`;

      const startTime = new Date(2000, 0, 1, startH, startM);
      const endTime = new Date(2000, 0, 1, endH, endM);

      // the following is to handle cases where the times are on the opposite side of
      // midnight e.g. when you want to get the difference between 9:00 PM and 5:00 AM

      if (endTime < startTime) {
        endTime.setDate(endTime.getDate() + 1);
      }

      let diff = (endTime.getTime() - startTime.getTime()) / 1000;
      diff /= 60;

      let hours = diff / 60;
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60;
      let rminutes = Math.round(minutes);
      return (
        <ActiveTime
          style={{
            top: posFromTop,
            height: height,
          }}
        >
          <div
            style={{
              alignSelf: "start",
              width: "100%",
            }}
          >
            {start}-{end}
          </div>
          <div
            style={{
              alignSelf: "end",
            }}
          >
            {rhours}:{rminutes}
          </div>
        </ActiveTime>
      );
    }
    return <div></div>;
  }, [start, end, rowHeight]);

  return (
    <div
      id="dayView"
      ref={ref}
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          height: rowHeight,
        }}
      >
        {title}
      </div>
      {getRows()}
      {getActive()}
    </div>
  );
};
