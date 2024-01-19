import PropTypes from 'prop-types';
import React from 'react';

const VideosS = React.memo(({ urls }) => {

    return (
        <>
            {urls.map((url) => (
                <div key={url.objectID} className='videos'>
                    <div className='videoWrapperS'>
                        <div className='titleS'>{url.title}</div>
                        <div className='playerWrapper'>
                            <div className='imageWrapper'>
                                <div>
                                    <video controls='controls' className='videoImage' width={400} 
                                    height={230} poster={url.imageUrlR2}>
                                        <source src={url.videoUrlD} type='video/mp4'></source>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            ))}
        </>
        
    )
});
VideosS.displayName = 'VideosS';

VideosS.propTypes = {
    urls: PropTypes.array.isRequired,
}

export default VideosS;
