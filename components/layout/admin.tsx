import * as React from 'react';
import { LayoutProps } from '../../models';


export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>{children}</div>
    </div>
  );
}
