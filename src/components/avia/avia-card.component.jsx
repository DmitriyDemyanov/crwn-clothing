
import { useContext,useEffect,useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AviaContext } from "../../context/avia.context";

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
  const nav = useNavigate();

  const [aviaTicketForm,setAviaTicketForm] = useState(defaultAviaTicketForm);
  const { origin,destination,departDate,returnDate } = aviaTicketForm;
  const [checkData,setCheckData] = useState('');

  const [originsList,setOriginsList] = useState([]);
  const [destinationsList,setDestinationsList] = useState([]);

  const { cities,countries } = useContext(AviaContext);


  const handleChange = (event) => {
    const { name,value } = event.target;

    setAviaTicketForm({ ...aviaTicketForm,[name]: value })
  }

  useEffect(() => {
    const citiesName = [];
    cities.filter((city) => {
      const text = city.name;
      if (
        text &&
        origin &&
        origin !== text &&
        text.toLowerCase().startsWith(origin.toLowerCase())
      ) {
        citiesName.push(`${text}, ${countries[city.country_code]} `);
        return true;
      };
      return false;
    });
    setOriginsList(citiesName.sort());
  },[origin]);

  useEffect(() => {
    const citiesName = [];
    cities.filter((city) => {
      const text = city.name;
      if (
        text &&
        destination &&
        destination !== text &&
        text.toLowerCase().startsWith(destination.toLowerCase())
      ) {
        citiesName.push(`${text}, ${countries[city.country_code]} `);
        return true;
      };
      return false;
    });
    setDestinationsList(citiesName.sort());
  },[destination]);

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
    nav('avia-place');
  }

  const resetForm = () => {
    setAviaTicketForm(defaultAviaTicketForm);
    setCheckData('');
  }

  const handleChangeName = (event) => {
    const { name,value } = event.target;
    setAviaTicketForm({ ...aviaTicketForm,[name]: value });
  }

  const setFilter = (value,name) => {
    setAviaTicketForm({ ...aviaTicketForm,[name]: value });
  }

  return (

    <AviaCardContainer>

      <div className="card-content-wrapper">
        <span className="card-title"> Card Title</span>

        <FormInput
          label='Names'
          type='text'
          required
          onChange={handleChangeName}
          name='origin'
          value={origin}
          dropdownList={originsList}
          onDropListClick={setFilter}
        />

        <FormInput
          label='Destination ROM'
          type='text'
          required
          onChange={handleChange}
          name='destination'
          value={destination}
          dropdownList={destinationsList}
          onDropListClick={setFilter}
        />

        <FormInput
          label='depart date 2024-03'
          type='text'
          required
          onChange={handleChange}
          name='departDate'
          value={departDate}
        />
        <FormInput
          label='Return date 2024-03'
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

