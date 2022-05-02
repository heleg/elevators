import axios, { AxiosRequestConfig, Method } from "axios";
import urlcat from "urlcat";
import { call, put, StrictEffect } from "redux-saga/effects";

import { requestEnd, RequestNames, requestStart } from "../features/ui/uiSlice";

const request = axios.create({
  baseURL: "http://localhost:8080/",
}).request;

interface ApiCallOptions {
  method?: Method;
  data?: AxiosRequestConfig["data"];
  params?: Record<string, unknown>;
  name?: RequestNames;
}

function* apiCallFn(
  url: string,
  { method = "get", params, data, name }: ApiCallOptions = {}
): Generator<StrictEffect> {
  if (!url.startsWith("/")) {
    throw new Error("Invalid url format");
  }

  if (name) {
    yield put(requestStart({ name }));
  }

  const response = yield call(request, {
    url: urlcat(url, params),
    method,
    data,
  });

  if (name) {
    yield put(requestEnd({ name }));
  }

  return response;
}

const apiCall = (url: string, apiCallOptions?: ApiCallOptions) =>
  call<typeof apiCallFn>(apiCallFn, url, apiCallOptions);

export default apiCall;
