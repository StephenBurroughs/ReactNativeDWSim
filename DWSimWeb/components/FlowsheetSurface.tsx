import { useRef, useEffect } from 'react';
import {Canvas, Circle, Group, Path} from "@shopify/react-native-skia";
import { drawGrid } from '../api/FlowsheetDrawing';

// type CanvasProps = React.DetailedHTMLProps<
//     React.CanvasHTMLAttributes<HTMLCanvasElement>,
//     HTMLCanvasElement>
//     & {draw: (context: CanvasRenderingContext2D) => void};
// const FlowsheetSurface: React.FC<CanvasProps> = ({draw, ...props}) => {
//     const surfaceRef = useRef<HTMLCanvasElement | null>(null);
//     console.log(surfaceRef);

//     useEffect(() => {
//         const surface = surfaceRef.current;
//         if (!surface) {
//             return;
//         }
//         const context = surface.getContext('2d');
//         if (!context) {
//             return;
//         }
//         draw(context);
//     }, [draw])


//     return <canvas width={props.width} height={props.height} ref={surfaceRef} />;
// };
const FlowsheetSurface = () =>{
    const size = 256;
    const r = size*0.33;
    const path = drawGrid(window.innerWidth, 400);
    return (
        <Canvas style={{ flex: 1 }}>
            <Group blendMode="multiply">
                <Circle cx={r} cy={r} r={r} color="cyan" />
                <Circle cx={size - r} cy={r} r={r} color="magenta" />
                <Circle
                cx={size/2}
                cy={size - r}
                r={r}
                color="yellow"
                />
            </Group>
            <Path
                path = {path}
                color="blue"
                style="stroke"
                />
        </Canvas>
    )
};
export default FlowsheetSurface;

//export interface IFlowsheetSurfaceState {
//    MinimumGridSize: Single
//    dragOffset: SKPoint(0, 0)
//    dragStart: SKPoint(0, 0)
//    selectionDragging: Boolean
//    selectable: Boolean
//    dragging: Boolean
//    draggingfs: Boolean
//    rotating: Boolean
//    hoverdraw: Boolean
//    startingRotation: Single
//    originalRotation: Single
//    selectionRect: SKRect
//    rectp0: SKPoint
//    hoverRect: SKRect
//    hoverrotation: Integer = 0
//    Size0: SKSize
//    justselected: Boolean = False
//    DrawingObjects: List(Of IGraphicObject)
//    _SelectedObject: IGraphicObject
//    _FloatingTable: Tables.FloatingTableGraphic
//    AnimationStart: DateTime
//    AddedObject: IGraphicObject
//    DrawAddedAnimation: Boolean = False
//    Tmax: Integer = 3000
//    Tfactor: Integer = 1000
//    InvalidateCallback: Action
//    PrevPositions: Dictionary(Of String, Tuple(Of Point, Boolean))
//    Flowsheet: IFlowsheet
//    RegularTypeFace: SKTypeface
//    BoldTypeFace: SKTypeface
//    ItalicTypeFace: SKTypeface
//    BoldItalicTypeFace: SKTypeface
//    Shared RegularFonts: List(Of String)
//    Shared BoldFonts: List(Of String)
//    Shared ItalicFonts: List(Of String)
//    Shared BoldItalicFonts: List(Of String)
//    DrawAdditionalItems: Boolean = False
//    OverlayImage: SKBitmap
//    OverlayImage2: SKBitmap
//    OverlayImage3: SKBitmap
//    OverlayImage4: SKBitmap
//    OverlayImage5: SKBitmap
//    MinV, MaxV: Double
//    Origin: SKPoint
//    DrawOverlaysAction: Action(Of SKCanvas)
//   BackgroundColor: SKColor
//   ForegroundColor: SKColor
//    ResizingMode: Boolean
//    ResizingMode_KeepAR: Boolean
//    QuickConnect: Boolean
//    SurfaceBounds:
//    SnapToGrid: Boolean
//    SelectRectangle: Boolean
//    SurfaceMargins: SKRect
//    ShowGrid: Boolean
//    GridColor: SKColor
//    GridLineWidth: Integer
//    GridSize: Integer
//    Size: SKSize
//    DrawFloatingTable: Boolean
//    DrawPropertyList: Boolean
//SelectedObject: IGraphicObject
//}
