import styled from 'styled-components';
import Button from '../Button';
import FieldLabel from '../FieldLabel';
import InputField from '../InputField';
import H2Text from '../H2Text';
import PText from '../PText';


const Login = ({guest, onHandleGuest, onLogin, onChangePage}) => {
    const { email, password } = guest;
    return (
        <Container>
            <Form>
                <H2Text align={'center'}>Inventory App</H2Text>
                <PText align={'center'}>Welcome Back. New user? <SpanLink onClick={() => onChangePage('register')}>Register</SpanLink></PText>
                <FieldLabel title="Email" />
                <InputField event={onHandleGuest} name="email" value={email} placeholder="email" type="email" required={true}/>
                <FieldLabel title="Password" />
                <InputField event={onHandleGuest} name="password" value={password} placeholder="password" type="password" required={true}/>
                <div>
                    <Button event={onLogin} type="submit">Login</Button>
                </div>
            </Form>
        </Container>
    );
  }


export default Login;

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

const SpanLink = styled.span`
    text-decoration: underline;
    color: steelblue;
    cursor: pointer;
    &:hover {
        color: blue;
    }
`;
