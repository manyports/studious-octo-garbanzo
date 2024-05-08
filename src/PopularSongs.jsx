import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function PopularSongs(){
    const [topTracks, setTopTracks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [credentialsEntered, setCredentialsEntered] = useState(false);
    const [clientId, setClientId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let id = clientId || Cookies.get('clientId') || prompt('Введите Client-ID вашего Spotify (есть на Developers Spotify):');
                let secret = clientSecret || Cookies.get('clientSecret') || prompt('Введите Client-Secret вашего Spotify (есть на Developers Spotify):');
                setClientId(id);
                setClientSecret(secret);
                Cookies.set('clientId', id);
                Cookies.set('clientSecret', secret);
                setCredentialsEntered(true);

                const tokenResponse = await axios.post(
                    'https://accounts.spotify.com/api/token',
                    'grant_type=client_credentials',
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Authorization: `Basic ${btoa(`${id}:${secret}`)}`,
                        },
                    }
                );
                const access_token = tokenResponse.data.access_token;
                const headers = {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json',
                };
                const tracksResponse = await axios.get(
                    'https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=10',
                    { headers }
                );
                setTopTracks(tracksResponse.data.items);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        if (!credentialsEntered) {
            fetchData();
        }
    }, [credentialsEntered, clientId, clientSecret]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка {error.message}</p>;

    return (
        <div className='PopSongs'>
            <h1>топ треки по миру 🌍</h1>
            <p> * обновляются ежедневно</p>
            <table>
                <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Название трека</th>
                        <th>Артист(ы)</th>
                    </tr>
                </thead>
                <tbody>
                    {topTracks.map((track, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{track.track.name}</td>
                            <td>
                                {track.track.artists.map((artist, index) => (
                                    <span key={index}>{artist.name}</span>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Данные берутся <a href="https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF" target='_blank'>отсюда</a></p>
        </div>
    );
};

export default PopularSongs;