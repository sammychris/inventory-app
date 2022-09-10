import styled from 'styled-components';

const PText = ({children, align}) => {
    return (
        <Container align={align}>
            <P>
                {children}
            </P>
        </Container>
    );
  }


export default PText;

const P = styled.p`
  font-size: 14px;
  color: #383838;
`;

const Container = styled.div` 
  text-align: ${(props) => props.align};
`;