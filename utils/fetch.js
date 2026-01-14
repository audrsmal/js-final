export const getAllChampagnes = async () => {
  const response = await fetch(
    "https://6960b2dee7aa517cb796d5c0.mockapi.io/champagnes"
  );

  const champagne = await response.json();

  return champagne;
};

export const getChampagneById = async (id) => {
  const response = await fetch(
    `https://6960b2dee7aa517cb796d5c0.mockapi.io/champagnes/${id}`
  );

  const champagne = await response.json();

  return champagne;
};

export const deleteChampagneById = async (id) => {
  const response = await fetch(
    `https://6960b2dee7aa517cb796d5c0.mockapi.io/champagnes/${id}`,
    {
      method: "DELETE",
    }
  );
  const champagne = await response.json();
  return champagne;
};
