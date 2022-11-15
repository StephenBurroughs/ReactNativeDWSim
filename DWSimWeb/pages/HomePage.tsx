import { ChangeEvent, useState } from 'react';
// import FlowsheetSurface from '../components/FlowsheetSurface';
// import { Button, Box } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
// import { parse } from 'csv-parse/browser/esm/sync';

// type xmlItem = {
//     id: string;
//     value: string;
// };
// const columns = [
//     {
//         field: 'id',
//         headerName:'Id'
//     },
//     {
//         field: 'value',
//         headerName: 'Value'
//     }
// ];


// export default function HomePage() {
//     const [xmlData, setXmlData] = useState<xmlItem[]>([]);
//     const [filename, setFileName] = useState("");
//     const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
//         if (!e.target.files) {
//             return;
//         }
//         const file = e.target.files[0];
//         const { name } = file;
//         setFileName(name);
//         const reader = new FileReader();
//         reader.onload = (evt) => {
//             if (!evt?.target?.result) {
//                 return;
//             }
//             const { result } = evt.target;
//             const records = parse(result as string, {

//             });
//             setXmlData(records);
//         };
//         reader.readAsBinaryString(file);
//     };
//   return (
//       <>
//           <Button
//               component='label'
//               variant='outlined'
//               startIcon={<UploadFileIcon />}
//               sx={{marginRight:'1rem'} }
//           >
//               Upload File
//               <input type='file' accept='.dwxml' hidden onChange={handleFileUpload} />
//           </Button>
//           <Button
//               variant='contained'
//           >
//               Solve Flowsheet
//           </Button>

//           <Box>{filename}</Box>
//           </>
//   );
// }