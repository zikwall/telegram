import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { UIView, DialogItem } from '../components';
import { Fake } from '../utils';

export default function Home({ navigation }) {
    const [ isRefreshing, setIsRefreshing ] = useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    const onRefresh = React.useCallback(() => {
        setIsRefreshing(true);

        wait(2000).then(() => setIsRefreshing(false));
    }, [isRefreshing]);

    const onSelectDialog = () => {
        navigation.navigate('Chat');
    };

    return (
        <UIView>
            <FlatList
                data={Fake.DIALOGS}
                renderItem={({ item }) => (
                    <DialogItem
                        user={item.user}
                        message={item.last_message}
                        time={item.last_time}
                        muted={item.muted}
                        onSelect={onSelectDialog}
                    />
                )}
                refreshControl={
                     <RefreshControl
                         colors={["#9Bd35A", "#689F38"]}
                         refreshing={isRefreshing}
                         onRefresh={onRefresh}
                     />
                 }
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `__${index}`}
            />
        </UIView>
    );
}
