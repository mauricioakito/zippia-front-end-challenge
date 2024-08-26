/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import { useUserTable } from "../../hooks/useUserTable";
import styles from "./Table.module.scss";
import { IUserArray } from "../../types/user";
import { FIELDS } from "./Constrains";
import { useSort } from "../../hooks/useSort";
import { useFilter } from "../../hooks/useFilter";

export const Table = () => {
  const { fetchUsers, inputSearch, setFetchSelectedUser, setModalState } = useStore();
  const userArray = useUserTable();
  const [user, setUser] = useState<IUserArray[]>();
  const { handleSort, sortData, sortColumn, sortOrder } = useSort();
  const { filterUsers } = useFilter();

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
    setTimeout(() => {
      setUser(userArray);
    }, 3000);
  }, [fetchUsers]);

  const handleUserInfo = (name: string) => {
    setFetchSelectedUser(name)
    setModalState(true)
  }

  if (fetchUsers && !user) return <div className={styles.loader}></div>

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.customTable}>
        <thead>
          <tr>
            {fetchUsers && user.length > 0 && FIELDS.map((item) => {
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
                <tr className={styles.userInforTable} key={id} onClick={() => handleUserInfo(name)}>
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
    </div>
  );
};
