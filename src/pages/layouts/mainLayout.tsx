import React from "react";
import { LayoutComponent } from "../../models/layout";

export default function MainLayout(props: LayoutComponent) {
  return (
    <div className="max-h-screen">
      <h1>Main layout</h1>
      {props.children}
    </div>
  );
}