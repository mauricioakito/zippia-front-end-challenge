import { useEffect, useState, useMemo } from 'react';
import { TUserItemProps } from '../types/user';
import { useQuery } from './useQuery';
import { useStore } from '../store/useStore';

interface IUserTableProps {
  data: []
}

export const useUserTable = () => {
  const result = useQuery()
  const {setStatusCode, fetchUsers} = useStore()
  const [query, setQuery] = useState<IUserTableProps>({
    data: []
  })

  useEffect(() => {
    result.then((request) => {
      setQuery({
        data: {...request.data}
      });
      setStatusCode(request.statusCode)
  })
  }, [fetchUsers]);

  const userArray = useMemo(() => {
   const iteratedObject = Object.values(query.data).map((item: TUserItemProps) => {
      const { id, name, username, email, phone, address: { city }, company: { name: companyName } } = item;

      return {
        id,
        name,
        username,
        email,
        phone,
        city,
        companyName
      }

    });

    return iteratedObject

  }, [query.data]);

  // const userArray = Object.values(query.data).map((item: TUserItemProps) => {
  //   const { id, name, username, email, phone, address: { city }, company: { name: companyName } } = item;

  //   return {
  //     id,
  //     name,
  //     username,
  //     email,
  //     phone,
  //     city,
  //     companyName
  //   }
  // })

  return userArray

}
