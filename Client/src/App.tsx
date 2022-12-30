import "./App.css";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Report } from "./Views/Reports/Report";
import { WeekView } from "./Views/WeekView/WeekView";

function App() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className="App">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs centered value={selectedTabIndex} onChange={(_, value) => setSelectedTabIndex(value)} aria-label="basic tabs example">
            <Tab label="Week View" />
            <Tab label="Reports" />
            <Tab label="Settings" />
          </Tabs>
        </Box>
      </Box>
      <div style={{ height: "calc(100% - 82px)", padding: "16px 24px", overflowX: "auto" }}>
        {selectedTabIndex === 0 && <WeekView />}
        {selectedTabIndex === 1 && <Report />}
      </div>
    </div>
  );
}

export default App;
