import { CreditCard as Edit3, MessageCircleHeart, Share2 } from 'lucide-react-native';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const users = [
  {
    id: 1,
    name: 'Robert Fox',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 3,
    streak: 7
  },
  {
    id: 2,
    name: 'Dianne Russell',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 5,
    streak: 12
  }
];

const challenges = [
  {
    id: 1,
    isYourTurn: true,
    phrase: 'Une soirée en ville.',
    translation: 'An evening in town.',
    user: 'Robert',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    type: 'translation',
    difficulty: 'medium'
  },
  {
    id: 2,
    isYourTurn: false,
    phrase: 'Un dîner romantique.',
    translation: 'A romantic dinner.',
    user: 'Dianne',
    userAvatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    type: 'pronunciation',
    difficulty: 'easy'
  },
  {
    id: 1,
    isYourTurn: true,
    phrase: 'Une soirée en ville.',
    translation: 'An evening in town.',
    user: 'Robert',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    type: 'translation',
    difficulty: 'medium'
  },
];
const screen = Dimensions.get('window');

export default function GameScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>

          <View style={styles.vsContainer}>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreNumber}>{users[0].score}</Text>
              <View style={styles.middleLine}></View>
              <Text style={styles.scoreNumber}>{users[0].score}</Text>
            </View>
            <View style={styles.vsTextContainer}>
              <Text style={styles.vsText}>Scores</Text>
            </View>
          </View>
          <View style={styles.messageContainer}>
            <MessageCircleHeart size={24} color="#6B7280"/>
          </View>

          <View style={styles.userComparison}>
            <View style={styles.userCardLeft}>
              <Image source={{ uri: users[0].avatar }} style={styles.userAvatar} />
              <Text style={styles.userName}>{users[0].name}</Text>
            </View>
            <View style={styles.middleLine}></View>
          
            <View style={styles.userCardRight}>
              <Image source={{ uri: users[1].avatar }} style={styles.userAvatar} />
              <Text style={styles.userName}>{users[1].name}</Text>
            </View>
          </View>
        </View>

        <View style={styles.challengeSection}>
          <Text style={styles.sectionTitle}>Échangeable</Text>
          <Text style={styles.sectionSubtitle}>Recherche</Text>
          
          {challenges.map((challenge, key) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.challengeCard,
                challenge.isYourTurn && {marginTop: 15}
              ]}
              // onPress={() => handleChallengePress(challenge.id)}
            >
              {challenge.isYourTurn && 
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>
                  C'est ton tour
                  </Text>
                </View>
              }
              <View style={styles.challengeHeader}>
                <View style={styles.challengeUser}>
                  <Image source={{ uri: challenge.userAvatar }} style={styles.challengeUserAvatar} />
                  {challenge.isYourTurn ?
                    <Text style={styles.challengeUserName}>A toi de jouer !</Text>
                    :<Text style={styles.challengeUserName}>{challenge.user} a gagné !</Text>
                  } 
                </View>
                <View style={styles.challengeActions}>
                  <TouchableOpacity style={styles.shareButton}>
                    <Share2 size={16} color="#6B7280" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.editButton}>
                    <Edit3 size={16} color="#6B7280" />
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.challengeContent}>
                <Text style={styles.challengePhrase}>{challenge.phrase}</Text>
                <Text style={styles.challengeTranslation}>{challenge.translation}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 30,
    position: 'relative',
    alignItems: 'center',
    // backgroundColor: "#fff",

   

  },
  userComparison: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  userCardLeft: {
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    // padding: 16,
    // elevation: 4,
    // minWidth: 120,

    width: (screen.width / 2) - 20,
    height: (screen.height / 5) - 10,

    overflow: 'hidden',
  },
  userCardRight: {
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    // padding: 16,
    // elevation: 4,
    // minWidth: 120,

    width: (screen.width / 2) - 20,
    height: (screen.height / 5) - 10,
    overflow: 'hidden',
  },
  userAvatar: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 4,
    textAlign: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: '#FFF7ED',
    paddingHorizontal: 12,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    height: '50%',
    width: '100%',
  },
  scoreNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#E60342',
    marginRight: 4,
  },
  middleLine: {
    width: 2,
    height: '100%',
    backgroundColor: "#fff"
  },
  messageContainer: {
    position: 'absolute',
    width: 45,
    height: 35,
    bottom: 20,
    right: 19,
    zIndex: 2,
    backgroundColor: "#fff",
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  vsContainer: {
    position: 'absolute',
    width: 80,
    height: 50,
    top: 55,
    zIndex: 2,
    backgroundColor: '#E60342',
    padding: 2,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  vsTextContainer: {
    // paddingTop: 3
  },
  vsText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  challengeSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#E60342',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },
  challengeCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',

    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // elevation: 4,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  badgeContainer: {
    // alignItems: 'flex-end',
    position: "absolute",
    top: -20,
    left: 2,
    backgroundColor: "#D1FAE5",
    width: (screen.width / 3),
    height: 35,
    borderColor: "#fff",
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",

    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    
    overflow: 'hidden',
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#000',
    textAlign: 'center',
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  challengeUser: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  challengeUserAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  challengeUserName: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#6B7280',
  },
  challengeActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    padding: 8,
    marginRight: 8,
  },
  editButton: {
    padding: 8,
  },
  challengeContent: {
    // marginBottom: 16,
  },
  challengePhrase: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 4,
  },
  challengeTranslation: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
});