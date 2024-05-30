import createRequest from "../utils/api";

function initiatePayment(itemId: number) {
  return createRequest("/api/v1/payments/initiate", "post", { itemID: itemId});
}


export {
    initiatePayment,
};
