import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  align-items: center;
  justify-content: center;
  padding: 0 40px 60px;
`;
export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 23px;
  text-align: center;
  margin-bottom: 35px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 25px;
  background-color: #fff;
  width: 100%;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 15px;
  padding: 15px 0;
  letter-spacing: 1px;
`;
