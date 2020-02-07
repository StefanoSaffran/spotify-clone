import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #121212;
`;

export const ScrollView = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
  stickyHeaderIndices: [1],
})``;

export const InputContainer = styled.View`
  background-color: #121212;
  padding: 10px 0;
`;

export const Title = styled.Text`
  font-size: 29px;
  font-weight: bold;
  color: white;
  padding: 20px 20px 0;
`;

export const SubTitle = styled.Text`
  font-weight: bold;
  color: white;
  padding: 10px 20px;
`;

export const SessionList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 10px;
`;

export const Session = styled.TouchableOpacity`
  width: 160px;
  height: 90px;
  background-color: ${props => props.background};
  margin: 10px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

export const SessionImage = styled.Image`
  width: 65px;
  height: 65px;
  position: absolute;
  right: -18px;
  top: 25px;
  transform: rotate(25deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const SessionTitle = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
  color: white;
  font-weight: bold;
  max-width: 100px;
`;
