import React, { useState } from 'react';
import {View, Text, TextInput, FlatList, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/thems/colors';
import Container from '../../components/common/container';
import Icon from '../common/Icon';
import Message from '../common/Message copy';
import PreviewLayout from '../common/PreviewLayout';


const TrackingListComponent = ({data, loading, someFun}) => {
    
    const [direction, setDirection] = useState("Active");

    const ListEmptyComponent=() => {
        return(
            <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
                <Message info message="No Track Numbers Here" />
            </View>
        )
    }

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity>
                <View style={{height: 40, width: '100%', marginTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row'}}>
                        <Icon type="material" size={17} name="airplanemode-on" style={{marginRight: 20}} />
                        <Text>{item.track_number}</Text>
                    </View>
                    <View>
                        <Icon type="material" size={17} name="arrow-forward-ios" style={{marginRight: 20}} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <Container style={{width: '100%', height: '100%', backgroundColor: colors.white}}>
            <View>
                <PreviewLayout
                    label="direction"
                    selectedValue={direction}
                    values={["Active", "Archive"]}
                    setSelectedValue={setDirection}
                    someFun={someFun}
                />

                {loading && (
                    <View style={{padding: 100}}>
                        <ActivityIndicator size='large' color={colors.primary} />
                    </View>
                )}

                {!loading && (
                    <FlatList
                        renderItem={renderItem}
                        data={data}
                        ListEmptyComponent={ListEmptyComponent}
                        keyExtractor={(item) => {String(item.id)}}
                    />
                )}

            </View>
        </Container>
    );
}

export default TrackingListComponent;