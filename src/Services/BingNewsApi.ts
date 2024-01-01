const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';
const headers = {
  'X-RapidAPI-Key': '5811369c61msh422c3eb262c22c4p1943b9jsne7dc9874dd46',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
};

export const getCoinDeskNews = async () => {
  const options = {
    method: 'GET',
    headers: headers,
  };

  try {
    const response = await fetch(baseUrl, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
