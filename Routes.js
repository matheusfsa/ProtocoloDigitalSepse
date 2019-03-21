import React from 'react';
import { Router, Scene , Stack} from 'react-native-router-flux';
import TelaPrincipal from './components/TelaPrincipal';
import Pergunta from './components/Pergunta';

export default props => (
    <Router>
        <Stack key="root">
        <Scene key='telaPrincipal' init component={TelaPrincipal} hideNavBar />
        <Scene key='pergunta' component={Pergunta} title="Pergunta" navigationBarStyle={{borderWidth: 1.5, borderColor: '#d6d7da', backgroundColor:'rgb(1, 204, 0)'}}/>
        </Stack>
    </Router>
);