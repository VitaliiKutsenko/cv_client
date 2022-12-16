import { useEffect, useState } from 'react';

export const useMount = (opened, ms = 300) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (opened && !mount) {
      // setTimeout(() => {
      setMount(true);
      // }, ms);
    } else if (!opened && mount) {
      setTimeout(() => {
        setMount(false);
      }, ms);
    }
  }, [opened]);

  return [mount];
};
