import React from 'react'
import { usePaintRef, Color, Skia } from '@shopify/react-native-skia';
//import {IGraphicObject} from '../../../interfaces/IGraphicObject'
import ICustomXMLSerialization from '../../../interfaces/ICustomXMLSerialization'

class GraphicObject{//} implements IGraphicObject, ICustomXMLSerialization{

    GetRect(x: number, y: number, width: number, height: number){
        let rect = new Path2D;
        return rect;
    }
    GetPaint(color:Color, width: number){
        let p = usePaintRef;
        return{
            p,
            color,
            width,
            style: "stroke"
        };
    }
}