
import { useState } from "react";


import Button,{ BUTTON_TYPE_CLASSES } from "../button/button.component";


import { AviaCardContainer,BtnIcon,BtnIconDel } from "./avia-card.styles";
import FormInput from '../../components/form-input/form-input.component'

const defaultAviaTicketForm = {
  origin: '',
  destination: '',
  departDate: '',
  returnDate: '',
}

const AviaCard = ({ getForm }) => {

  const [aviaTicketForm,setAviaTicketForm] = useState(defaultAviaTicketForm);
  const { origin,destination,departDate,returnDate } = aviaTicketForm;
  const [checkData,setCheckData] = useState('');

  const handleChange = (event) => {
    const { name,value } = event.target;
    setAviaTicketForm({ ...aviaTicketForm,[name]: value })
  }

  const submitForm = (data) => {
    if (!data.origin) {

      return setCheckData('origin');
    }
    if (!data.destination) {
      return setCheckData('destination');

    }
    if (!data.departDate) {
      return setCheckData('departDate');

    }
    if (!data.returnDate) {
      return setCheckData('returnDate');

    }
    getForm(aviaTicketForm);
    setCheckData('');
  }

  const resetForm = () => {
    setAviaTicketForm(defaultAviaTicketForm);
    setCheckData('');
  }

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
      {checkData ?
        (<div style={{ marginLeft: '24px' }} >Please input: <span style={{ color: 'red',fontSize: '24px' }}>''{checkData}''</span> </div>)
        : ('')
      }


      <div className="wrapper-button">
        <Button
          onClick={() => submitForm(aviaTicketForm)}
          buttonType={BUTTON_TYPE_CLASSES.purple}
        > SEARCH  <div className="image-btn"><BtnIcon /></div>
        </Button>
        <Button
          onClick={() => resetForm()}
          buttonType={BUTTON_TYPE_CLASSES.pink}
        > RESET
          <div className="image-btn"><BtnIconDel /></div>
        </Button>
      </div>

    </AviaCardContainer>
  )
};

export default AviaCard;

