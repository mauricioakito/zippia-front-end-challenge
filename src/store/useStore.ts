import {create} from 'zustand';
import { IUserArray, TUserItemProps } from '../types/user';

interface State {
  filteredUsers: IUserArray[];
  userData: TUserItemProps[];
  fetchUsers: boolean
  inputSearch: string
  statusCode: number
  modalState: boolean
  fetchSelectedUser: string
  setFetchUsers: () => void;
  setUserData: (userData: TUserItemProps[]) => void;
  setInputSearch: (inputSearch: string) => void;
  setStatusCode: (statusCode: number) => void;
  setModalState: (modalState: boolean) => void;
  setFetchSelectedUser: (fetchSelectedUser: string) => void;
}

export const useStore = create<State>((set) => ({
  filteredUsers: [],
  userData: [],
  fetchUsers: false,
  inputSearch: '',
  statusCode: 0,
  modalState: false,
  fetchSelectedUser: '',
  setFetchUsers: () => set(() => ({ fetchUsers: true })),
  setUserData: () => set(({userData}) => ({ userData: {...userData} })),
  setInputSearch: (inputSearch: string) => set(() => ({ inputSearch: inputSearch })),
  setStatusCode: (statusCode: number) => set(() => ({ statusCode: statusCode })),
  setModalState: (modalState: boolean) => set(() => ({ modalState: modalState })),
  setFetchSelectedUser: (fetchSelectedUser: string) => set(() => ({ fetchSelectedUser: fetchSelectedUser })),
}));