import { useStore } from '../store/useStore';
import { useUserTable } from './useUserTable';

export const useFilter = () => {

  const { inputSearch } = useStore();
  const userArray = useUserTable();

  const filterUsers = () => {
    const searchTermLowerCase = inputSearch.toLowerCase();

    return userArray.filter((user) => {
      const userProperties = [user.name];
      return userProperties.some((property) =>
        property.toLowerCase().includes(searchTermLowerCase)
      );
    });
  };

  return {
    filterUsers
  }
}
