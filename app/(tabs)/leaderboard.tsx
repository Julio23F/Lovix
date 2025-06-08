import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trophy, Medal, Award, Star } from 'lucide-react-native';

const leaderboardData = [
  {
    id: 1,
    name: 'Dianne Russell',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 2840,
    streak: 12,
    rank: 1
  },
  {
    id: 2,
    name: 'Robert Fox',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 2650,
    streak: 7,
    rank: 2
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 2420,
    streak: 15,
    rank: 3
  },
  {
    id: 4,
    name: 'Devon Lane',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 2180,
    streak: 5,
    rank: 4
  },
  {
    id: 5,
    name: 'Marvin McKinney',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    score: 1950,
    streak: 9,
    rank: 5
  }
];

export default function LeaderboardScreen() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy size={24} color="#FFD700" />;
      case 2:
        return <Medal size={24} color="#C0C0C0" />;
      case 3:
        return <Award size={24} color="#CD7F32" />;
      default:
        return <Text style={styles.rankNumber}>{rank}</Text>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return '#FFD700';
      case 2:
        return '#C0C0C0';
      case 3:
        return '#CD7F32';
      default:
        return '#6B7280';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Classement</Text>
          <Text style={styles.subtitle}>Qui sera le champion cette semaine ?</Text>
        </View>

        {/* Top 3 Podium */}
        <View style={styles.podium}>
          {/* Second Place */}
          <View style={[styles.podiumPlace, styles.secondPlace]}>
            <View style={styles.podiumUser}>
              <Image source={{ uri: leaderboardData[1].avatar }} style={styles.podiumAvatar} />
              <View style={[styles.rankBadge, { backgroundColor: '#C0C0C0' }]}>
                <Text style={styles.rankBadgeText}>2</Text>
              </View>
            </View>
            <Text style={styles.podiumName}>{leaderboardData[1].name}</Text>
            <Text style={styles.podiumScore}>{leaderboardData[1].score}</Text>
            <View style={[styles.podiumBar, { backgroundColor: '#C0C0C0', height: 60 }]} />
          </View>

          {/* First Place */}
          <View style={[styles.podiumPlace, styles.firstPlace]}>
            <View style={styles.podiumUser}>
              <Image source={{ uri: leaderboardData[0].avatar }} style={styles.podiumAvatar} />
              <View style={[styles.rankBadge, { backgroundColor: '#FFD700' }]}>
                <Text style={styles.rankBadgeText}>1</Text>
              </View>
            </View>
            <Text style={styles.podiumName}>{leaderboardData[0].name}</Text>
            <Text style={styles.podiumScore}>{leaderboardData[0].score}</Text>
            <View style={[styles.podiumBar, { backgroundColor: '#FFD700', height: 80 }]} />
          </View>

          {/* Third Place */}
          <View style={[styles.podiumPlace, styles.thirdPlace]}>
            <View style={styles.podiumUser}>
              <Image source={{ uri: leaderboardData[2].avatar }} style={styles.podiumAvatar} />
              <View style={[styles.rankBadge, { backgroundColor: '#CD7F32' }]}>
                <Text style={styles.rankBadgeText}>3</Text>
              </View>
            </View>
            <Text style={styles.podiumName}>{leaderboardData[2].name}</Text>
            <Text style={styles.podiumScore}>{leaderboardData[2].score}</Text>
            <View style={[styles.podiumBar, { backgroundColor: '#CD7F32', height: 40 }]} />
          </View>
        </View>

        {/* Full Leaderboard */}
        <View style={styles.leaderboardSection}>
          <Text style={styles.sectionTitle}>Classement complet</Text>
          
          {leaderboardData.map((user, index) => (
            <View key={user.id} style={styles.leaderboardItem}>
              <View style={styles.userInfo}>
                <View style={[styles.rankContainer, { borderColor: getRankColor(user.rank) }]}>
                  {getRankIcon(user.rank)}
                </View>
                
                <Image source={{ uri: user.avatar }} style={styles.userAvatar} />
                
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <View style={styles.userStats}>
                    <Star size={14} color="#FF6B35" fill="#FF6B35" />
                    <Text style={styles.streakText}>{user.streak} jour{user.streak > 1 ? 's' : ''}</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.scoreInfo}>
                <Text style={styles.userScore}>{user.score}</Text>
                <Text style={styles.scoreLabel}>points</Text>
              </View>
            </View>
          ))}
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
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  podium: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  podiumPlace: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  firstPlace: {
    zIndex: 3,
  },
  secondPlace: {
    zIndex: 2,
  },
  thirdPlace: {
    zIndex: 1,
  },
  podiumUser: {
    position: 'relative',
    marginBottom: 8,
  },
  podiumAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  rankBadge: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  rankBadgeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  podiumName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 4,
  },
  podiumScore: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#FF6B35',
    marginBottom: 8,
  },
  podiumBar: {
    width: 60,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  leaderboardSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1F2937',
    marginBottom: 20,
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rankContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginRight: 12,
  },
  rankNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#6B7280',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 4,
  },
  userStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  scoreInfo: {
    alignItems: 'flex-end',
  },
  userScore: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#FF6B35',
  },
  scoreLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
});