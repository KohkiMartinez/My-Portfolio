// Results
import Loading from "../components/Loading";

const Results = (props) => {
    return(
        <div>
            {props.loading? <Loading />:
                <div>
                    <p>Date: {props.countryData.date.slice(0, 10)} </p>
                    <p>New Cases: {props.countryData.newConfirmed.toLocaleString()} </p>
                    <p>Total Cases: {props.countryData.totalConfirmed.toLocaleString()} </p>
                    <p>New Recovered: {props.countryData.newRecovered.toLocaleString()} </p>
                    <p>Total Recovered: {props.countryData.totalRecovered.toLocaleString()} </p>
                </div>
            }
        </div>
    );
};

export default Results;
