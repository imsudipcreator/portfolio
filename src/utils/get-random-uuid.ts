export const getRandomUUID = () => {
  const rand = () => Math.floor(100 + Math.random() * 900);
  return `ims-${rand()}-${rand()}`;
};
