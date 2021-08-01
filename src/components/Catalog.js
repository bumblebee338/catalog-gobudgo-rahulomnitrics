import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Cars from "./Cars";
import Books from "./Books";

const Catalog = () =>{
    return(
        <div>
           <div class="jumbotron">
            <h1 class="display-4">CATALOG</h1>
            <p class="lead">Here you will find catalogs for boths books and cars.</p>
            </div>
            <br/>
            
            <Tabs>
                <TabList>
                    <Tab>CARS</Tab>
                    <Tab>BOOKS</Tab>
                </TabList>

                <TabPanel>
                    <Cars/>
                </TabPanel>
               
                <TabPanel>
                    <Books/>
                </TabPanel>
            </Tabs>
        </div>
       
    )
}

export default Catalog;