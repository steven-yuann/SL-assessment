import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

export const Table = ({data}) =>{
  const columnNames = Object.keys(data[0])
  const displayColumnNames = [];
  
  //change camelCase to word with spaces, capitalize all letters
  for (let i=0; i<columnNames.length; i++){
    const name = columnNames[i];
    displayColumnNames.push(name.replace(/([A-Z])/g, ' $1').trim().toUpperCase())
  }

  // memoize column data
  const columns = useMemo(
    () => {
      const accessors = []
      for (let i=0; i<columnNames.length; i++){
        accessors.push({
          accessorKey: columnNames[i],
          header: displayColumnNames[i],
          size: 150
        })
      }
      return accessors
    }, []
  );

  const table = useMaterialReactTable({
    columns, 
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    
  });
  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  )
}