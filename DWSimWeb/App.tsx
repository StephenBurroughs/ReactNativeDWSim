import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlowsheetSurface from './components/FlowsheetSurface';
import {drawGrid, drawSquare, drawSelectionRectangle} from './api/FlowsheetDrawing'
import {Canvas, Circle, Group} from "@shopify/react-native-skia";
const WithSkiaWeb = require ("@shopify/react-native-skia/lib/module/web");

export default function App() {
  const size = 256;
  const r = size * 0.33;
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
    </Canvas>
  );
}
// export default function App() {
//   const surfaceRef = useRef(null);
//     return (
//       <>
//       <h1>Grid</h1>
//       <FlowsheetSurface draw = {drawGrid} width = {window.innerWidth} height={500}/>
//       <h1>Square</h1>
//       <FlowsheetSurface draw = {drawSquare} width = {window.innerWidth} height={500}/>
//       </>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
