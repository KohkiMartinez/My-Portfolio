// Card

const Card = (props) => {

    return(
        <div className="card-container">
            {props.allCountriesData.map((singleData, index) => 
                <div key={index}>
                    <h2>{singleData.Country}</h2>
                    <p>New Confirmed: {singleData.NewConfirmed.toLocaleString()}</p>
                    <p>Total Confirmed: {singleData.TotalConfirmed.toLocaleString()}</p>
                </div>
            )}
        </div>
    );
};

export default Card;
