import styled from 'styled-components';


const H2Text = ({children, align}) => {
    return (
        <Container align={align}>
            <H2>
                {children}
            </H2>
        </Container>
    );
  }


export default H2Text;

const H2 = styled.h2`
  font-size: 24px;
`;

const Container = styled.div` 
  text-align: ${(props) => props.align};
`;
