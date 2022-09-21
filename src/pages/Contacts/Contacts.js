import { Box } from "@mui/material";
import { DataTable, TableHeader } from "../../components";



const columns = [
  {
    field: 'contactName',
    headerName: 'Contact Name',
    renderCell: ({ value }) => {
      return <Box sx={{ display: 'flex', alignItems: 'center', py: '4px' }}>
        <Box component={`img`} src={`https://picsum.photos/50/50?grayscale&${value}`} sx={{ display: 'block', width: '35px', height: '35px', borderRadius: '4px', mr: '6px' }} />
        <Box>{value}</Box>
      </Box>
    },
    width: 200,
    // description: '',
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'status',
    headerName: 'Status',
    // description: '',
    // width: 150,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    // description: '',
    width: 120,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'note',
    headerName: 'Note',
    // description: '',
    width: 220,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'latestTask',
    headerName: 'Latest Task',
    // description: '',
    // width: 150,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'dateOfCreation',
    headerName: 'Date of Creation',
    // description: '',
    width: 160,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'pwlValue',
    headerName: 'P/W/L Value',
    // description: '',
    // width: 150,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'column1',
    headerName: 'P/W/L Value',
    // description: '',
    width: 150,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'column2',
    headerName: 'P/W/L Value',
    // description: '',
    width: 150,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'column3',
    headerName: 'P/W/L Value',
    // description: '',
    width: 150,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, contactName: 'Jon Snow', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '$8000', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 2, contactName: 'Jon Snow 1', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 3, contactName: 'Jon Snow2', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 4, contactName: 'Jon Snow3', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 5, contactName: 'Jon Snow4', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 6, contactName: 'Jon Snow5', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '$5000', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 7, contactName: 'Jon Snow6', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 8, contactName: 'Jon Snow7', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 9, contactName: 'Jon Snow8', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 10, contactName: 'Jon Snow9', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 11, contactName: 'Jon Snow12', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '$9000', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 12, contactName: 'Jon Snow13', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 13, contactName: 'Jon Snow345', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 14, contactName: 'Jon Sno234w', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 15, contactName: 'Jon S123now', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 16, contactName: 'Jon 123Snow', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 17, contactName: 'Jon S453now', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '$2000', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 18, contactName: 'Jon Sno245w', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 19, contactName: 'Jon Sno89w', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
  { id: 20, contactName: 'Jon Sno456w', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '', column1: 'lorem ipsum', column2: 'ipsum lorem', column3: 'dolor sit emmit' },
];


const Contacts = () => {
  return (
    <Box onScroll={()=>{
      debugger
    }} >
      <TableHeader />
      <DataTable columns={columns} rows={rows}  stickyColumnField="contactName" />
    </Box>
  );
}

export default Contacts;