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
    width: 180,
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
    width: 110,
    // editable: true,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'note',
    headerName: 'Note',
    // description: '',
    width: 200,
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
    width: 150,
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
];

const rows = [
  { id: 1, contactName: 'Jon Snow', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '$8000' },
  { id: 2, contactName: 'Jon Snow 1', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 3, contactName: 'Jon Snow2', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 4, contactName: 'Jon Snow3', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 5, contactName: 'Jon Snow4', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 6, contactName: 'Jon Snow5', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '$5000' },
  { id: 7, contactName: 'Jon Snow6', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 8, contactName: 'Jon Snow7', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 9, contactName: 'Jon Snow8', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 10, contactName: 'Jon Snow9', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 11, contactName: 'Jon Snow12', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '$9000' },
  { id: 12, contactName: 'Jon Snow13', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 13, contactName: 'Jon Snow345', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 14, contactName: 'Jon Sno234w', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 15, contactName: 'Jon S123now', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 16, contactName: 'Jon 123Snow', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 17, contactName: 'Jon S453now', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '$2000' },
  { id: 18, contactName: 'Jon Sno245w', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 19, contactName: 'Jon Sno89w', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
  { id: 20, contactName: 'Jon Sno456w', status: 'open', phone: 9876543210, note: 'lorem ispum note for information', latestTask: 'task 1', dateOfCreation: '12 Sep 2022', pwlValue: '' },
];


const Contacts = () => {
  return (
    <Box>
      <TableHeader />
      <DataTable columns={columns} rows={rows}
      
      />
    </Box>
  );
}

export default Contacts;