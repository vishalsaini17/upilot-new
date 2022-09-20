import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';


const DataTable = ({ columns = [], rows = [], ...restProps }) => {
  return (
    <Box sx={{
      height: '600px',
      '& .custom-row': {
        boxShadow: '0 1px 4px 0 rgba(42,41,55,0.3)',
        mb: '5px',

        '& .custom-column': {
          borderTopColor: 'transparent'
        }
      },
      '& .even-row': {
        backgroundColor: 'rgba(225,223,246,0.15)',
        // mb: '5px',
        '&:hover': {
          backgroundColor: 'rgba(225,223,246,0.34)',
        }
      },

      '& .odd-row': {
        backgroundColor: 'rgba(225,223,246,0.22)',
        // mb: '5px',
        '&:hover': {
          backgroundColor: 'rgba(225,223,246,0.34)',
        }
      },

      '& .MuiDataGrid-cell:not(.custom-column)': {
        borderColor: 'transparent'
      }
    }}
    >
      <DataGrid
        showCellRightBorder
        columns={columns}
        rows={rows}
        getRowClassName={({ indexRelativeToCurrentPage }) => `custom-row ${indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'}`}
        getCellClassName={() => `custom-column`}
        checkboxSelection
        // hideFooter


        {...restProps}
      />
    </Box>
  );
}

export default DataTable;
