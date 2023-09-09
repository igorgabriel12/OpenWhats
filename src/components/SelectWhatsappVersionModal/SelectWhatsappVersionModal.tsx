import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { adUnitId } from '../../utils/admobConfig';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

import {
  Container,
  LabelTitle,
  AppNameLabel,
  CancelButtonLabel,
} from './SelectWhatsappVersionModal.styles';
import WhatsAppIconSvg from '../../assets/svgs/whatsapp';
import WhatsAppBusinessIconSvg from '../../assets/svgs/whatsapBusiness';

interface SelectWhatsappVersionModalProps {
  modalIsVisible: boolean;
  onCloseModal: () => void;
  onPressLeftButton: () => void;
  onPressRightButton: () => void;
}

const SelectWhatsappVersionModal: React.FC<SelectWhatsappVersionModalProps> = ({
  onCloseModal,
  modalIsVisible,
  onPressLeftButton,
  onPressRightButton,
}) => {
  return (
    <Modal
      swipeDirection={['down']}
      isVisible={modalIsVisible}
      onBackdropPress={onCloseModal}
      onSwipeComplete={onCloseModal}
      onBackButtonPress={onCloseModal}
      style={{
        padding: 0,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <Container>
        <View style={{}}>
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>

        <View style={{ flex: 1, padding: 20 }}>
          <LabelTitle>Abrir em:</LabelTitle>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={onPressLeftButton}
              style={{ flex: 1, alignItems: 'center', padding: 20 }}>
              <View style={{ height: 100, width: 100 }}>
                <WhatsAppIconSvg size={100} />
              </View>
              <AppNameLabel>WhatsApp</AppNameLabel>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onPressRightButton}
              style={{ flex: 1, alignItems: 'center', padding: 20 }}>
              <View style={{ height: 100, width: 100 }}>
                <WhatsAppBusinessIconSvg size={100} />
              </View>
              <AppNameLabel>WhatsApp Business</AppNameLabel>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={onCloseModal}
              style={{
                height: 45,
                width: '80%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CancelButtonLabel>Cancelar</CancelButtonLabel>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </Modal>
  );
};

export default SelectWhatsappVersionModal;
