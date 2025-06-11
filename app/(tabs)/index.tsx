import { Check, CreditCard as Edit3, Heart, Share2, Target, X } from 'lucide-react-native';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    phrase: 'Une soirée en ville.',
    translation: 'An evening in town.',
    user: 'Robert',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    type: 'translation',
    difficulty: 'medium'
  },
  {
    id: 2,
    phrase: 'Un dîner romantique.',
    translation: 'A romantic dinner.',
    user: 'Dianne',
    userAvatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    type: 'pronunciation',
    difficulty: 'easy'
  }
];

export default function LearnScreen() {
  const [currentUser] = useState(users[1]);
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);

  const handleChallengePress = (challengeId: number) => {
    setSelectedChallenge(challengeId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header with User Profiles */}
        <View style={styles.header}>

          <View style={styles.vsContainer}>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreNumber}>{users[0].score}</Text>
              <View style={styles.scoreLine}></View>
              <Text style={styles.scoreNumber}>{users[0].score}</Text>
            </View>
            <View style={styles.vsTextContainer}>
              <Text style={styles.vsText}>Scores</Text>
            </View>
          </View>

          <View style={styles.userComparison}>
            <View style={styles.userCardLeft}>
              <Image source={{ uri: users[0].avatar }} style={styles.userAvatar} />
              <Text style={styles.userName}>{users[0].name}</Text>
            </View>
            
          
            <View style={styles.userCardRight}>
              <Image source={{ uri: users[1].avatar }} style={styles.userAvatar} />
              <Text style={styles.userName}>{users[1].name}</Text>
            </View>
          </View>
        </View>

        {/* Challenge Section */}
        <View style={styles.challengeSection}>
          <Text style={styles.sectionTitle}>Échangeable</Text>
          <Text style={styles.sectionSubtitle}>Recherche</Text>
          
          {challenges.map((challenge) => (
            <TouchableOpacity
              key={challenge.id}
              style={[
                styles.challengeCard,
                styles.challengeCardSelected
                // selectedChallenge === challenge.id && styles.challengeCardSelected
              ]}
              onPress={() => handleChallengePress(challenge.id)}
            >
              <View style={styles.badgeContainer}>
                <Text style={[styles.badge, { backgroundColor: "red" }]}>
                  "test"
                </Text>
              </View>
              <View style={styles.challengeHeader}>
                <View style={styles.challengeUser}>
                  <Image source={{ uri: challenge.userAvatar }} style={styles.challengeUserAvatar} />
                  <Text style={styles.challengeUserName}>{challenge.user} a gagné !</Text>
                </View>
                <View style={styles.challengeActions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Target size={20} color="#E60342" />
                  </TouchableOpacity>
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
              
              <View style={styles.challengeFooter}>
                <TouchableOpacity style={styles.searchButton}>
                  <Text style={styles.searchButtonText}>Recherche</Text>
                </TouchableOpacity>
                
                <View style={styles.challengeButtons}>
                  <TouchableOpacity style={styles.wrongButton}>
                    <X size={20} color="#EF4444" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.correctButton}>
                    <Check size={20} color="#10B981" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Actions */}
        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.likeButton}>
            <Heart size={24} color="#6B7280" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.challengeActionButton}>
            <Target size={24} color="#E60342" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,


    position: 'relative',
    alignItems: 'center',
  },
  userComparison: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  userCardLeft: {
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    // padding: 16,
    // elevation: 4,
    // minWidth: 120,

    width: 120,
    height: 120,
    overflow: 'hidden',
  },
  userCardRight: {
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    // padding: 16,
    // elevation: 4,
    // minWidth: 120,

    width: 120,
    height: 120,
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
  scoreLine: {
    width: 2,
    height: '100%',
    backgroundColor: "red"
  },
  vsContainer: {
    position: 'absolute',
    width: 65,
    height: 35,
    top: 45,
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
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  challengeCardSelected: {
    borderWidth: 1,
    borderColor: '#E60342',
  },
  badgeContainer: {
    alignItems: 'flex-end',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    textAlign: 'center',
    overflow: 'hidden',
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
  actionButton: {
    padding: 8,
    backgroundColor: '#FFF7ED',
    borderRadius: 12,
    marginRight: 8,
  },
  shareButton: {
    padding: 8,
    marginRight: 8,
  },
  editButton: {
    padding: 8,
  },
  challengeContent: {
    marginBottom: 16,
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
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  searchButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#6B7280',
  },
  challengeButtons: {
    flexDirection: 'row',
  },
  wrongButton: {
    backgroundColor: '#FEE2E2',
    borderRadius: 24,
    padding: 12,
    marginRight: 8,
  },
  correctButton: {
    backgroundColor: '#D1FAE5',
    borderRadius: 24,
    padding: 12,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    marginTop: 20,
  },
  likeButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    padding: 16,
  },
  challengeActionButton: {
    backgroundColor: '#FFF7ED',
    borderRadius: 24,
    padding: 16,
  },
});