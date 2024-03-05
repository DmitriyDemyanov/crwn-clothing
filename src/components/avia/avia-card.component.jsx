
import { useState } from "react";


import Button from "../button/button.component";



import { AviaCardContainer,BtnIcon,BtnIconDel } from "./avia-card.styles";
import FormInput from '../../components/form-input/form-input.component'

const defaultAviaTicketForm = {
  origin: '',
  destination: '',
  departDate: '',
  returnDate: '',
}

const AviaCard = ({ getForm }) => {
  console.log(getForm)
  const [aviaTicketForm,setAviaTicketForm] = useState(defaultAviaTicketForm);
  const { origin,destination,departDate,returnDate } = aviaTicketForm;

  const handleChange = (event) => {

    const { name,value } = event.target;
    setAviaTicketForm({ ...aviaTicketForm,[name]: value })
  }
  console.log('aviaTicketForm',aviaTicketForm)
  return (
    <AviaCardContainer>

      <div className="card-content-wrapper">
        <span className="card-title"> Card Title</span>
        <FormInput
          label='origin'
          type='text'
          required
          onChange={handleChange}
          name='origin'
          value={origin}
        />
        <FormInput
          label='Destination'
          type='text'
          required
          onChange={handleChange}
          name='destination'
          value={destination}
        />
        <FormInput
          label='depart date'
          type='text'
          required
          onChange={handleChange}
          name='departDate'
          value={departDate}
        />
        <FormInput
          label='Return date'
          type='text'
          required
          onChange={handleChange}
          name='returnDate'
          value={returnDate}
        />
      </div>
      <div className="wrapper-button">
        <Button
          onClick={() => getForm(aviaTicketForm)}
          buttonType='purple-button'
        > SEARCH  <div className="image-btn"><BtnIcon /></div>
        </Button>
        <Button
          onClick={() => setAviaTicketForm(defaultAviaTicketForm)}
          buttonType='pink-button'
        > RESET
          <div className="image-btn"><BtnIconDel /></div>
        </Button>
      </div>

    </AviaCardContainer>
  )
};

export default AviaCard;

// tabindex = "0" style = "display: block; width: 569.5px; left: 0px; top: 46px; height: 0px; transform-origin: 0px 0px; opacity: 0.123702; transform: scaleX(0.386591) scaleY(0.386591);"