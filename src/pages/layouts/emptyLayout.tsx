import React from "react";
import { LayoutComponent } from "../../models/layout";

export default function EmptyLayout(props: LayoutComponent) {
  return (
    <div>
      {props.children}
    </div>
  );
}