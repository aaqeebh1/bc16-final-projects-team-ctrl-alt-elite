import React, { useEffect, useRef } from "react";
import GSTC from "gantt-schedule-timeline-calendar";

const Gantchart = () => {
  const key = process.env.LICENSE_KEY;

  const rowsFromDB = [
    {
      id: "1",
      label: "Row 1",
    },
    {
      id: "2",
      label: "Row 2",
    },
  ];

  const itemsFromDB = [
    {
      id: "1",
      label: "Item 1",
      rowId: "1",
      time: {
        start: GSTC.api.date("2020-01-01").startOf("day").valueOf(),
        end: GSTC.api.date("2020-01-02").endOf("day").valueOf(),
      },
    },
    {
      id: "2",
      label: "Item 2",
      rowId: "1",
      time: {
        start: GSTC.api.date("2020-02-01").startOf("day").valueOf(),
        end: GSTC.api.date("2020-02-02").endOf("day").valueOf(),
      },
    },
    {
      id: "3",
      label: "Item 3",
      rowId: "2",
      time: {
        start: GSTC.api.date("2020-01-15").startOf("day").valueOf(),
        end: GSTC.api.date("2020-01-20").endOf("day").valueOf(),
      },
    },
  ];

  const columnsFromDB = [
    {
      id: "id",
      label: "ID",
      data: ({ row }) => GSTC.api.sourceID(row.id),
      sortable: ({ row }) => Number(GSTC.api.sourceID(row.id)),
      width: 80,
      header: {
        content: "ID",
      },
    },
    {
      id: "label",
      data: "label",
      sortable: "label",
      isHTML: false,
      width: 230,
      header: {
        content: "Label",
      },
    },
  ];

  const state = GSTC.api.stateFromConfig({
    licenseKey: key,
    list: {
      columns: {
        data: GSTC.api.fromArray(columnsFromDB),
      },
      rows: GSTC.api.fromArray(rowsFromDB),
    },
    chart: {
      items: GSTC.api.fromArray(itemsFromDB),
    },
  });

  const elementRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    if (elementRef.current) {
      const app = GSTC({
        element: elementRef.current,
        state,
      });
      return () => {
        app.destroy();
      };
    }
  }, [state]);

  return <div ref={elementRef}></div>;
};

export default Gantchart;
