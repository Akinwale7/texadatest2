export const FETCH_PRODS = 'fetch_prods';
export const CREATE_PROD = 'create_prod';
export const UPDATE_PROD = 'update_prod';
export const FETCH_PROD = 'fetch_prod';
export const DELETE_PROD = 'delete_post';
export const UPLOAD_FILE = 'upload_file';
export const FETCH_PROD_DATE_TIME = 'fetch_prod_date_time';

import axios from 'axios';

const ROOT_URL ='http://localhost:5000';

export function  fetchProds(){
  const request = axios.get(`${ROOT_URL}/products/`);
  return {
    type: FETCH_PRODS,
    payload: request
  };
}

export function createProd(values, callback){
  const request = axios.post(`${ROOT_URL}/products/`, values)
  .then(() => callback());

  return {
    type: CREATE_PROD,
    payload: request
  }

}

export function updateProd(values, id, callback){
  const request = axios.put(`${ROOT_URL}/product/${id}`, values)
  .then(() => callback());

  return {
    type: UPDATE_PROD,
    payload: request
  }

}

export function fetchProd(id){
  const request = axios.get(`${ROOT_URL}/product/${id}`);
  return {
    type: FETCH_PROD,
    payload: request
  }
}

export function fetchProdDateTime(desc,datetime, callback){
  const request = axios.get(`${ROOT_URL}/products/${desc}/${datetime}`);
  return {
    type: FETCH_PROD_DATE_TIME,
    payload: request
  }
}

export function deleteProd(id,callback){
  const request = axios.delete(`${ROOT_URL}/product/${id}`)
  .then(() => callback());
  return {
    type: DELETE_PROD,
    payload: id
  }
}

export function uploadFile(url, formData, config, callback){
  const request = axios.post(url, formData, config)
      .then(() => callback());

      return {
        type: UPLOAD_FILE,
        payload: request
      }
}

export function clearState(){
  return {
    type: "clearState",
    payload: {}
  }
}
