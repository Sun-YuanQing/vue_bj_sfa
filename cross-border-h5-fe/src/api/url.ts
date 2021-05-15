/**
 * 所有 url 都放在这里统一管理
 */

const ApiUrl = {
  // ********* 系统管理 *********
  addInvoiceToOcr: '/oversea/reimb/addInvoice', //  添加发票做 ORC 识别
  confirmAddInvoice: '/oversea/reimb/confirmAddInvoice', // 添加发票到票夹
  getInvoiceList: '/oversea/reimb/getInvoiceList', // 获取发票列表
  delInvoiceByGuid: '/oversea/reimb/delInvoiceByGuidList', // 根据 guid 删除发票
  getUser: '', //  获取用户信息
  getLoginUrl: '',
  getTokenByTicket: '',
};

export default ApiUrl;
