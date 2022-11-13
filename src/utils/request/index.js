// import axios from "axios";
import request from "./config";
import { settings } from "../network/network";

export const apiPost = (url, data) => {
  let new_url = settings.BASE_URL + url;
  return request({
    url: new_url,
    method: "post",
    data: data,
  });
};

export const apiGet = (url) => {
  return request({
    url: url,
    method: "get",
  });
};
