import {supabase} from './supabaseClient'
import { useEffect } from 'react';


function App(){
    useEffect(() => {
        supabase.from('users').select('*').then(({ data, error }) => {
            console.log(data, error);
        });
    }, []);
    return ("App is running");
}

export default App;