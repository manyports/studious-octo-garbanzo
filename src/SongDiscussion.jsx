import React, { useState } from 'react';

function SongDiscussion(){
    const [upVotes, setUpVotes] = useState(3);
    const [downVotes, setDownVotes] = useState(0);
    const [upVoted, setUpVoted] = useState(false);
    const [downVoted, setDownVoted] = useState(false);

    const handleUpVote = () => {
        if (!upVoted) {
            setUpVotes(upVotes + 1);
            setUpVoted(true);
            if (downVoted) {
                setDownVotes(downVotes - 1);
                setDownVoted(false);
            }
        }
    };

    const handleDownVote = () => {
        if (!downVoted) {
            setDownVotes(downVotes + 1);
            setDownVoted(true);
            if (upVoted) {
                setUpVotes(upVotes - 1);
                setUpVoted(false);
            }
        }
    };

    return (
        <>
        <div className="aw-container">
            <div className="aw-details">
                <div className="aw-title">
                    <div className="aw-title">
                        <h1>Radio</h1>
                    </div>
                    <div className="aw-author">
                        <h3>Lana Del Rey</h3>
                    </div>
                </div>
            <div className="aw-description">
                <p>
                Альбом: Born To Die 
                <br/>
                Жанр: Альтернатива/Инди с некоторыми элементами садкора (меланхоличный поджанр альтернативного рока)
                <br />
                Текст: Тексты рисуют картину человека, который преодолел тяжелое прошлое и нашел любовь и счастье. Они ссылаются на американскую мечту и жизнь в Лос-Анджелесе. Также присутствует чувство чувственности: Лана сравнивает себя с такими вещами, как корица и сахарный яд.
                <br />
                Музыка: Песня имеет мечтательное, атмосферное звучание, многослойный вокал и меланхоличную, но обнадеживающую мелодию.
                </p>
            </div>
            <div className="interaction">
                <button className="interaction-button" onClick={handleUpVote}>
                    <img className="interaction-image" src="src/assets/up.svg"/>
                </button>
                {upVotes}
                <button className="interaction-button" onClick={handleDownVote}>
                    <img className="interaction-image" src="src/assets/down.svg"/>
                </button>
                {downVotes}
            </div>
            </div>
            <div className="aw-image-container">
                <img className="aw-image" src="https://i.scdn.co/image/ab67616d0000b273a1c37f3fd969287c03482c3b"/>
            </div>
        </div>
        <div className="createarticle">
            <a className="createart" href="/#/create"><img src="src/assets/createarticle.svg"/></a>
        </div>
        </>
    );
}

export default SongDiscussion;  