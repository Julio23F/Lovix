import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { AppImages } from '../../assets/images';

interface Props {
  animationController: React.RefObject<Animated.Value>;
}

const IMAGE_WIDTH = 350;
const IMAGE_HEIGHT = 250;

const PlayTogetherView: React.FC<Props> = ({ animationController }) => {
  const window = useWindowDimensions();

  const playTogetherRef = useRef<Text | null>(null);

  const playTogetherAnimation = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.8],
    outputRange: [-(26 * 2), 0, 0],
  });
  const textAnim = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [0, 0, -window.width * 2, 0, 0],
  });
  const imageAnim = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [0, 0, -350 * 4, 0, 0],
  });
  const slideAnim = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.8],
    outputRange: [0, 0, -window.width, -window.width],
  });

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    >
      <Animated.Text
        style={[styles.title, { transform: [{ translateY: playTogetherAnimation }] }]}
        ref={playTogetherRef}
      >
        Jouez à deux
      </Animated.Text>
      <Animated.Text
        style={[styles.subtitle, { transform: [{ translateX: textAnim }] }]}
      >
        Des défis, des questions et des missions{'\n'}
        pour renforcer votre lien tout en vous amusant.
      </Animated.Text>
      <Animated.Image
        style={[styles.image, { transform: [{ translateX: imageAnim }] }]}
        source={AppImages.playTogether_image}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    color: 'black',
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'WorkSans-Bold',
  },
  subtitle: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    paddingHorizontal: 64,
    paddingVertical: 16,
  },
  image: {
    maxWidth: IMAGE_WIDTH,
    maxHeight: IMAGE_HEIGHT,
  },
});

export default PlayTogetherView;