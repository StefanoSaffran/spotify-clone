import styled from 'styled-components/native';

export const Chapter = styled.View`
  background-color: #272829;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.Image`
  height: 65px;
  width: 65px;
  border-radius: 4px;
`;

export const TitleContainer = styled.View`
  margin-left: 10px;
  flex: 8;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: white;
  font-weight: bold;
  width: 80%;
`;

export const SubTitle = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: #999;
  font-weight: bold;
  font-size: 12px;
  margin-top: 5px;
  width: 75%;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail',
})`
  color: #999;
  font-weight: 500;
  font-size: 12px;
  margin: 15px 0;
  width: 95%;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Time = styled.Text`
  color: #999;
  margin-left: 10px;
  font-size: 10px;
  text-transform: uppercase;
`;

export const Right = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconRight = styled.View`
  margin-left: 25px;
  margin-right: 5px;
`;
