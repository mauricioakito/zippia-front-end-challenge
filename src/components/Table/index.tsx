/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import { useUserTable } from "../../hooks/useUserTable";
import styles from "./Table.module.scss";
import { IUserArray } from "../../types/user";
import { FIELDS } from "./Constrains";

export const Table = () => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>(null);

  const { fetchUsers, inputSearch } = useStore();
  const userArray = useUserTable();
  const [user, setUser] = useState<IUserArray[]>();

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

  const handleSort = (column: string) => {
    setSortColumn(column);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filterUsers = () => {
    const searchTermLowerCase = inputSearch.toLowerCase();

    return userArray.filter((user) => {
      const userProperties = [user.name];
      return userProperties.some((property) =>
        property.toLowerCase().includes(searchTermLowerCase)
      );
    });
  };

  useEffect(() => {
    const filteredAndSortedData =
      sortColumn && sortOrder
        ? sortData(filterUsers(), sortColumn, sortOrder)
        : filterUsers();
    if (fetchUsers) {
      setUser(filteredAndSortedData);
    }
  }, [inputSearch, sortColumn, sortOrder]);

  useEffect(() => {
    setUser(userArray);
  }, [fetchUsers]);

  // useEffect(() => {
  //   if (fetchUsers) {
  //     setUser(filterUsers);
  //   }
  // }, [inputSearch]);

  return (
    <table className={styles.customTable}>
      <thead>
        <tr>
          {FIELDS.map((item) => {
            const { columnFilter, headerName } = item;
            return (
              <th
                className={styles.customTableHeader}
                key={columnFilter}
                onClick={() => fetchUsers && handleSort(columnFilter)}
              >
                {headerName}
                {sortColumn === columnFilter &&
                  (sortOrder === "asc" ? "▲" : "▼")}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {user &&
          user.map((item: IUserArray) => {
            const { id, name, username, email, phone, city, companyName } =
              item;
            return (
              <tr key={id}>
                <th>{name}</th>
                <th>{username}</th>
                <th>{email}</th>
                <th>{phone}</th>
                <th>{city}</th>
                <th>{companyName}</th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
