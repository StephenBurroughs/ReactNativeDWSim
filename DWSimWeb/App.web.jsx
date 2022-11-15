import React from "react";
import {WithSkiaWeb} from "@shopify/react-native-skia/lib/module/web"

const getComponent = () => import("./components/FlowsheetSurface.tsx");

export default function App(){
    return <WithSkiaWeb getComponent ={getComponent}/>;
}