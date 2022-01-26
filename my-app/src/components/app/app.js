import AppInfo from '../app-info/app-info'
import SearchPanel from '../searc-panel/searc-panel';
import AppFillter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employets-add-form/employets-add-form';

import './app.css';

function App() {
    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFillter/>
            </div>

            <EmployersList/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;
