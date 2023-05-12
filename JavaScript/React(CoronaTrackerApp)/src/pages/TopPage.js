// TopPage
import Header from "../components/Header";
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

const TopPage = (props) =>{

    return(
        <div className="top-page-container">
            <Header />
            <Title />
            <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} />
            <Results countryData={props.countryData} loading={props.loading} />
        </div>
    );
};

export default TopPage;
