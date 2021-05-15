import ApiUrl from '@api/url';
import { post } from '@utils/request';

/**
 * 获取用户菜单
 * @param params
 */
export const getUserMenus = async () => {
  console.log(' getUserMenus >>>>>>>>>> ');
  return [
    {
      id: 2544,
      name: '银行账户报表',
      code: 'ETMS_RS_ACCOUNTSTATISTICS',
      type: 'MENU',
      url: '/statistic',
      parentId: 2543,
      permission: 'ETMS_RS_ACCOUNTSTATISTICS',
      order: 1,
      icon: null,
      target: '_self',
      visible: true,
      appId: 60003,
      tenantId: 0,
      children: [
        {
          id: 2548,
          name: '账户总览',
          code: 'ETMS_RS_ACCOUNTSTATISTICS_ALL',
          type: 'MENU',
          url: '/statistic/query',
          parentId: 2544,
          permission: 'ETMS_RS_ACCOUNTSTATISTICS_ALL',
          order: 1,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2799,
          name: '账户汇总查询',
          code: 'ETMS_RS_ACCOUNTSTATISTICS_TOTAL',
          type: 'MENU',
          url: '/statistic/total',
          parentId: 2544,
          permission: 'ETMS_RS_ACCOUNTSTATISTICS_TOTAL',
          order: 2,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2800,
          name: '账户明细查询',
          code: 'ETMS_RS_ACCOUNTSTATISTICS_ITEM',
          type: 'MENU',
          url: '/statistic/detail',
          parentId: 2544,
          permission: 'ETMS_RS_ACCOUNTSTATISTICS_ITEM',
          order: 3,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2801,
          name: '账户变动查询',
          code: 'ETMS_RS_ACCOUNTSTATISTICS_CHAGE',
          type: 'MENU',
          url: '/statistic/change',
          parentId: 2544,
          permission: 'ETMS_RS_ACCOUNTSTATISTICS_CHAGE',
          order: 4,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
      ],
    },
    {
      id: 2545,
      name: '银行对账单管理',
      code: 'ETMS_RS_BANKSTATEMENT',
      type: 'MENU',
      url: '/statement',
      parentId: 2543,
      permission: 'ETMS_RS_BANKSTATEMENT',
      order: 2,
      icon: null,
      target: '_self',
      visible: true,
      appId: 60003,
      tenantId: 0,
      children: [
        {
          id: 2549,
          name: '对账单查询',
          code: 'ETMS_RS_BANKSTATEMENT_LIST',
          type: 'MENU',
          url: '/statement/list',
          parentId: 2545,
          permission: 'ETMS_RS_BANKSTATEMENT_LIST',
          order: 1,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2802,
          name: '查看界面',
          code: 'ETMS_RS_BANKSTATEMENT_DETAIL',
          type: 'MENU',
          url: '/statement/query',
          parentId: 2545,
          permission: 'ETMS_RS_BANKSTATEMENT_DETAIL',
          order: 2,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2803,
          name: '对账单上传',
          code: 'ETMS_RS_BANKSTATEMENT_UPLOAD',
          type: 'MENU',
          url: '/statement/upload',
          parentId: 2545,
          permission: 'ETMS_RS_BANKSTATEMENT_UPLOAD',
          order: 3,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2804,
          name: '对账单登记检查',
          code: 'ETMS_RS_BANKSTATEMENT_CHECK',
          type: 'MENU',
          url: '/statement/check',
          parentId: 2545,
          permission: 'ETMS_RS_BANKSTATEMENT_CHECK',
          order: 4,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
      ],
    },
    {
      id: 2546,
      name: '余额调节表管理',
      code: 'ETMS_RS_BANKRECONCILIATION',
      type: 'MENU',
      url: '/reconciliation',
      parentId: 2543,
      permission: 'ETMS_RS_BANKRECONCILIATION',
      order: 3,
      icon: null,
      target: '_self',
      visible: true,
      appId: 60003,
      tenantId: 0,
      children: [
        {
          id: 2550,
          name: '调节表查询',
          code: 'ETMS_RS_BANKRECONCILIATION_LIST',
          type: 'MENU',
          url: '/reconciliation/list',
          parentId: 2546,
          permission: 'ETMS_RS_BANKRECONCILIATION_LIST',
          order: 1,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2805,
          name: '调节项明细查询',
          code: 'ETMS_RS_BANKRECONCILIATION_DETAIL',
          type: 'MENU',
          url: '/reconciliation/query',
          parentId: 2546,
          permission: 'ETMS_RS_BANKRECONCILIATION_DETAIL',
          order: 2,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2806,
          name: '调节表上传',
          code: 'ETMS_RS_BANKRECONCILIATION_UPLOAD',
          type: 'MENU',
          url: '/reconciliation/upload',
          parentId: 2546,
          permission: 'ETMS_RS_BANKRECONCILIATION_UPLOAD',
          order: 3,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2807,
          name: '调节表平衡分析',
          code: 'ETMS_RS_BANKRECONCILIATION_BALANCE',
          type: 'MENU',
          url: '/reconciliation/balance',
          parentId: 2546,
          permission: 'ETMS_RS_BANKRECONCILIATION_BALANCE',
          order: 4,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2808,
          name: '调节项跟进',
          code: 'ETMS_RS_BANKRECONCILIATION_FOLLOW',
          type: 'MENU',
          url: '/reconciliation/follow',
          parentId: 2546,
          permission: 'ETMS_RS_BANKRECONCILIATION_FOLLOW',
          order: 5,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2809,
          name: '调节表登记检查',
          code: 'ETMS_RS_BANKRECONCILIATION_CHECK',
          type: 'MENU',
          url: '/reconciliation/check',
          parentId: 2546,
          permission: 'ETMS_RS_BANKRECONCILIATION_CHECK',
          order: 6,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2810,
          name: '期间管理',
          code: 'ETMS_RS_BANKRECONCILIATION_PERIOD',
          type: 'MENU',
          url: '/reconciliation/period',
          parentId: 2546,
          permission: 'ETMS_RS_BANKRECONCILIATION_PERIOD',
          order: 7,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
      ],
    },
    {
      id: 2547,
      name: '借阅管理',
      code: 'ETMS_RS_BORROWINGMANAGEMENT',
      type: 'MENU',
      url: '/borrowing',
      parentId: 2543,
      permission: 'ETMS_RS_BORROWINGMANAGEMENT',
      order: 4,
      icon: null,
      target: '_self',
      visible: true,
      appId: 60003,
      tenantId: 0,
      children: [
        {
          id: 2551,
          name: '借阅申请',
          code: 'ETMS_RS_BORROWINGMANAGEMENT_APPLY',
          type: 'MENU',
          url: '/borrowing/apply',
          parentId: 2547,
          permission: 'ETMS_RS_BORROWINGMANAGEMENT_APPLY',
          order: 1,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
        {
          id: 2556,
          name: '借阅记录查询',
          code: 'ETMS_RS_BORROWINGMANAGEMENT_QUERY',
          type: 'MENU',
          url: '/borrowing/query',
          parentId: 2547,
          permission: 'ETMS_RS_BORROWINGMANAGEMENT_QUERY',
          order: 2,
          icon: null,
          target: '_self',
          visible: true,
          appId: 60003,
          tenantId: 0,
          children: [],
        },
      ],
    },
  ];

  // const res = (await post(ApiUrl.getUserMenus, {})) as any;
  // console.log(' getUserMenus >>>>>>>>>> ', res.data);
  // if (res.data.code == 2000) {

  //   return res.data.data;
  // } else {
  //   return [];
  // }
};

/**
 * 获取用户角色
 * @param params
 */
export const getUserRole = async () => {
  console.log(' getUserRole >>>>>>>>>> ');
  return {
    id: 123123123,
    name: '张金城',
    code: '编码',
    description: '描述',
    category: '分组',
    sortOrder: '排序',
  };
  // const res = (await post(ApiUrl.getUserRole, {})) as any;
  // console.log(' getUserRole >>>>>>>>>> ', res.data);
  // if (res.data.code == 2000) {
  //   return res.data.data;
  // } else {
  //   return [];
  // }
};

/**
 * 获取用户信息
 * @param params
 */
export const getUser = async () => {
  console.log(' getUser >>>>>>>>>> ');
  return {
    id: 123123123,
    name: '张金城',
    fullName: '张金城（skyinzhang）',
  };
  // const res = (await post(ApiUrl.getUser, {})) as any;
  // console.log(' getUser >>>>>>>>>> ', res.data);
  // if (res.data.code == 2000) {
  //   return res.data.data;
  // } else {
  //   return [];
  // }
};

/**
 * 登陆获取Tiket
 * @param {
 *  sysId [1：登入，2登出]
 *  url [跳转的URL]
 * }
 * @return data [还有ticket的url]
 */
declare interface GetLoginUrlType<T = any> {
  sysId: number;
  url: string;
}
export async function getLoginUrl<T>(params: GetLoginUrlType) {
  return (await post(ApiUrl.getLoginUrl, params)) as any;
}

/**
 * 获取TOKEN
 * @param {
 *  ticket [TICKET]
 * }
 * @return data [组装的TOKEN对象]
 */
declare interface GetTokenByTicketType<T = any> {
  ticket: string;
}
export async function getTokenByTicket(params: GetTokenByTicketType) {
  return (await post(ApiUrl.getTokenByTicket, params)) as any;
}
