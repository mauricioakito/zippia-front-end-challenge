import {create} from 'zustand';
import { IUserArray, TUserItemProps } from '../types/user';

interface State {
  filteredUsers: IUserArray[];
  userData: TUserItemProps[];
  fetchUsers: boolean
  inputSearch: string
  statusCode: number
  setFetchUsers: () => void;
  setUserData: (userData: TUserItemProps[]) => void;
  setInputSearch: (inputSearch: string) => void;
  setStatusCode: (statusCode: number) => void;
}

export const useStore = create<State>((set) => ({
  filteredUsers: [],
  userData: [],
  fetchUsers: false,
  inputSearch: '',
  statusCode: 0,
  setFetchUsers: () => set(() => ({ fetchUsers: true })),
  setUserData: () => set(({userData}) => ({ userData: {...userData} })),
  setInputSearch: (inputSearch: string) => set(() => ({ inputSearch: inputSearch })),
  setStatusCode: (statusCode: number) => set(() => ({ statusCode: statusCode })),
}));