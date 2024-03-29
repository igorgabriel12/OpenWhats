import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  background-color: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const LabelTitle = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  margin-left: 40px;
  text-align: center;
  padding-vertical: 10px;
`;

export const Header = styled.View`
  background-color: #ffffff;
`;

export const ShareButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const LabelHeader = styled.Text`
  color: #888;
  font-size: 18px;
  text-align: center;
  margin-vertical: 20px;
`;

export const Body = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Row = styled.View`
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.View`
  flex: 1;
  height: 80px;
`;

export const ContainerInput = styled.View`
  height: 50px;
  overflow: hidden;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 5px;
  flex-direction: row;
  background-color: #ffffff;
`;

export const ContainerWhatsAnimation = styled.View`
  right: 0px;
  z-index: 10;
  position: absolute;
`;

export const LabelInput = styled.Text`
  color: #888;
  font-size: 16px;
  font-weight: bold;
`;

export const TextInputStyle = {
  flex: 1,
  fontSize: 16,
  fontWeight: 'bold',
  paddingHorizontal: 10,
};

export const Button = styled.TouchableOpacity`
  height: 50px;
  margin-top: 30px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerBannerAd = styled.View`
  left: -15px;
  min-height: 70px;
`;
export const LinkButton = styled.TouchableOpacity`
  height: 45px;
  margin-top: 30px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LabelButton = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  padding-horizontal: 10px;
`;

export const Footer = styled.View`
  padding: 10px;
`;

export const LabelFooter = styled.Text`
  color: #bbb;
  font-size: 12px;
  text-align: center;
`;
