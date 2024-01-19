import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideosEx = React.memo(({ urls, userName, paymentStatus }) => {

    // function startVideo(targetUrl) {
    //     window.location.href = targetUrl;
    // }

    return (
        <>
            {urls.map((url) => (
                <div key={url.objectID} className='videos'>
                    <div className='videoWrapper'>
                        <div className='title'>{url.title}</div>
                        <div className='playerWrapper'>
                            <div className='imageWrapper'>

                                {url.limited === "0" ? (
                                    <div>
                                        <video controls='controls' className='videoImage' width={400} 
                                        height={230} poster={url.imageUrl}>
                                            <source src={url.videoUrlD} type='video/mp4'></source>
                                        
                                        </video>
                                        {/* <button onClick={() => startVideo(url.videoUrl)} className='startButtonD'>&#x2b07;</button> */}
                                    </div>
                                ) : (url.limited === "1" && userName ) ? (
                                    <div>
                                        <video controls='controls' className='videoImage' width={400} 
                                        height={230} poster={url.imageUrl}>
                                            <source src={url.videoUrlD} type='video/mp4'></source>
                                        
                                        </video>
                                        {/* <button onClick={() => startVideo(url.videoUrl)} className='startButtonD'>&#x2b07;</button> */}
                                    </div>
                                ) : (url.limited === "1" && !userName) ? (
                                    <div>
                                        <video controls='controls' className='videoImage' width={400} 
                                        height={230} poster={url.imageUrl}>
                                       
                                        
                                        </video>
                                        To start video, you need to <Link to='/Exvideos/login'>Login</Link> or <Link to='/Exvideos/register'>create an account </Link> 
                                        It only takes 3 minutes to create an account.
                                    </div>
                                ) : (url.limited === "2" && userName && paymentStatus ) ? (
                                    <div>
                                        <video controls='controls' className='videoImage' width={400} 
                                        height={230} poster={url.imageUrl}>
                                            <source src={url.videoUrlD} type='video/mp4'></source>
                                        
                                        </video>
                                        {/* <button onClick={() => startVideo(url.videoUrl)} className='startButtonD'>&#x2b07;</button> */}
                                    </div>
                                ) : (url.limited === "2" && userName && !paymentStatus ) ? (
                                    <div>
                                        <video controls='controls' className='videoImage' width={400} 
                                        height={230} poster={url.imageUrl}>
                                            {/* <source src={url.videoUrlD} type='video/mp4'></source> */}
                                        
                                        </video>
                                        {/* <button onClick={() => startVideo(url.videoUrl)} className='startButtonD'>&#x2b07;</button> */}
                                        {/* ここからの動画の再生方法は<Link to=''>こちら</Link>です。 */}
                                    </div>
                                ) : (url.limited === "2" && !userName) ? (
                                    <div>
                                        <video controls='controls' className='videoImage' width={400} 
                                        height={230} poster={url.imageUrl}>
                                        
                                        
                                        </video>
                                        To start video, you need to <Link to='/Exvideos/login'>Login</Link> or <Link to='/Exvideos/register'>create an account </Link> 
                                        It only takes 3 minutes to create an account.
                                    </div>
                                ) : (
                                    <div>
                                        <video controls='controls' className='videoImage' width={400} 
                                        height={230} poster={url.imageUrl}>
                                            {/* <source src={url.videoUrlD} type='video/mp4'></source> */}
                                        
                                        </video>
                                        {/* <button onClick={() => startVideo(url.videoUrl)} className='startButtonD'>&#x2b07;</button> */}
                                        To start video, you need to <Link to='/Exvideos/login'>Login</Link> or <Link to='/Exvideos/register'>create an account </Link> 
                                        It only takes 3 minutes to create an account.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>  
                </div>
            ))}
        </>
        
    )
});
VideosEx.displayName = 'Videos';
VideosEx.propTypes = {
    urls: PropTypes.array.isRequired,
    userName: PropTypes.string.isRequired,
    paymentStatus: PropTypes.string.isRequired,
}

export default VideosEx;
