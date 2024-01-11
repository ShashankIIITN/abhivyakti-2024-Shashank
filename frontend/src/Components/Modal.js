import React from 'react'
import ReactDom from 'react-dom'
import "../css/Modal.css"
import qr from "../assets/qr.jpg"
import { useNavigate } from 'react-router-dom';

export default function Modal({ open, onClose, handleSubmit, formData, setFormData ,handleChange, underProcess}) {

  const amount = 5*100;//5rs*100=500 paise
  const currency = "INR";
  const receiptId = "qwsaq1";
  const navigate = useNavigate();

  const paymentHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_5XRHZaDoFP0ylr", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Abhivyakti", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:5000/api/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
        // handleChange(e);
        console.log('Updated FormData:', formData);
        handleSubmit(e);
        // navigate("/profile");
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Web Dev Matrix", //your customer's name
        email: "webdevmatrix@example.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };
        
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className='Modal__overlay' />
            <div className='Modal'>
                <button className='Modal__btn' onClick={onClose}>X</button>
                <h3 className='Modal__text'>UPI-7058449059@axl</h3>
                <img src={qr} alt="7058449059@axl" className="qr Modal__qr" />
                {/* Payment link*/}
                <div className='infoDiv'>
                    <label className='withtooltip' htmlFor='payment_link'>Payment Link<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the Payment proof to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
                    <input type="url" id='payment_link' name="payment_link" required placeholder="paste link here" value={formData?.payment_link} className="input" onChange={handleChange} />
                </div>
                <button className='Modal__submit' type='button' disabled = {underProcess} onClick={paymentHandler}>Proceed</button>
            </div>
        </>,
        document.getElementById('portal')
    )
}