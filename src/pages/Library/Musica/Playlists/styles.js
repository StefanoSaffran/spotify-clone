import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
`;

export const PlayList = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const Item = styled.TouchableOpacity`
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
`;

export const Image = styled.Image`
  height: 65px;
  width: 65px;
`;

export const TextContainer = styled.View`
  justify-content: center;
`;

export const ItemText = styled.Text`
  color: white;
  font-weight: bold;
  margin-left: 15px;
`;

export const ItemSubText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 12px;
  margin-left: 15px;
  margin-top: 5px;
`;
