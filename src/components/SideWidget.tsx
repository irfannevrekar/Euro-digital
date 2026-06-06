import { useEffect } from "react";

export default function SideWidget() {
  useEffect(() => {
  }, []);

  const WidgetComponent = 'react-widget-uv' as any;

  return (
    <WidgetComponent
      agent_id="60066779-273a-4dc8-9d1e-ae0aa6c0108e"
      schema="237bc2c6-ef87-4def-be84-701cd673df42"
      type="customwidget"
    />
  );
}