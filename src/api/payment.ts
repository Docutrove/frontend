import createRequest from "../utils/api";

interface Payload {
  itemID: number,
  paymentData: any,
  callbackUrl: string,
}

function initiatePayment(payload: Payload) {
  return createRequest("/api/v1/payments/initiate", "post", payload);
}

function getPaymentStatus(ref: string) {
  return createRequest(`/api/v1/payments/${ref}`, "get");
}


export {
    initiatePayment,
    getPaymentStatus,
};
