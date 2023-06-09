const BASE_URL = 'http://192.168.209.153:8000';
const AUTH_PATH = '/api/auth';
const USERS_PATH = '/api/users';
const ADMIN_PATH = '/api/admin';
const BILLS_PATH = '/api/bills';
const TRANSACTIONS_PATH = '/api/transactions';
const CURRENCY_PATH = '/api/currency';
const PROSPECTS_PATH = '/api/prospects';
const CONVERSATION_PATH = '/api/conversations';
const CAMPAIGNS_PATH = '/api/campaigns';
const SEQUENCE_PATH = '/api/sequences';

export default class ApiEndpoint {
  getBasePath = () => {
    return `${BASE_URL}`;
  };

  getLoginPath = () => {
    return `${BASE_URL}${AUTH_PATH}/login`;
  };

  getRegisterPath = () => {
    return `${BASE_URL}${AUTH_PATH}/register`;
  };

  getLogoutPath = () => {
    return `${BASE_URL}${AUTH_PATH}/logout`;
  };

  getUsersPath = () => {
    return `${BASE_URL}${USERS_PATH}`;
  };

  getIsLoginPath = login => {
    return `${BASE_URL}${USERS_PATH}/${login}/isLogin`;
  };

  getIsEmailPath = email => {
    return `${BASE_URL}${USERS_PATH}/${email}/isEmail`;
  };

  getBillsPath = () => {
    return `${BASE_URL}${BILLS_PATH}`;
  };

  getSearchPath = accountBill => {
    return `${BASE_URL}${BILLS_PATH}/${accountBill}/search`;
  };

  getIsAccountBillPath = accountBill => {
    return `${BASE_URL}${BILLS_PATH}/${accountBill}/isAccountBill`;
  };

  getIsAmountMoneyPath = amountMoney => {
    return `${BASE_URL}${BILLS_PATH}/${amountMoney}/isAmountMoney`;
  };

  getTransactionsPath = (limit = '') => {
    return `${BASE_URL}${TRANSACTIONS_PATH}/${limit}`;
  };

  getConfirmPath = () => {
    return `${BASE_URL}${TRANSACTIONS_PATH}/confirm`;
  };

  getCreatePath = () => {
    return `${BASE_URL}${TRANSACTIONS_PATH}/create`;
  };

  getRecipientPath = () => {
    return `${BASE_URL}${TRANSACTIONS_PATH}/recipient`;
  };

  getSenderPath = () => {
    return `${BASE_URL}${TRANSACTIONS_PATH}/sender`;
  };

  getAuthorizationKeyPath = id => {
    return `${BASE_URL}${TRANSACTIONS_PATH}/${id}/key`;
  };

  getCurrencyPath = () => {
    return `${BASE_URL}${CURRENCY_PATH}`;
  };

  getNotificationsPath = (offset = '') => {
    return `${BASE_URL}${ADDITIONALS_PATH}/notifications/${offset}`;
  };

  getIsNotificationPath = () => {
    return `${BASE_URL}${ADDITIONALS_PATH}/notifications/isNotification`;
  };

  getMessagesPath = (language = '') => {
    return `${BASE_URL}${ADDITIONALS_PATH}/messages/${language}`;
  };

  getIsMessagePath = () => {
    return `${BASE_URL}${ADDITIONALS_PATH}/messages/isMessage`;
  };

  getCSVSubmitPath = () => {
    return `${BASE_URL}${PROSPECTS_PATH}/import`;
  };

  getLoadProspectsPath = () => {
    return `${BASE_URL}${PROSPECTS_PATH}/read`;
  };

  getCreateProspectPath = () => {
    return `${BASE_URL}${PROSPECTS_PATH}`;
  };

  getLoadConversationListPath = () => {
    return `${BASE_URL}${CONVERSATION_PATH}/list`;
  };

  getLoadConversationChatPath = prospectId => {
    return `${BASE_URL}${CONVERSATION_PATH}/chat/${prospectId}`;
  };

  getLoadConversationProspectPath = prospectId => {
    return `${BASE_URL}${CONVERSATION_PATH}/prospect/${prospectId}`;
  };

  getSendMessagePath = prospectId => {
    return `${BASE_URL}${CONVERSATION_PATH}/message/${prospectId}`;
  };

  getAuthenticatePath = () => {
    return `${BASE_URL}${AUTH_PATH}/authenticate`;
  };

  getMarkAsReadConversationPath = prospectId => {
    return `${BASE_URL}${CONVERSATION_PATH}/mark/${prospectId}`;
  };

  getBroadcastPath = () => {
    return `${BASE_URL}${CONVERSATION_PATH}/broadcast`;
  };
  getAssignCampaignPath = () => {
    return `${BASE_URL}${PROSPECTS_PATH}/bulkedit/campaign`;
  };
  getAssignStatusPath = () => {
    return `${BASE_URL}${PROSPECTS_PATH}/bulkedit/status`;
  };
  getDeleteProspectsPath = () => {
    return `${BASE_URL}${PROSPECTS_PATH}/bulkedit/delete`;
  };

  getChangeProspectPropertyPath = prospectId => {
    return `${BASE_URL}${PROSPECTS_PATH}/${prospectId}/update`;
  };

  getCampaignCreatePath = () => {
    return `${BASE_URL}${CAMPAIGNS_PATH}`;
  };

  getLoadCampaignPath = campaignId => {
    return `${BASE_URL}${CAMPAIGNS_PATH}/${campaignId}`;
  };

  getCreateSequencePath = campaignId => {
    return `${BASE_URL}${SEQUENCE_PATH}/${campaignId}`;
  };

  getSequenceSettingPath = sequenceId => {
    return `${BASE_URL}${SEQUENCE_PATH}/${sequenceId}`;
  };

  getRenameCampaignPath = campaignId => {
    return `${BASE_URL}${CAMPAIGNS_PATH}/${campaignId}`;
  };

  getUploadFilePath = () => {
    return `${BASE_URL}/api/uploads`;
  };

  getUpdateSequencePath = sequenceId => {
    return `${BASE_URL}${SEQUENCE_PATH}/${sequenceId}`;
  };

  getAllCampaignsPath = () => {
    return `${BASE_URL}${CAMPAIGNS_PATH}`;
  };

  getCampaignsAggregationPath = () => {
    return `${BASE_URL}${CAMPAIGNS_PATH}/aggregation`;
  };

  getDeleteCampaignPath = campaignId => {
    return `${BASE_URL}${CAMPAIGNS_PATH}/${campaignId}`;
  };

  getLoadCampaignStatisticPath = campaignId => {
    return `${BASE_URL}${CAMPAIGNS_PATH}/statistic/${campaignId}`;
  };

  getNumberAvailabilityPath = () => {
    return `${BASE_URL}${USERS_PATH}/number/availability`;
  };

  getNewNumberPath = () => {
    return `${BASE_URL}${USERS_PATH}/number/get`;
  };

  getUsersDetailPath = userId => {
    return `${BASE_URL}${USERS_PATH}/${userId}`;
  };
}
