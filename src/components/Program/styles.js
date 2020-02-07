import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  height: 70px;
  width: 100%;
  margin: 15px 0 0;
`;

export const ImageContainer = styled.View`
  height: 65px;
  width: 65px;
  background-color: #272829;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Image = styled.Image`
  height: 65px;
  width: 65px;
  border-radius: 4px;
`;

export const TextContainer = styled.View`
  justify-content: center;
  width: 100%;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: white;
  font-weight: bold;
  margin-left: 15px;
  width: 80%;
`;

export const SubTitle = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: #999;
  font-weight: bold;
  font-size: 12px;
  margin-left: 15px;
  margin-top: 5px;
  width: 75%;
`;
