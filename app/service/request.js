
import config from '../config';

function filterJSON(res) {
  try {
    if (res.headers.get('content-length') > 0) {
      return res.json();
    }
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.reject();
}

function filterStatus(res) {
  if (res.ok) {
    return res;
  } else {
    return Promise.reject(res);
  }
}

function timeoutFetch(ms, promise) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('网络出现问题，请重新连接！'));
    }, ms);
    promise.then((res) => {
      clearTimeout(timer);
      resolve(res);
    }, (err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

export function request(uri, type = 'POST', headers = {}, data = '') {
  let fetchOption = {
    method: type,
    headers: headers
  };

  if (type === 'POST') {
    fetchOption.body = data;
  }

  if (__DEV__) {
    console.log('fetch data from uri:', uri);
    console.log('headers:', headers);
    console.log('data:', data);
  }
  return timeoutFetch(config.connect.timeout, fetch(uri, fetchOption))
    .then(filterStatus)
    .then(filterJSON);
}
