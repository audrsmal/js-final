export const buildScreen = async () => {
  const response = await fetch(
    "https://6960b2dee7aa517cb796d5c0.mockapi.io/champagnes"
  );

  const champagne = await response.json();

  return champagne;
};
