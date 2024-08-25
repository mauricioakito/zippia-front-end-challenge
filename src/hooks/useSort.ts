import { useState } from 'react'
import { IUserArray } from '../types/user';

export const useSort = () => {

  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>(null);

  const handleSort = (column: string) => {
    setSortColumn(column);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortData = (userArray: IUserArray[], column: string, order: string) => {
    return userArray.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return order === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return order === "asc" ? valueA - valueB : valueB - valueA;
      }
    });
  };
  
  return {
    handleSort,
    sortData,
    sortColumn,
    sortOrder
  }
}


