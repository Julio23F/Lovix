import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Volume2, Moon, Globe, CircleHelp as HelpCircle, LogOut, ChevronRight } from 'lucide-react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsGroups = [
    {
      title: 'Préférences',
      items: [
        {
          icon: <Bell size={24} color="#6B7280" />,
          title: 'Notifications',
          type: 'toggle',
          value: notifications,
          onChange: setNotifications,
        },
        {
          icon: <Volume2 size={24} color="#6B7280" />,
          title: 'Effets sonores',
          type: 'toggle',
          value: soundEffects,
          onChange: setSoundEffects,
        },
        {
          icon: <Moon size={24} color="#6B7280" />,
          title: 'Mode sombre',
          type: 'toggle',
          value: darkMode,
          onChange: setDarkMode,
        },
        {
          icon: <Globe size={24} color="#6B7280" />,
          title: 'Langue de l\'interface',
          type: 'navigate',
          value: 'Français',
        },
      ],
    },
    {
      title: 'Apprentissage',
      items: [
        {
          icon: <Bell size={24} color="#6B7280" />,
          title: 'Rappels quotidiens',
          type: 'navigate',
          subtitle: '19:00',
        },
        {
          icon: <Globe size={24} color="#6B7280" />,
          title: 'Langue cible',
          type: 'navigate',
          value: 'Français',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          icon: <HelpCircle size={24} color="#6B7280" />,
          title: 'Centre d\'aide',
          type: 'navigate',
        },
        {
          icon: <HelpCircle size={24} color="#6B7280" />,
          title: 'Nous contacter',
          type: 'navigate',
        },
      ],
    },
    {
      title: 'Compte',
      items: [
        {
          icon: <LogOut size={24} color="#EF4444" />,
          title: 'Se déconnecter',
          type: 'action',
          textColor: '#EF4444',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Paramètres</Text>
        </View>

        {settingsGroups.map((group, groupIndex) => (
          <View key={groupIndex} style={styles.settingsGroup}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            
            <View style={styles.groupItems}>
              {group.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={[
                    styles.settingItem,
                    itemIndex === group.items.length - 1 && styles.settingItemLast
                  ]}
                >
                  <View style={styles.settingLeft}>
                    <View style={styles.settingIcon}>
                      {item.icon}
                    </View>
                    
                    <View style={styles.settingInfo}>
                      <Text style={[
                        styles.settingTitle,
                        item.textColor && { color: item.textColor }
                      ]}>
                        {item.title}
                      </Text>
                      {item.subtitle && (
                        <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                      )}
                    </View>
                  </View>
                  
                  <View style={styles.settingRight}>
                    {item.type === 'toggle' && (
                      <Switch
                        value={item.value}
                        onValueChange={item.onChange}
                        trackColor={{ false: '#E5E7EB', true: '#FF6B35' }}
                        thumbColor={item.value ? '#FFFFFF' : '#FFFFFF'}
                      />
                    )}
                    
                    {item.type === 'navigate' && (
                      <View style={styles.navigateContainer}>
                        {item.value && (
                          <Text style={styles.settingValue}>{item.value}</Text>
                        )}
                        <ChevronRight size={20} color="#9CA3AF" />
                      </View>
                    )}
                    
                    {item.type === 'action' && (
                      <ChevronRight size={20} color="#9CA3AF" />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoTitle}>FrenchMaster</Text>
          <Text style={styles.appInfoVersion}>Version 2.1.0</Text>
          <Text style={styles.appInfoCopyright}>© 2025 FrenchMaster. Tous droits réservés.</Text>
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
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#1F2937',
  },
  settingsGroup: {
    marginBottom: 30,
  },
  groupTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#6B7280',
    paddingHorizontal: 20,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  groupItems: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingItemLast: {
    borderBottomWidth: 0,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#1F2937',
  },
  settingSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginRight: 8,
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  appInfoTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#FF6B35',
    marginBottom: 4,
  },
  appInfoVersion: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  appInfoCopyright: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});