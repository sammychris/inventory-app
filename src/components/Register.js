import styled from 'styled-components';
import Button from './Button';
import FieldLabel from './FieldLabel';
import InputField from './InputField';
import H2Text from './H2Text';
import PText from './PText';

const Register = ({guest, onHandleGuest, onSaveUser, onChangePage}) => {
    const { name, email, password, confirmPassword } = guest;
    return (
        <Container>
            <Form>
                <H2Text align={'center'}>Inventory App</H2Text>
                <PText align={'center'}>You are welcome. Already a user? <a href="#" onClick={() => onChangePage('login')}>Login</a></PText>
                <FieldLabel title="Name" />
                <InputField event={onHandleGuest} name="name" value={name} placeholder="name" type="text" required={true}/>
                <FieldLabel title="Email" />
                <InputField event={onHandleGuest} name="email" value={email} placeholder="email" type="email" required={true}/>
                <FieldLabel title="Password" />
                <InputField event={onHandleGuest} name="password" value={password} placeholder="password" type="password" required={true}/>
                <FieldLabel title="Confirm Password" />
                <InputField event={onHandleGuest} name="confirmPassword" value={confirmPassword} placeholder="confirm password" type="password" required={true}/>
                <div>
                    <Button event={onSaveUser} type="submit">Register</Button>
                </div>
            </Form>
        </Container>
    );
}

 
export default Register;

const Form = styled.form`
    background: #fff;
    padding: 20px;
    position: relative;
    width: 500px;
    border: 1px solid black;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
