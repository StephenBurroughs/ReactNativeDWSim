import { useRef } from 'react';
import { Skia, Path, rect} from '@shopify/react-native-skia';
import FlowsheetSurface from '../components/FlowsheetSurface';
//Drawing grid to align components
// export function drawGrid(context: CanvasRenderingContext2D) : void {
// 	const gridWidth = context.canvas.width;
// 	const gridHeight = context.canvas.height;
// 	let xGrid = new Path2D();
// 	let yGrid = new Path2D();
// 	for (let i = 0; i< gridHeight; i+=20){
// 		xGrid.moveTo(0,i);
// 		xGrid.lineTo(gridWidth,i);
// 	}
// 	for (let i = 0; i< gridWidth; i+=20){
// 		yGrid.moveTo(i,0);
// 		yGrid.lineTo(i, gridHeight);
// 	}
// 	context.stroke(xGrid);
// 	context.stroke(yGrid)
// }
export function drawGrid (width: number, height:number){
	let path = Skia.Path.Make();
	for (let i = 0; i< height; i+=20){
				path.moveTo(0,i);
				path.lineTo(width,i);
			}
	for (let i = 0; i< width; i+=20){
		path.moveTo(i,0);
		path.lineTo(i, height);
	}
	path.close();


	return(path);

}
//drawing rectangle around selected component
export function drawSelectionRectangle(context: CanvasRenderingContext2D) : void {

}
//example draw sqaure function
export function drawSquare(width: number, height:number) {
	let newRect = rect(0,0,width,height);
	return(newRect);
}
//Update canvas and draw out flowsheet objects
export function UpdateCanvas(context:  CanvasRenderingContext2D) : void {

}

export function DeleteSelectedObject(context:  CanvasRenderingContext2D) : void {

}
export function Center(context:  CanvasRenderingContext2D) : void {

}
export function OffsetAll(context:  CanvasRenderingContext2D) : void {

}
export function GetFlowsheetTopLeftCorner(context:  CanvasRenderingContext2D) : void {

}

export function GetFlowsheetSize(context: CanvasRenderingContext2D) : void {

}

export function AlignSelectedObjects(context: CanvasRenderingContext2D) : void {

}