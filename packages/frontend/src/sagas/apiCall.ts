import axios, { AxiosResponse, Method } from "axios";
import urlcat from "urlcat";
import { call, put } from "redux-saga/effects";

import { requestEnd, RequestNames, requestStart } from "../features/ui/uiSlice";

const request = axios.create({
  baseURL: "http://localhost:8080/",
}).request;

interface ApiCallOptions<D> {
  method?: Method;
  data?: D;
  params?: Record<string, unknown>;
  name?: RequestNames;
}

function* apiCall<T = any, D = any>(
  url: string,
  { method = "get", params = {}, data, name }: ApiCallOptions<D> = {}
) {
  if (!url.startsWith("/")) {
    throw new Error("Invalid url format");
  }

  if (name) {
    yield put(requestStart({ name }));
  }

  const response: AxiosResponse<T, D> = yield call(request, {
    url: urlcat(url, params),
    method,
    data,
  });

  if (name) {
    yield put(requestEnd({ name }));
  }

  return response;
}

export default apiCall;
