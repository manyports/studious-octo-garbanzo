import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

async function getAccessToken() {
    let clientId = Cookies.get('clientId');
    if (!clientId) {
        clientId = prompt('Введите Client-ID вашего Spotify (есть на Developers Spotify):');
        Cookies.set('clientId', clientId);
    }

    let clientSecret = Cookies.get('clientSecret');
    if (!clientSecret) {
        clientSecret = prompt('Введите Client-Secret вашего Spotify (есть на Developers Spotify):');
        Cookies.set('clientSecret', clientSecret);
    }

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    return data.access_token;
}

function AlbumCreateForm() {
    const [songName, setSongName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedTrackId, setSelectedTrackId] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [genre, setGenre] = useState('');
    const [text, setText] = useState('');
    const [atmosphere, setAtmosphere] = useState('');
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        getAccessToken().then(token => setAccessToken(token));
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${songName}&type=track`, {
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setSearchResults(data.tracks.items);
            }
            
            if (data.tracks.items.length > 0) {
                setSelectedTrackId(data.tracks.items[0].id);
            }
            
            else {
                console.error('Failed to fetch search results');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleTrackSelect = (e) => {
        setSelectedTrackId(e.target.value);
    };
    const handleSubmit = () => {
        alert('Ваша работа будет проверена и добавлена на сайт');
    };


    const handleTrackConfirm = () => {
    console.log('Selected track ID:', selectedTrackId);
    console.log('Search results:', searchResults);

    const track = searchResults.find(track => track.id === selectedTrackId);
    setSelectedTrack(track);
};

    return (
        <div className="create-container">
            <h1>Создать обсуждение трека.</h1>
            <form onSubmit={handleSearch}>
                <div className="finder">
                <p>Введите название песни:</p>
                <input type="text" name="songname" value={songName} onChange={(e) => setSongName(e.target.value)} />
                <input className="button-below" type="submit" value="Search" />
                </div>
            </form>

            {searchResults.length > 0 && (
                <div className="resultss">
                    <h2>Результаты поиска:</h2>
                    <select onChange={handleTrackSelect}>
                        {searchResults.map((track) => (
                            <option key={track.id} value={track.id}>{track.name}</option>
                        ))}
                    </select>
                    <button className="button-below" onClick={handleTrackConfirm}>Подтвердить выбор</button>
                </div>
            )}

            {selectedTrack && (
                <div className="info-container">
                <div className="info-contcont">
                    <h2>Выбранная песня: {selectedTrack.name} , автор которой - {selectedTrack.artists[0].name}</h2>
                    <h2>Введите дополнительную информацию:</h2>
                    <p>Жанр:</p>
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                    <p>Текст:</p>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <p>Атмосфера:</p>
                    <input type="text" value={atmosphere} onChange={(e) => setAtmosphere(e.target.value)} />
                </div>
                <button className="button-below" onClick={handleSubmit}>Отправить на проверку</button>
                </div>
            )}
        </div>
    );
}

export default AlbumCreateForm;