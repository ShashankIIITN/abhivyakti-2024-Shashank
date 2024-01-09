import React, { useState } from 'react';

const Stellarsingoff = () => {
  const [formData, setFormData] = useState({
    participantName: '',
    contact_phone: '',
    Email: '',
    instituteName: '',
    instagramID: '',
    yesno: '',
    instrumentsName: '',
    vid_link: '',
    aud_link: '',
    payment_link:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset the form data
    setFormData({
      participantName: '',
      contact_phone: '',
      Email: '',
      instituteName: '',
      instagramID: '',
      yesno: '',
      instrumentsName: '',
      vid_link: '',
      aud_link: '',
      payment_link:''
    });
    console.log(formData);
    const response = await fetch('http://localhost:8080/stellarsingoff', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Handle the response as needed
  };

  const yesnoOptions = ["Yes", "No"];

  return (
    <>
      <form method="POST" className="form" onSubmit={handleSubmit}>
        <div className='infoDiv'>
          {/* Participant Name */}
          <label htmlFor='participantName'>Participant Name</label>
          <input type="text" id='participantName' name="participantName" required placeholder="Participant Name" value={formData.participantName} className="input" onChange={handleChange} />
        </div>
        {/* Contact Number */}
        <div className='infoDiv'>
          <label htmlFor='contact_phone'>Contact Number</label>
          <input type="number" id='contact_phone' name="contact_phone" required placeholder="Contact Number" value={formData.contact_phone} className="input" onChange={handleChange} />
        </div>
        {/* Email */}
        <div className='infoDiv'>
          <label htmlFor='Email'>Email</label>
          <input type="email" id='Email' name="Email" required placeholder="Email" value={formData.Email} className="input" onChange={handleChange} />
        </div>
        {/* Institute Name */}
        <div className='infoDiv'>
          <label htmlFor='instituteName'>Institute Name</label>
          <input type="text" id='instituteName' name="instituteName" required placeholder="Institute Name" value={formData.instituteName} className="input" onChange={handleChange} />
        </div>
        {/* Instagram Handle (if you want to get mentioned in Crescendo's posts) */}
        <div className='infoDiv'>
          <label htmlFor='instagramID'>Instagram Handle (if you want to get mentioned in Crescendo's posts)</label>
          <input type="text" id='instagramID' name="instagramID" placeholder="Instagram ID" value={formData.instagramID} className="input" onChange={handleChange} />
        </div>
        {/* Will you be having accompanist? */}
        <div className='infoDiv'>
          <label className='info_heading' htmlFor='yesno'>Will you be having accompanist?</label>
          {yesnoOptions.map((option, ind) => (
            <label htmlFor={ind} key={option}>
              <input type="radio" name="yesno" value={option} className="input" onChange={handleChange} checked={formData.yesno === option} />
              {option}
            </label>
          ))}
        </div>
        {/* List of Instruments used in backtrack */}
        <div className='infoDiv'>
          <label htmlFor='instrumentsName'>List of Instruments used in backtrack</label>
          <input type="text" id='instrumentsName' name="instrumentsName" placeholder="Instruments Name" value={formData.instrumentsName} className="input" onChange={handleChange} />
        </div>
        {/* Video Submission */}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='vid_link'>Video Submission<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the video to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='vid_link' name="vid_link" required placeholder="Add File" value={formData.vid_link} className="input" onChange={handleChange} />
        </div>
        {/* Backtrack Submission (if used) */}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='aud_link'>Backtrack Submission (if used) <i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the audio to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='aud_link' name="aud_link" placeholder="paste audio link here" value={formData.aud_link} className="input" onChange={handleChange} />
        </div>
        {/* Payment link*/}
        <div className='infoDiv'>
          <label className='withtooltip' htmlFor='payment_link'>Payment Link<i className="fa-solid fa-circle-info tooltip"> <span className="tooltiptext">Upload the Payment proof to the drive, allow access to anyone with the link, and paste the link here.</span></i></label>
          <input type="url" id='payment_link' name="payment_link" required placeholder="paste link here" value={formData.vid_link} className="input" onChange={handleChange} />
        </div>
        <button type="submit" onClick={handleSubmit}>Continue</button>
      </form>
    </>
  );
};

export default Stellarsingoff;
