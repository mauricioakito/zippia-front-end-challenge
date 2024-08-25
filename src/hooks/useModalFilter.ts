import { useEffect, useMemo, useState } from 'react'
import { useQuery } from './useQuery'
import { useStore } from '../store/useStore'
import { TUserItemProps } from '../types/user'

export const useModalFilter = () => {

  const result = useQuery()
  const {fetchSelectedUser} = useStore()
  const [user, setUser] = useState<TUserItemProps[]>()

  useEffect(() => {
    result.then((request) => {
      setUser({...request.data});
  })
  }, [fetchSelectedUser]);

  const filterSelectedUser = useMemo(() => {
    const searchTermLowerCase = fetchSelectedUser.toLowerCase();

    const iteratedObject = user && Object.values(user).filter((users) => {
      const userProperties = users.name ? [users.name] : []

      return userProperties.find((property) => 
          property.toLowerCase().includes(searchTermLowerCase)
      );
    });

    return iteratedObject
    
  }, [fetchSelectedUser]);

  return {
    filterSelectedUser
  }
}
