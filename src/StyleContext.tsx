import {ReactNode, createContext} from 'react';

const context = {
  bg: 'red',
  color: 'white',
};
type MyContextType = {
  bg: string;
  color: string;
};
export const MyContext = createContext<MyContextType>(context);

type StyleProviderProps = {
  children: ReactNode;
};
export const StyleProvider = ({children}: StyleProviderProps) => {
  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};
