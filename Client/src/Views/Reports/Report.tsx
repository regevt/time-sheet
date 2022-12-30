import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export const Report: React.FC = () => {
  return (
    <DataGrid
      density="compact"
      components={{
        Toolbar: GridToolbar,
      }}
      columns={[
        {
          field: "name",
          width: 150,
        },
        {
          field: "age",
        },
        {
          field: "start",
        },
        {
          field: "end",
        },
      ]}
      rows={[
        {
          id: 1,
          name: "test",
          age: 33,
          start: "22/2/2022",
          end: "25/2/2022",
        },
        {
          id: 2,
          name: "test 2",
          age: 25,
          start: "22/2/2022",
          end: "25/2/2022",
        },
      ]}
    />
  );
};
