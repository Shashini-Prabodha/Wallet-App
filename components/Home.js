import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';



const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Home = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'music', title: 'Music'},
        {key: 'albums', title: 'Albums'},
        {key: 'recents', title: 'Recents'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default Home;
