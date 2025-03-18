export const getChampionRotation = async () => {
  const response = await fetch("/api/rotation");
  const data = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data;
};

export const getChampionList = async () => {
  const response = await fetch("/api/champion");
  const data = await response.json();

  return data;
};
