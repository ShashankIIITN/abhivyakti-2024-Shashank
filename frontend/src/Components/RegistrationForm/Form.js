import React, { useState, useRef } from 'react';
// import questionsData from '../../assets/questionData.json';
import { Mun, Admads, Roadtoredcarpet } from ".";
import ShowStopper from './ShowStopper';
import BronxBattleground from "./BronxBattleground";
import RythmRumble from './RythmRumble';
import Groovegenesis from './GrooveGenesis';
import Stellarsingoff from './StellarSingOff';
import Rhymeriot from './Rhymeriot';
import "../../newscss/form.scss";
import "../../css/tooltip.css";



const selector = (eventName) => {

  // console.log(organizations)
  switch (eventName) {
    case "modelunitednations":
      return <Mun />;
    case "roadtoredcarpet":
      return <Roadtoredcarpet />;
    case "admads":
      return <Admads />;
    case "showstopper":
      return <ShowStopper />
    case "bronxbattleground":
      return <BronxBattleground />
    case "rythmrumble":
      return <RythmRumble />
    case "groovegenesis":
      return <Groovegenesis />
    case "stellarsing-off":
      return <Stellarsingoff />
    case "rhymeriot":
      return <Rhymeriot />
    default:
      break;
  }
  
}

const Form = (props) => {
  const formRef = useRef(null);
  // const [formData, setFormData] = useState({ });
  // const [answers, setAnswers] = useState({ });

  // const handleInputChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name]: value });
  // };

  // const handleRadioChange = (questionId, value) => {
  //   setAnswers({...answers, [questionId]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Data:', formData);
    // console.log('Answers:', answers);
    // You can handle form submission logic here
    console.log(formRef.current.organizations?.value)
  };


  return (
    <div className='formDiv'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} ref={formRef} className='form'>
        {selector(props.name)}
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};
export default Form






