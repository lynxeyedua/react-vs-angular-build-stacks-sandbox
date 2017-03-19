import * as React from "react";
import { Editor } from './Editor';

export interface HelloProps { compiler: string; framework: string; }

export const App = (props: HelloProps) => {
  return <div className="test">
    <h1>Hello from {props.compiler} and {props.framework}!</h1><Editor />
  </div>
};