import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/Styles';

function MainScreen({navigation}) {

    // 760184286672-fmu495c6mncua2oufen4gcuonrsodto1.apps.googleusercontent.com
    // AIzaSyDXkS8b2IO05qhePzvVLZBgkfYy6MZ2Jik

    const CLIENT_ID = '760184286672-fmu495c6mncua2oufen4gcuonrsodto1.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyDXkS8b2IO05qhePzvVLZBgkfYy6MZ2Jik';
    const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
    const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

    let [loaded, setLoaded] = useState(false);
    let [str, setStr] = useState('');

    useEffect(()=>{
        fetch(
            'https://httpbin.org/get', 
            { method: 'GET' }
        )
        .then( resp => resp.json() )
        .then( data => {
                setStr(JSON.stringify(data));
                setLoaded(true);
            } 
        );
    }, []);

    return (
        <View style={styles.container}>
            <Text>{str}</Text>
        </View>
    );
}

export {MainScreen};