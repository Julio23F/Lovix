import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Star, Target, Trophy, Calendar, Clock, BookOpen, Award, Settings } from 'lucide-react-native';

const currentUser = {
  name: 'Dianne Russell',
  avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  level: 12,
  xp: 2840,
  nextLevel: 3000,
  streak: 12,
  rank: 1,
  totalLessons: 156,
  completedChallenges: 89,
  timeSpent: '2h 45m'
};

const achievements = [
  { id: 1, title: 'First Steps', description: 'Complete your first lesson', earned: true },
  { id: 2, title: 'Week Warrior', description: '7-day streak', earned: true },
  { id: 3, title: 'Challenge Master', description: 'Complete 50 challenges', earned: true },
  { id: 4, title: 'Top Learner', description: 'Reach #1 on leaderboard', earned: true },
  { id: 5, title: 'Dedicated Student', description: '30-day streak', earned: false },
  { id: 6, title: 'French Explorer', description: 'Complete 200 lessons', earned: false },
];

export default function ProfileScreen() {
  const progressPercentage = (currentUser.xp / currentUser.nextLevel) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: currentUser.avatar }} style={styles.profileImage} />
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{currentUser.level}</Text>
            </View>
          </View>
          
          <Text style={styles.userName}>{currentUser.name}</Text>
          <Text style={styles.userRank}>#{currentUser.rank} sur le classement</Text>
          
          <TouchableOpacity style={styles.settingsButton}>
            <Settings size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* XP Progress */}
        <View style={styles.xpSection}>
          <View style={styles.xpHeader}>
            <Text style={styles.xpTitle}>Niveau {currentUser.level}</Text>
            <Text style={styles.xpText}>{currentUser.xp} / {currentUser.nextLevel} XP</Text>
          </View>
          
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Star size={24} color="#FF6B35" />
            </View>
            <Text style={styles.statNumber}>{currentUser.streak}</Text>
            <Text style={styles.statLabel}>Jour de suite</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <BookOpen size={24} color="#10B981" />
            </View>
            <Text style={styles.statNumber}>{currentUser.totalLessons}</Text>
            <Text style={styles.statLabel}>Leçons</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Target size={24} color="#8B5CF6" />
            </View>
            <Text style={styles.statNumber}>{currentUser.completedChallenges}</Text>
            <Text style={styles.statLabel}>Défis</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Clock size={24} color="#F59E0B" />
            </View>
            <Text style={styles.statNumber}>{currentUser.timeSpent}</Text>
            <Text style={styles.statLabel}>Temps</Text>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.achievementsSection}>
          <Text style={styles.sectionTitle}>Succès</Text>
          
          <View style={styles.achievementsList}>
            {achievements.map((achievement) => (
              <View key={achievement.id} style={[
                styles.achievementCard,
                !achievement.earned && styles.achievementCardLocked
              ]}>
                <View style={[
                  styles.achievementIcon,
                  !achievement.earned && styles.achievementIconLocked
                ]}>
                  <Award size={24} color={achievement.earned ? "#FF6B35" : "#9CA3AF"} />
                </View>
                
                <View style={styles.achievementInfo}>
                  <Text style={[
                    styles.achievementTitle,
                    !achievement.earned && styles.achievementTitleLocked
                  ]}>
                    {achievement.title}
                  </Text>
                  <Text style={styles.achievementDescription}>
                    {achievement.description}
                  </Text>
                </View>
                
                {achievement.earned && (
                  <View style={styles.earnedBadge}>
                    <Text style={styles.earnedText}>✓</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <TouchableOpacity style={styles.actionButton}>
            <Trophy size={20} color="#FF6B35" />
            <Text style={styles.actionButtonText}>Voir le classement</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Calendar size={20} color="#FF6B35" />
            <Text style={styles.actionButtonText}>Rappels d'étude</Text>
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
  profileHeader: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FF6B35',
  },
  levelBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FF6B35',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  levelText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  userName: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1F2937',
    marginBottom: 4,
  },
  userRank: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#6B7280',
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 8,
  },
  xpSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  xpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  xpTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
  },
  xpText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#6B7280',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF6B35',
    borderRadius: 4,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    margin: '1%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statIcon: {
    marginBottom: 12,
  },
  statNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  achievementsSection: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1F2937',
    marginBottom: 16,
  },
  achievementsList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  achievementCardLocked: {
    opacity: 0.6,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementIconLocked: {
    backgroundColor: '#F3F4F6',
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 4,
  },
  achievementTitleLocked: {
    color: '#9CA3AF',
  },
  achievementDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  earnedBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  earnedText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  actionsSection: {
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  actionButton: {
    flexDirection: 'row',
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
  actionButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#1F2937',
    marginLeft: 12,
  },
});