import { BASE_URL, responseHandler } from "./helper";
export const listService = {
  fetchList,
  fetchListDetail,
};
async function fetchList(data) {
  const {
    skip,
    take,
    sort,
    sortDirection,
    minYear,
    maxYear,
    minDate,
    maxDate,
  } = data;

  let params = [];
  if (sort || sort == "0") params.push(`sort=${sort}`);
  if (sortDirection || sortDirection == "0")
    params.push(`sortDirection=${sortDirection}`);
  if (skip || skip == "0") params.push(`skip=${skip}`);
  if (take) params.push(`take=${take}`);
  if (minYear) params.push(`minYear=${minYear}`);
  if (maxYear) params.push(`maxYear=${maxYear}`);
  if (minDate) params.push(`minDate=${minDate}`);
  if (maxDate) params.push(`maxDate=${maxDate}`);

  const paramsStr = params.join("&");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const result = await fetch(
    `${BASE_URL}/listing?${paramsStr}`,
    requestOptions
  );
  return responseHandler(result);
}
async function fetchListDetail(id) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const result = await fetch(`${BASE_URL}/detail?id=${id}`, requestOptions);
  return responseHandler(result);
}
