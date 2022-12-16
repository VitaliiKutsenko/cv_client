export const idGenerator = arr => {
  return (
    Math.max(
      ...arr.reduce((acc, item) => {
        return [...acc, item.id];
      }, [])
    ) + 1
  );
};

export const randomColor = opacity => {
  const min = 0;
  const max = 255;
  const color = () => Math.floor(min + Math.random() * (max + 1 - min));

  return `rgba(${color()}, ${color()}, ${color()}, ${opacity})`;
};

export function debounce(func, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
