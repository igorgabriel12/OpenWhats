import React, { useState, useEffect, useCallback } from 'react';
import {
  Share,
  Linking,
  Keyboard,
  StatusBar,
  ImageBackground,
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
  LinkButton,
  LabelInput,
  LabelHeader,
  LabelFooter,
  LabelButton,
  ShareButton,
  ContainerInput,
  ContainerBannerAd,
  ContainerWhatsAnimation,
} from './styles';

import LottieView from 'lottie-react-native';
import { IntlPhoneInput } from '../../components';
import DeviceInfo from 'react-native-device-info';
import { adUnitId } from '../../utils/admobConfig';
import Icon from 'react-native-vector-icons/Ionicons';
import analytics from '@react-native-firebase/analytics';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import PhoneAnimation from '../../assets/animations/whats_verification.json';
import SelectWhatsappVersionModal from '../../components/SelectWhatsappVersionModal/SelectWhatsappVersionModal';

var animation;
const Home: React.FC = () => {
  const [dialCode, setDialCode] = useState('');
  const [textError, setTextError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openChoiceModal, setOpenChoiceModal] = useState(false);
  const [phoneIsVerified, setPhoneIsVerified] = useState(false);
  const [keyboardIsOpened, setKeyboardIsOpened] = useState(false);

  function clearTextInput() {
    setPhoneNumber('');
    setPhoneIsVerified(false);
  }

  const onCloseModal = () => {
    setOpenChoiceModal(false);
  };

  const openWhatsApp = (appLink: string) => {
    onCloseModal();
    Linking.openURL(appLink);
    clearTextInput();
  };

  const handleSubmit = useCallback(() => {
    if (phoneIsVerified) {
      Keyboard.dismiss();
      setOpenChoiceModal(true);
    } else {
      setTextError(true);
    }
  }, [phoneIsVerified]);

  useEffect(() => {
    if (animation) {
      if (phoneIsVerified) {
        animation?.play(0, 75);
      } else {
        animation?.play(76, 119);
      }

      setTimeout(() => {
        animation?.pause();
      }, 900);
    }
  }, [phoneIsVerified]);

  useEffect(() => {
    async function openApp() {
      await analytics().logAppOpen();
    }

    openApp();
  }, []);

  const onShare = useCallback(async () => {
    try {
      const result = await Share.share({
        title: 'Open Whats - Mensagem direto sem salvar o contato',
        message:
          'Instale essa ferramenta incrível que te ajudará a enviar mensagens pelo WhatsApp sem precisar adicionar o contato em sua lista de contatos. \nhttps://play.google.com/store/apps/details?id=com.findwhats',
        url: 'https://play.google.com/store/apps/details?id=com.findwhats',
      });
      if (result.action === Share.sharedAction) {
        const res = await analytics().getAppInstanceId();
        console.log({ res });

        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsOpened(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsOpened(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <>
      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={{ flex: 1, paddingTop: 30 }}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />

        <Row style={{ justifyContent: 'space-between', paddingHorizontal: 10 }}>
          <Row />
          <LabelTitle>Open Whats</LabelTitle>
          <ShareButton onPress={onShare}>
            <Icon name={'share-social-outline'} size={22} color={'#FFF'} />
          </ShareButton>
        </Row>

        <Container>
          <Header>
            <LabelHeader>
              {`Envie mensagem para qualquer número pelo WhatsApp, sem precisar
            salvar o contato.`}
            </LabelHeader>
          </Header>
          <ContainerBannerAd>
            <BannerAd
              unitId={adUnitId}
              size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
          </ContainerBannerAd>
          <Body>
            <Row>
              <Column>
                <LabelInput>Informe o número</LabelInput>
                <ContainerInput
                  style={[textError && { borderColor: '#f71919' }]}>
                  <IntlPhoneInput
                    defaultCountry={'BR'}
                    onChangeText={({
                      dialCode,
                      isVerified,
                      unmaskedPhoneNumber,
                    }) => {
                      setTextError(false);
                      setDialCode(dialCode);
                      setPhoneIsVerified(isVerified);
                      setPhoneNumber(unmaskedPhoneNumber);
                    }}
                    clearTextInput={clearTextInput}
                    onSubmitEditing={handleSubmit}
                  />
                </ContainerInput>
              </Column>
            </Row>
            <Button
              onPress={handleSubmit}
              disabled={!phoneIsVerified}
              activeOpacity={phoneIsVerified ? 1 : 0.5}
              style={{ backgroundColor: phoneIsVerified ? '#249035' : '#aaa' }}>
              <LabelButton>Abrir no WhatsApp</LabelButton>

              <ContainerWhatsAnimation>
                <LottieView
                  source={PhoneAnimation}
                  ref={e => (animation = e)}
                  style={{ height: 70, width: 70 }}
                />
              </ContainerWhatsAnimation>
            </Button>

            <LinkButton onPress={onShare}>
              <LabelButton style={{ color: '#249035', marginRight: 5 }}>
                Indicar o app para amigos
              </LabelButton>
              <Icon name={'share-social-outline'} size={20} color={'#249035'} />
            </LinkButton>
          </Body>
          {!keyboardIsOpened && (
            <Footer>
              <LabelFooter>Versão: {DeviceInfo.getVersion()}</LabelFooter>
            </Footer>
          )}
        </Container>
      </ImageBackground>
      <SelectWhatsappVersionModal
        onCloseModal={onCloseModal}
        modalIsVisible={openChoiceModal}
        onPressLeftButton={() => {
          openWhatsApp(`whatsapp://send?phone=${dialCode}${phoneNumber}`);
        }}
        onPressRightButton={() => {
          openWhatsApp(
            `https://api.whatsapp.com/send?phone=${dialCode}${phoneNumber}`,
          );
        }}
      />
    </>
  );
};

export default Home;
