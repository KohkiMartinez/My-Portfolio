import PropTypes from 'prop-types';

const Images = ({ data }) => {
    return (
        <>
            {data.map((d) => (
                <div key={d.objectID} className='howToImageContainer'>
                    {d.text.split('\n').map((line, idx) => (
                        <div key={idx}>{line}</div>
                    
                    ))}
                    <br />
                    <div className='howToImage'>
                        <img src={d.imageUrlR2}></img>
                    </div>
                </div>
            ))}
        </>
    )
}

Images.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Images;
