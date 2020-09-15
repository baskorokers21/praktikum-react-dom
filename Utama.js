import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Beranda';
import Tentangsaya from './Tentangsaya';
import Karya from './Karya';
import Kontak from './Kontak'

const Utama = () => (
    <switch>
        <Route exatc path="/" component={Beranda} />
        <Route path="/Tentangsaya" component={Tentangsaya} />
        <Route path="/Karya" component={Karya} />
        <Route path="/Kontak" component={Kontak}/>
    </switch>
)

    export default Utama;