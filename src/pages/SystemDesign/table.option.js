

export const columns = [
 
  { field: 'ContactName', headerName: 'Contact name', width: 300 ,editable: true },
  { field: 'Status', headerName: 'Status', width: 130  , editable: true},
  { field: 'Phone', headerName: 'Phone', width: 150 ,editable: true,},
  { field: 'Note', headerName: 'Note', width: 130 , editable: true },
  { field: 'LatestTask', headerName: 'Latest task', width: 160  , editable: true},
  { field: 'LatestDeaL', headerName: 'Latest Deal', width: 160 , editable: false },
  { field: 'Date', headerName: 'Date of Creation', width: 160, editable: true },
  { field: 'PWLValue', headerName: 'P/W/L Value', width: 160 , editable: true },

];


export const rowsData = [
  {id:"1", ContactName : "ABC Corp" , Status:"Open" , Date:"30 June 2022" , Phone:"null" , PWLValue:"." },
  {id:"2", ContactName : "AbhijitDas gupta" , Status:"Open" , Date:"20 June 2022" ,  Phone:"null",  PWLValue:"." },
  {id:"3", ContactName: "Guneet Makkar" , Status:"Open" , Date:"10 June 2022", Phone:"null" ,  PWLValue:"." },
  {id:"4", ContactName : "John Smith" , Status:"Open" , Date:"23 June 2022", Phone:"null" ,  PWLValue:"." },
  {id:"5", ContactName : "San Bhaskaran" , Status:"Open" , Date:"25 June 2022" ,  Phone:"null" ,  PWLValue:"."},
  {id:"6", ContactName : "Shelina Kyle" , Status:"Open" , Date:"4 June 2022", Phone:"null" ,  PWLValue:"." },
  {id:"7", ContactName : "Shibhu p" , Status:"Open" , Phone:"9867543467", Date:"22 June 2022" , Value:"$25000/-" , LatestDeaL:"Second Deal",  PWLValue:"$850,000 /-" },
  {id:"8", ContactName : "Spjain" , Status:"Open" , Date:"26 June 2022" ,  Phone:"null"  ,  PWLValue:"."},
];
