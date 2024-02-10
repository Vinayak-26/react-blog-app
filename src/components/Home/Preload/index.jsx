import React, { useEffect, useState } from 'react';
import './styles.css';
import Home from '../../../pages/Home';

function Preload(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        setTimeout(() =>{
            setIsLoading(false);
        }, 1000);
    }, []);
    return(
        <div>
            {isLoading ? (
                <div className='preload-wrap'> 
                    <video className='preload-video' autoPlay loop muted>
                        <source src='/assets/first_animation.mp4' type='video/mp4'/>
                    </video>

                </div>
            ) : (<Home />)
            }

        </div>
    );
}
export default Preload;