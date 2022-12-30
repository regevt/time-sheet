import { DayView } from "./DayView";
import { Button } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
export const WeekView: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <div
        style={{
          height: "50px",
          borderBottom: "1px solid black",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: "10px",
        }}
      >
        <Button title="Check in" variant="outlined" size="small">
          <ArrowDownward />
          Check in
        </Button>
        <Button title="Check in" variant="outlined" size="small">
          <ArrowUpward />
          Check out
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "calc(100% - 60px)",
        }}
      >
        <DayView start={"06:50"} end={"15:20"} title="Monday"></DayView>
        <DayView start={"05:40"} end={"13:12"} title="Tuesday"></DayView>
        <DayView start={"05:50"} end={"14:13"} title="Wednesday"></DayView>
        <DayView start={"06:10"} end={"13:53"} title="Thursday"></DayView>
        <DayView title="Friday"></DayView>
        <DayView title="Saturday"></DayView>
        <DayView title="Sunday"></DayView>
      </div>
    </div>
  );
};
