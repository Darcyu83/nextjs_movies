import { useContext } from 'react';
import { ConfigContext } from '../ConfigContextProvider';

const useConfigContext = () => {
  const configState = useContext(ConfigContext);

  if (!configState) throw new Error('Cannot find ConfigContextState');
  return configState;
};

export default useConfigContext;
