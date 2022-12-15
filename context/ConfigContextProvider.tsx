import { createContext } from 'react';
import { PREFIX_HOME, PREFIX_POSTER } from '../config/config';
import { IConfigContext } from './types';

export const ConfigContext = createContext<IConfigContext | null>(null);

const ConfigContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigContext.Provider
      value={{ PREFIX_HOME: PREFIX_HOME, PREFIX_POSTER: PREFIX_POSTER }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
