import React from "react";

const Card = ({email, name, id, UserName}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <img src={`https://robohash.org/${id}?200x200`} alt="robot"></img>
                <div>
                    <h2>{name}</h2>
                    <p>{UserName}</p>
                    <p>{email}</p>
                </div>
            </div>
            
        </div>
    );
}

export default Card;