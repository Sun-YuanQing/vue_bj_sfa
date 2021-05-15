import * as Cookies from 'js-cookie';
import request from './axios';
import statusCode from './statusCode';

/**
 * 返回类型
 */
declare interface RtnType<T = any> {
  code: number;
  message: string;
  data: T;
  timestamp?: number;
}

/**
 * post 请求
 * @url  url [请求链接]
 * @params  params [参数]
 * @params  allowUnToken [是否允许为空]
 * @params  fn [回调函数]
 * @return [返回值]
 */
export async function post(url: string, params: any, allowUnToken?: boolean) {
  let rtn: RtnType = {
    code: 50001,
    message: statusCode[50001],
    data: {},
  };
  // 获取cookie中的token
  const token = Cookies.get('token') || '';
  let isCanReq = false;
  // 判断 cookie中 是否有 token
  if (token) {
    isCanReq = true;
  }
  // 允许 没有token
  if (allowUnToken) {
    isCanReq = true;
  }
  // 判断 参数是否为空
  if (!params) {
    params = {};
  }
  if (isCanReq) {
    // // console.log("post >>>>> params: ", params);
    // // console.log('post >>>>> token: ', token);
    const rtnData: any = await request.post(url, params, token);
    console.log('post >>>>> rtnData: ', rtnData);

    if (rtnData.status == 200) {
      rtn = rtnData.data;
    } else {
      if (rtnData.data.message) rtn.message = rtnData.data.message;
    }
  }
  // // console.log("post >>>>> rtn: ", rtn);
  return rtn;
}

/**
 * formdata 请求
 * @url  url [请求链接]
 * @params  params [参数]
 * @params  allowUnToken [是否允许为空]
 * @params  fn [回调函数]
 * @return [返回值]
 */
export async function upload(url: any, params: any, allowUnToken?: boolean) {
  let rtn: RtnType = {
    code: 90002,
    message: statusCode[90002],
    data: {},
  };
  console.log('上传参数：', params);
  const token = Cookies.get('token') || '';
  let isCanReq = false;
  // 判断 cookie中 是否有 token
  if (token) {
    isCanReq = true;
  }
  // 允许 没有token
  if (allowUnToken) {
    isCanReq = true;
  }
  // 判断 参数是否为空
  if (!params) {
    params = {};
  }

  // 将参数转换为 fromdata 类型
  const formData = new FormData();
  formData.append('files', params);

  if (isCanReq) {
    // console.log('file  >>>>>>>>> isCanReq: ', isCanReq);
    // console.log('file  >>>>>>>>> formData: ', formData);
    const rtnData: any = await request.file(url, formData, token);
    // console.log('file  >>>>>>>>> rtnData: ', rtnData);

    if (rtnData.data) {
      rtn = rtnData.data;
    } else {
      rtn;
    }
  }
  // // console.log("file >>>>> rtn: ", rtn);
  return rtn;
}

/**
 * 下载 请求
 * @url  url [请求链接]
 * @params  params [参数]
 * @params  allowUnToken [是否允许为空]
 * @params  fn [回调函数]
 * @return [返回值]
 */
export async function download(url: any, params: any, allowUnToken?: boolean) {
  const rtn: RtnType = {
    code: 90004,
    message: statusCode[90004],
    data: {},
  };
  const token = Cookies.get('token') || '';
  let isCanReq = false;
  // 判断 cookie中 是否有 token
  if (token) {
    isCanReq = true;
  }

  // 允许 没有token
  if (allowUnToken) {
    isCanReq = true;
  }
  // 判断 参数是否为空
  if (!params) {
    params = {};
  }
  try {
    const rtnData: any = await request.fileDownload(url, params, token);
    if (rtnData.data) {
      rtn.code = 2000;
      rtn.message = statusCode[2000];
    } else {
      rtn;
    }
  } catch (error) {
    // console.error('fileDownload 请求异常 >>>>>>>>：', error);
  }
  // // console.log("fileDownload >>>>> rtn: ", rtn);
  return rtn;
}

/**
 * get 请求
 * @url  url [请求链接]
 * @params  params  [参数]
 * @params  allowUnToken [是否允许为空]
 * @params  repType [表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream']
 * @params  fn [回调函数]
 * @return [返回值]
 */
export async function get(url: any, params: any, allowUnToken?: boolean, repType?: string) {
  let rtn: RtnType = {
    code: 90003,
    message: statusCode[90003],
    data: {},
  };
  // token 为空 时只有登录接口可用
  const token = Cookies.get('token') || '';
  let isCanReq = false;
  // 判断 cookie中 是否有 token
  if (token) {
    isCanReq = true;
  }
  // 允许 没有token
  if (allowUnToken) {
    isCanReq = true;
  }
  // 默认 json
  if (!repType) {
    repType = 'json';
  }
  // 判断 参数是否为空
  if (!params) {
    params = {};
  }
  if (isCanReq) {
    const rtnData: any = await request.get(url, params, token);
    if (rtnData.data) {
      rtn = rtnData.data;
    } else {
      rtn;
    }
  }
  // console.log('get >>>>> rtn: ', rtn);
  return rtn;
}
