import {
  Container,
  Title,
  Wrapper,
  WrapperContent,
  WrapperForm,
} from './UserPage.styled';
import ExclamationMark from '../../components/ExclamationMark/ExclamationMark';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import UserProfile from '../../components/UserProfile/UserProfile';
import Daily from '../../components/Daily/Daily';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const UserPage = () => {
  const user = useSelector(selectUser);
  const [avatarUrl, setAvatarUrl] = useState('');
  const uploadAvatarToServer = url => {
    setAvatarUrl(url);
  };

  return (
    <Container>
      <Title>Profile Settings</Title>
      <WrapperContent>
        <div>
          <UserProfile
            avatarUrl={avatarUrl}
            handleChangeAvatar={uploadAvatarToServer}
          />
          <Wrapper>
            <Daily
              color="var(--orange-color)"
              iconId="icon-fork-knife"
              text="Daily calorie intake"
              value={user.bmr.toString()}
            />
            <Daily
              color="var(--orange-color)"
              iconId="icon-dumbbell"
              text="Daily norm of sports"
              value="110 min"
            />
          </Wrapper>
          <ExclamationMark />
          <Logout />
        </div>
        <WrapperForm>
          <UserForm avatarUrl={avatarUrl} />
        </WrapperForm>
      </WrapperContent>
    </Container>
  );
};

export default UserPage;
