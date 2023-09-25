import { useState } from 'react';
import RadioOption from '../RadioOption/RadioOption';
import {
  FormContainer,
  SectionTitle,
  Input,
  WrapperInputField,
  InputField,
  Button,
  WrapperRadio,
} from './UserForm.styled';

const UserForm = () => {
  const [selectedSex, setSelectedSex] = useState('Male');
  const [selectedBlood, setSelectedBlood] = useState('1');
  const [selectedLevel, setSelectedLevel] = useState('1');

  const handleSexChange = event => {
    setSelectedSex(event.target.value);
  };

  const handleBloodChange = event => {
    setSelectedBlood(event.target.value);
  };

  const handleLevelChange = event => {
    setSelectedLevel(event.target.value);
  };

  const handleSupmit = () => {
    console.log('Selected Blood:', selectedBlood);
    console.log('Selected Sex:', selectedSex);
    console.log('Selected Level:', selectedLevel);
  };

  const bloodOptions = [
    { id: '1', value: '1', label: '1' },
    { id: '2', value: '2', label: '2' },
    { id: '3', value: '3', label: '3' },
    { id: '4', value: '4', label: '4' },
  ];

  const sexOptions = [
    { id: 'Male', value: 'Male', label: 'Male' },
    { id: 'Female', value: 'Female', label: 'Female' },
  ];

  const levelOptions = [
    {
      id: 'level-1',
      value: '1',
      label: 'Sedentary lifestyle (little or no physical activity)',
    },
    {
      id: 'level-2',
      value: '2',
      label: 'Light activity (light exercises/sports 1-3 days per week)',
    },
    {
      id: 'level-3',
      value: '3',
      label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
    },
    {
      id: 'level-4',
      value: '4',
      label: 'Very active (intense exercises/sports 6-7 days per week)',
    },
    {
      id: 'level-5',
      value: '5',
      label:
        'Extremely active (very strenuous exercises/sports and physical work)',
    },
  ];

  return (
    <>
      <FormContainer>
        <SectionTitle>Basic info</SectionTitle>
        <Input />
        <Input />
      </FormContainer>

      <WrapperInputField>
        <form action="#">
          <SectionTitle>Height</SectionTitle>
          <InputField />
        </form>
        <form action="#">
          <SectionTitle>Current Weight</SectionTitle>
          <InputField />
        </form>
      </WrapperInputField>

      <WrapperInputField>
        <form action="#">
          <SectionTitle>Desired Weight</SectionTitle>
          <InputField />
        </form>
        <InputField />
      </WrapperInputField>

      <WrapperRadio>
        <div style={{ display: 'flex', marginRight: '20px' }}>
          {bloodOptions.map(option => (
            <RadioOption
              key={option.id}
              id={option.id}
              name="Blood"
              value={option.value}
              checked={selectedBlood === option.value}
              label={option.label}
              onChange={handleBloodChange}
            />
          ))}
        </div>

        <div style={{ display: 'flex' }}>
          {sexOptions.map(option => (
            <RadioOption
              key={option.id}
              id={option.id}
              name="Sex"
              value={option.value}
              checked={selectedSex === option.value}
              label={option.label}
              onChange={handleSexChange}
            />
          ))}
        </div>

        <div style={{ marginTop: '40px' }}>
          {levelOptions.map(option => (
            <RadioOption
              key={option.id}
              id={option.id}
              name="levelActivity"
              value={option.value}
              checked={selectedLevel === option.value}
              label={option.label}
              onChange={handleLevelChange}
            />
          ))}
        </div>
      </WrapperRadio>

      <Button onClick={handleSupmit}>Save</Button>
    </>
  );
};

export default UserForm;
