import React, { useEffect, useState } from 'react'

const StarWarsCharsApi = `https://swapi.dev/api/people/`
const BeatlesAlbumsApi = `https://the-beatles-api.herokuapp.com/api/v1/albums/`

const Companies = ({data}) => {

  const [StarWarsChars, SetStarWarsChars] = useState([]);
  const [BeatlesAlbums, SetBeatlesAlbums] = useState([]);

  // Dynamically pull my page title.
  // https://stackoverflow.com/questions/62781907/react-hooks-0-vs-empty-array-as-second-argument-in-useeffect
  useEffect( () => {

    async function GetStarWarsChars() {
      const StarWarsCharsData = await fetch(StarWarsCharsApi)
      const data = await StarWarsCharsData.json()
      // console.log(data.results)
      SetStarWarsChars(data.results)
    }
    GetStarWarsChars()

    async function GetBeatlesAlbums() {
      const BeatlesAlbumsData = await fetch(BeatlesAlbumsApi)
      const data = await BeatlesAlbumsData.json()
      // console.log(data)
      SetBeatlesAlbums(data)
    }
    GetBeatlesAlbums()

  }, [])


  return (
    <>
      <h1>Companies</h1>

      <div id={"dynamic-data-wrapper"} className={"fontsize__small cols cols__equal"}>
        <div className={"col col__first"}>
          <h3>Star Wars characters, dynamic data from an API:</h3>
          <ul>
            {StarWarsChars.length === 0 ? <li>Loading...</li> : ''}
            {StarWarsChars.map(character => (
              <li key={character.name}>
                {character.name} ({character.height}cm)
              </li>
            ))}
          </ul>
        </div>
        <div className={"col col__last"}>
          <h3>Beatles albums, dynamic data from an API:</h3>
          <ul>
            {BeatlesAlbums.length === 0 ? <li>Loading...</li> : ''}
            {BeatlesAlbums.map(album => (
              <li key={album.albumName}>{album.albumName}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Companies;