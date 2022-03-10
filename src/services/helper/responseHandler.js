export const responseHandler = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText,
        message: data.message ? data.message : "Undefined Error",
      });
    }
    return data;
  });
};
