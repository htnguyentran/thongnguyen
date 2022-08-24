import axiosClient from 'utils/axiosClient';

export const postApis = {
  getListPost(params) {
    // const { token = "dasdasdas" } = params;
    const url = '/products';

    return axiosClient.get(url, {
      params,
      // headers: { Authorization: `Bearer ${token}` },
    });
  },
};
