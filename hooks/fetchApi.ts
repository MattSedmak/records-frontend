export const getStrapiUrl = (path = '') => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
};

export const fetchApi = async (path: string) => {
  const requesturl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
  const response = await fetch(requesturl);
  const data = await response.json();

  console.log(requesturl);
  return data;
};
