import React from 'react';
import { LayoutComponent } from '../../models/layout';

export default function DashboardLayout(props: LayoutComponent) {
  return (
    <div>
      <h1>Dashboard geral</h1>
      {props.children}
    </div>
  );
}
