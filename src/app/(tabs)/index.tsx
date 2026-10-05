import "@/global.css";
import { FlatList, Image, Text, View } from "react-native";

import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind'
import images from "@/constants/images";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import dayjs from 'dayjs'
import ListHeading from "../../../components/ListHeading";
import UpcommingSubscriptionCard from "../../../components/UpcommingSubscriptionCard";
import { formatCurrency } from "../../../lib/utils";
import SubscriptionCard from "../../../components/SubscriptionCard";
import { useState } from "react";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const [expandedSubId, setExpandedSubId] = useState<string | null>(null)

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
        <FlatList
          ListHeaderComponent={
            <>
              <View className="home-header">
                <View className="home-user">
                  <Image source={images.avatar} className="home-avatar"></Image>
                </View>
                <Text className="home-user-name">{HOME_USER.name}</Text>
                <Image source={icons.add} className="home-add-icon"></Image>
              </View>

              <View className="home-balance-card">
                <Text className="home-balance-label">Balance</Text>
                <View className="home-balance-row">
                  <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
                  <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
                </View>
              </View>

              <View>
                <ListHeading title="Upcoming" />

                <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  renderItem={({ item }) => (
                    <UpcommingSubscriptionCard
                      data={item}
                      key={item.id}
                    />)}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={
                    <Text className="home-empty-state">No upcomming renewals yet.</Text>
                  }
                />
              </View>
              <ListHeading title="All Subscriptions" />
            </>
          }
          data={HOME_SUBSCRIPTIONS}
          renderItem={({ item }) => (
            <SubscriptionCard
              expanded={expandedSubId === item.id}
              onPress={() => setExpandedSubId(expandedSubId === item.id ? null : item.id)}
              {...item} />)}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="home-empty-state">No subscriptions yet.</Text>
          }
          extraData={expandedSubId}
          ItemSeparatorComponent={
            () => <View className="h-4" />
          }
          contentContainerClassName="pb-20"
        />
    </SafeAreaView>
  );
}
