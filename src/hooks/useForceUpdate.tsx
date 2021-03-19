import React, {useState, useCallback} from 'react'

export const useForceUpdate = () => {
  const [, forceUpdate] = useState<boolean>(false);

  return useCallback(() => {
    forceUpdate((s) => !s);
  }, []);
}