import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TextInput,
  StatusBar,
  Linking,
  ImageBackground,
  Keyboard,
} from 'react-native';

import {
  Row,
  Body,
  Header,
  Button,
  Footer,
  Column,
  Container,
  LabelTitle,
  LabelInput,
  LabelHeader,
  LabelFooter,
  LabelButton,
  ContainerInput,
  TextInputStyle,
  ContainerWhastsAnimation,
} from './styles';

import TextInputMask from 'react-native-text-input-mask';
import LottieView from 'lottie-react-native';
import DrinkAnimation from '../../assets/animations/whats_verification.json';

var animation;
export default function Home() {
  const phoneNumberRef = useRef();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [textError, setTextError] = useState(false);

  // Implemenações futuras
  const [validSizeNumber, setValidSizeNumber] = useState(11);
  const [invalidSizeNumber, setInalidSizeNumber] = useState(10);
  const [postalCodeCountry, setPostalCodeCountry] = useState('+55');
  const [maskPhoneNumber, setMaskPhoneNumber] = useState(
    '([00]) [00000]-[0000]',
  );
  const [phoneNumberOldLength, setPhoneNumberOldLength] = useState();

  function handdleSubmit() {
    if (phoneNumberOldLength === validSizeNumber) {
      Keyboard.dismiss();
      Linking.openURL(
        `whatsapp://send?phone=${postalCodeCountry}${phoneNumber}`,
      );
    } else {
      setTextError(true);
    }
  }

  useEffect(() => {
    if (phoneNumber.length === validSizeNumber) {
      animation.play(0, 75);
      setTimeout(() => {
        animation.pause();
      }, 900);
    }

    if (
      phoneNumberOldLength === validSizeNumber &&
      phoneNumber.length === invalidSizeNumber
    ) {
      animation.play(76, 119);
      setTimeout(() => {
        animation.pause();
      }, 900);
    }
    setPhoneNumberOldLength(phoneNumber.length);
  }, [phoneNumber]);

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={{flex: 1}}>
      <LabelTitle>Open Whats</LabelTitle>
      <Container>
        <Header>
          <LabelHeader>
            Envie mensagem para qualquer número pelo WhatsApp, sem precisar
            adicionar como contato.
          </LabelHeader>
        </Header>
        <Body>
          <Row>
            <Column>
              <LabelInput>Informe o número</LabelInput>
              <ContainerInput style={[textError && {borderColor: '#f71919'}]}>
                <TextInputMask
                  maxLength={15}
                  value={phoneNumber}
                  returnKeyType="send"
                  style={TextInputStyle}
                  mask={maskPhoneNumber}
                  refInput={phoneNumberRef}
                  keyboardType={'numeric'}
                  onSubmitEditing={handdleSubmit}
                  placeholder={'Ex.: (12) 34567-8901'}
                  onChangeText={(formatted, extracted) => {
                    if (textError) setTextError(false);
                    setPhoneNumber(extracted);
                  }}
                />
              </ContainerInput>
            </Column>
            <ContainerWhastsAnimation>
              <LottieView
                source={DrinkAnimation}
                ref={(e) => (animation = e)}
                style={{height: 100, width: 30}}
              />
            </ContainerWhastsAnimation>
          </Row>
          <Button
            style={{
              backgroundColor:
                phoneNumber.length === validSizeNumber ? '#249035' : '#aaa',
            }}
            activeOpacity={phoneNumber.length !== validSizeNumber ? 1 : 0.5}
            onPress={
              phoneNumber.length === validSizeNumber ? handdleSubmit : null
            }>
            <LabelButton>Abrir no WhatsApp</LabelButton>
          </Button>
        </Body>
        <Footer>
          <LabelFooter>Versão: 1.0.1</LabelFooter>
        </Footer>
      </Container>
    </ImageBackground>
  );
}
