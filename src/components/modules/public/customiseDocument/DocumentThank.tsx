import toast from "react-hot-toast";
import { getPaymentStatus } from "../../../../api/payment";
import useRequest from "../../../hooks/useRequest";
import BaseButton from "../../ui/button";
import ThankYou from "../../ui/thankYou";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function DocumentThank() {
  const [queryParameters] = useSearchParams()
  const { makeRequest: paymentStatusRequest } = useRequest(getPaymentStatus, queryParameters.get('trxref'));
  const [ payCompleted, setPayCompleted ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ value, setValue ] = useState('');

  const getPaymentStatusLocal = async () => {
    const [resp, err] = await paymentStatusRequest();

    if (err) {
      toast.error(err.message);
    }
    if (resp.data.status == 'completed') {
      setPayCompleted(true);
      setEmail(resp.data.email);
      setValue(resp.data.value);
    }
  }

  let display: any;

  useEffect(() => {
    while (!payCompleted) {
      const interval = setInterval(() => {
        getPaymentStatusLocal()
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);
  <>
  { payCompleted ? (
    display = 
    <ThankYou iconName="document_tick" header="Thank you for using Docutrove" linkTo="/customise">
        <h6 className="thank-you__subtitle">Your document is now ready to be downloaded</h6>
      <BaseButton variant="primary" className="thank-you__button" href={value}>Download</BaseButton>

      <p className="text--sm thank-you__description">
        A copy of your document has also been emailed to {email} for your records.
      </p>
    </ThankYou>
  ) : (
    display = 
    <ThankYou iconName="pie" header="Your payment is still processing" linkTo="/customise">
      <p className="text--sm thank-you__description">
        This might take some minutes
      </p>
    </ThankYou>
  )}
  </>
  
  return (display);
}
