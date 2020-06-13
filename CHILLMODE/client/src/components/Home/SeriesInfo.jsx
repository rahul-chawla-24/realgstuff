import React, { Component } from 'react'
// import Footer from "../Layout/Footer"

export default class MovieInfoPage extends Component {
    constructor(){
        super();
        this.state={
            "SeasonStatus" : true,
            data :{
                    "id": 5,
                    "moviedbId": 1396,
                    "adult": false,
                    "posterPath": "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
                    "backdropPath": "tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
                    "name": "Breaking Bad",
                    "originalTitle": "Breaking Bad",
                    "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
                    "rating": 9,
                    "language": "English",
                    "seasons": [
                        {
                            "id": 1,
                            "seasonNumber": 1,
                            "rating": 9,
                            "releaseDate": "2009-02-17",
                            "overview": "High school chemistry teacher Walter White's life is suddenly transformed by a dire medical diagnosis. Street-savvy former student Jesse Pinkman \\\"teaches\\\" Walter a new trade.",
                            "posterPath": "/1BP4xYv9ZG4ZVHkL7ocOziBbSYH.jpg",
                            "showId": 5,
                            "episodes": [
                                {
                                    "id": 1,
                                    "name": "Good Cop Bad Cop",
                                    "episodeNumber": 1,
                                    "overview": "Hank and Marie try to spice up their relationship on Valentine's Day.",
                                    "seasonNumber": 1,
                                    "stillPath": "/t729tFVXPetnJlJ2VsUZQz0rX6v.jpg",
                                    "rating": 8,
                                    "releaseDate": "2009-02-17",
                                    "seasonId": 1
                                },
                                {
                                    "id": 2,
                                    "name": "Wedding Day",
                                    "episodeNumber": 2,
                                    "overview": "Walt and Hank have a talk before Hank gets married.",
                                    "seasonNumber": 1,
                                    "stillPath": "/wT62P6ZnjKgZXk0M5hHl4e5zSjB.jpg",
                                    "rating": 8,
                                    "releaseDate": "2009-02-17",
                                    "seasonId": 1
                                },
                                {
                                    "id": 3,
                                    "name": "TwaughtHammer",
                                    "episodeNumber": 3,
                                    "overview": "Jesse and Badger make a behind the scenes video about their band \"TwaughtHammer\"",
                                    "seasonNumber": 1,
                                    "stillPath": "/gUHAqFw3Ptzya96JFFE9xVfMjze.jpg",
                                    "rating": 9,
                                    "releaseDate": "2009-02-17",
                                    "seasonId": 1
                                },
                                {
                                    "id": 4,
                                    "name": "Marie's Confession",
                                    "episodeNumber": 4,
                                    "overview": "Marie records a video diary.",
                                    "seasonNumber": 1,
                                    "stillPath": "/saG9GPwRhL21EaHG2d63suGM37W.jpg",
                                    "rating": 9,
                                    "releaseDate": "2009-02-17",
                                    "seasonId": 1
                                },
                                {
                                    "id": 5,
                                    "name": "The Break-In",
                                    "episodeNumber": 5,
                                    "overview": "Walt and Badger attempt to retrieve a vacuum cleaner stuffed with drug money from an elderly woman's locked garage.",
                                    "seasonNumber": 1,
                                    "stillPath": "/o8DqThzXelwxV3LLTpHCNHTsTNt.jpg",
                                    "rating": 9,
                                    "releaseDate": "2009-02-17",
                                    "seasonId": 1
                                },
                                {
                                    "id": 6,
                                    "name": "Jesse Pinkman Evidence Tape",
                                    "episodeNumber": 6,
                                    "overview": "Jesse goes on record and describes on camera everything he remembers about Walt's business dealings and criminal activity.",
                                    "seasonNumber": 1,
                                    "stillPath": "/o8DqThzXelwxV3LLTpHCNHTsTNt.jpg",
                                    "rating": 9,
                                    "releaseDate": "2009-02-17",
                                    "seasonId": 1
                                },
                                {
                                    "id": 7,
                                    "name": "Walt's Confession",
                                    "episodeNumber": 7,
                                    "overview": "The video confession recorded by Walt.",
                                    "seasonNumber": 1,
                                    "stillPath": "/o8DqThzXelwxV3LLTpHCNHTsTNt.jpg",
                                    "rating": 10,
                                    "releaseDate": "2009-02-17",
                                    "seasonId": 1
                                }
                            ]
                        },
                        {
                            "id": 3,
                            "seasonNumber": 2,
                            "rating": 9.1,
                            "releaseDate": "2009-03-08",
                            "overview": "In the second season, Walt must deal with the chain reaction of his choice, as he and Jesse face new and severe consequences. When danger and suspicion around Walt escalate, he is pushed to new levels of desperation. Just how much higher will the stakes rise? How far is Walt willing to go to ensure his family's security? Will his grand plan spiral out of control?",
                            "posterPath": "/e3oGYpoTUhOFK0BJfloru5ZmGV.jpg",
                            "showId": 5,
                            "episodes": [
                                {
                                    "id": 1,
                                    "name": "Pilot",
                                    "episodeNumber": 1,
                                    "overview": "When an unassuming high school chemistry teacher discovers he has a rare form of lung cancer, he decides to team up with a former student and create a top of the line crystal meth in a used RV, to provide for his family once he is gone.",
                                    "seasonNumber": 2,
                                    "stillPath": "/ydlY3iPfeOAvu8gVqrxPoMvzNCn.jpg",
                                    "rating": 9,
                                    "releaseDate": "2008-01-20",
                                    "seasonId": 3
                                },
                                {
                                    "id": 2,
                                    "name": "Cat's in the Bag...",
                                    "episodeNumber": 2,
                                    "overview": "Walt and Jesse attempt to tie up loose ends. The desperate situation gets more complicated with the flip of a coin. Walt's wife, Skyler, becomes suspicious of Walt's strange behavior.",
                                    "seasonNumber": 2,
                                    "stillPath": "/tjDNvbokPLtEnpFyFPyXMOd6Zr1.jpg",
                                    "rating": 9,
                                    "releaseDate": "2008-01-20",
                                    "seasonId": 3
                                },
                                {
                                    "id": 3,
                                    "name": "...And the Bag's in the River",
                                    "episodeNumber": 3,
                                    "overview": "Walter fights with Jesse over his drug use, causing him to leave Walter alone with their captive, Krazy-8. Meanwhile, Hank has a scared straight moment with Walter Jr. after his aunt discovers he has been smoking pot. Also, Skylar is upset when Walter",
                                    "seasonNumber": 2,
                                    "stillPath": "/2kBeBlxGqBOdWlKwzAxiwkfU5on.jpg",
                                    "rating": 9,
                                    "releaseDate": "2008-01-20",
                                    "seasonId": 3
                                },
                                {
                                    "id": 4,
                                    "name": "Cancer Man",
                                    "episodeNumber": 4,
                                    "overview": "Walter finally tells his family that he has been stricken with cancer. Meanwhile, the DEA believes Albuquerque has a new, big time player to worry about. Meanwhile, of a depressed Walter's anger, and Jesse makes a surprise visit to his parents home.",
                                    "seasonNumber": 2,
                                    "stillPath": "/i5BAJVhuIWfkoSqDID6FnQNCTVc.jpg",
                                    "rating": 9,
                                    "releaseDate": "2008-01-20",
                                    "seasonId": 3
                                },
                                {
                                    "id": 5,
                                    "name": "Gray Matter",
                                    "episodeNumber": 5,
                                    "overview": "Walter and Skyler attend a former colleague's party. Jesse tries to free himself from the drugs, while Skyler organizes an intervention.",
                                    "seasonNumber": 2,
                                    "stillPath": "/82G3wZgEvZLKcte6yoZJahUWBtx.jpg",
                                    "rating": 9,
                                    "releaseDate": "2008-01-20",
                                    "seasonId": 3
                                },
                                {
                                    "id": 6,
                                    "name": "Crazy Handful of Nothin'",
                                    "episodeNumber": 6,
                                    "overview": "Walter and Skyler attend a former colleague's party. Jesse tries to free himself from the drugs, while Skyler organizes an intervention.",
                                    "seasonNumber": 2,
                                    "stillPath": "/hyYwqbmcHn3fuxWE3h4IhZZbkU3.jpg",
                                    "rating": 9,
                                    "releaseDate": "2008-01-20",
                                    "seasonId": 3
                                },
                                {
                                    "id": 7,
                                    "name": "A No-Rough-Stuff-Type Deal",
                                    "episodeNumber": 7,
                                    "overview": "Walter accepts his new identity as a drug dealer after a PTA meeting. Elsewhere, Jesse decides to put his aunt's house on the market and Skyler is the recipient of a baby shower.",
                                    "seasonNumber": 2,
                                    "stillPath": "/1dgFAsajUpUT7DLXgAxHb9GyXHH.jpg",
                                    "rating": 9,
                                    "releaseDate": "2008-01-20",
                                    "seasonId": 3
                                }
                            ]
                        }
                    ],
                    "genres": [
                        {
                            "name": "Crime",
                            "GenreShows": {
                                "showId": 5,
                                "genreId": 2
                            }
                        },
                        {
                            "name": "Drama",
                            "GenreShows": {
                                "showId": 5,
                                "genreId": 3
                            }
                        }
                    ],
                    "actors": [
                        {
                            "name": "Bryan Cranston",
                            "ActorShows": {
                                "showId": 5,
                                "actorId": 1
                            }
                        },
                        {
                            "name": "Anna Gunn",
                            "ActorShows": {
                                "showId": 5,
                                "actorId": 2
                            }
                        },
                        {
                            "name": "Aaron Paul",
                            "ActorShows": {
                                "showId": 5,
                                "actorId": 3
                            }
                        },
                        {
                            "name": "Dean Norris",
                            "ActorShows": {
                                "showId": 5,
                                "actorId": 4
                            }
                        },
                        {
                            "name": "Bob Odenkirk",
                            "ActorShows": {
                                "showId": 5,
                                "actorId": 5
                            }
                        }
                    ],
                    "directors": [
                        {
                            "name": "Vince Gilligan",
                            "DirectorShows": {
                                "showId": 5,
                                "directorId": 1
                            }
                        },
                        {
                            "name": "Adam Bernstein",
                            "DirectorShows": {
                                "showId": 5,
                                "directorId": 2
                            }
                        },
                        {
                            "name": "Bryan Cranston",
                            "DirectorShows": {
                                "showId": 5,
                                "directorId": 3
                            }
                        }
                    ]
                }
                        
        }

    }

    handleSeasonSwitch(){
        console.log("clicked");
        
        this.setState({
            SeasonStatus : true ? false : true 
        }
        )
    }
    render() {
        console.log(this.state.SeasonStatus);
        
        let EpsiodeList ; 
        if(this.state.SeasonStatus){
            EpsiodeList = <div>
                <div className="row">
                    <div className="col-sm-7">
                    <div className="dropdown">
                <select onChange={()=>this.handleSeasonSwitch()}>
                    {this.state.data.seasons && this.state.data.seasons.map((val,index)=>{
                        // console.log(val.seasonNumber);
                        
                        return(
                        <option key={index}>Season {val.seasonNumber}</option>
                        )
                    })}
                    
                </select>
                </div>
                    <div className="title">
                    <h2>{this.state.data.name}</h2>
                    </div>
                <div className="PosterContainer">
                    <div className="contents">
                    <div className="row" id="MovieButtons">
                    <button className="button play col-sm-1 btn btn-primary"><i class="fa fa-play"></i></button>
                    <button className="span col-sm-1" id="watchlist">
                    <span><b>Add to Watchlist</b></span>
                    </button>
                    <button className="span col-sm-1" id="trailer">
                    <span><b>Watch Trailer</b></span>
                    </button>
                    </div>
                    <h4 className="overview">{this.state.data.seasons[0].overview}</h4>
                    <div className="crew">
                    <h5>Director : {this.state.data.directors[0].name}</h5>
                    <h5>Starring : {this.state.data.actors[0].name}</h5>
                    <h5>Audio Language : {this.state.data.language} </h5>
                    <h5>Starring : {this.state.data.actors && this.state.data.actors.map((val,index)=>{
                        // console.log(val)
                        return(
                        <span>{val.name},</span>
                        )
                        
                    })}</h5>
                    <h5>Genres : {this.state.data.genres && this.state.data.genres.map((val,index)=>{
                        // console.log(val)
                        return(
                        <span>{val.name},</span>
                        )
                        
                    })}</h5>
                    <h5>IMDB Rating : {this.state.data.seasons[0].rating}</h5>
                    
                    </div>
                    

                    </div>
                    

                </div> 
                    </div>
                    <div className="col-sm-4">
                    <img src={`https://image.tmdb.org/t/p/original${this.state.data.seasons[0].posterPath}`}   alt="Alps" style={{
                        width: '29rem',
                        'margin-top': '5rem'
                        }}></img>
                    </div>

                </div>
                
            <div className="row">
                <div className="col-sm-11 EPSIODES">
                 {this.state.data.seasons[0].episodes && this.state.data.seasons[0].episodes.map((val,index)=>{
                        console.log(val)
                        return(
                        <div className="episodes">
                            <div className="row">
                                <div className="col-sm-3">
                                <img src={`https://image.tmdb.org/t/p/original${val.stillPath}`}></img>
                                </div>
                            <div className="col-sm-6">
                            <button className="episode button play col-sm-1 btn btn-primary"><i class="fa fa-play"></i></button>
                                <span className="episodeName">
                                <b>{val.id} : {val.name}</b>
                                </span>
                                <div className="epsidoeOverview">
                                    <b> {val.overview} </b>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            <div className="extraDetails">
                            <div>Rating :    {val.rating}</div>
                            <div>ReleaseDate:   {val.releaseDate}</div>
                            </div>
                            </div>
                            </div>
                            </div>
                        )
                        
                    })}
                </div>

            </div>
            </div> 
        }else{
            EpsiodeList = <div>
                <div className="row">
                    <div className="col-sm-7">
                    <div className="dropdown">
                <select onChange={()=>this.handleSeasonSwitch()}>
                    {this.state.data.seasons && this.state.data.seasons.map((val,index)=>{
                        // console.log(val.seasonNumber);
                        
                        return(
                        <option key={index}>Season {val.seasonNumber}</option>
                        )
                    })}
                    
                </select>
                </div>
                    <div className="title">
                    <h2>{this.state.data.name}</h2>
                    </div>
                <div className="PosterContainer">
                    <div className="contents">
                    <div className="row" id="MovieButtons">
                    <button className="button play col-sm-1 btn btn-primary"><i class="fa fa-play"></i></button>
                    <button className="span col-sm-1" id="watchlist">
                    <span><b>Add to Watchlist</b></span>
                    </button>
                    <button className="span col-sm-1" id="trailer">
                    <span><b>Watch Trailer</b></span>
                    </button>
                    </div>
                    <h4 className="overview">{this.state.data.seasons[1].overview}</h4>
                    <div className="crew">
                    <h5>Director : {this.state.data.directors[0].name}</h5>
                    <h5>Starring : {this.state.data.actors[0].name}</h5>
                    <h5>Audio Language : {this.state.data.language} </h5>
                    <h5>Starring : {this.state.data.actors && this.state.data.actors.map((val,index)=>{
                        // console.log(val)
                        return(
                        <span>{val.name},</span>
                        )
                        
                    })}</h5>
                    <h5>Genres : {this.state.data.genres && this.state.data.genres.map((val,index)=>{
                        // console.log(val)
                        return(
                        <span>{val.name},</span>
                        )
                        
                    })}</h5>
                    <h5>IMDB Rating : {this.state.data.seasons[1].rating}</h5>
                    
                    </div>
                    

                    </div>
                    

                </div> 
                    </div>
                    <div className="col-sm-4">
                    <img src={`https://image.tmdb.org/t/p/original${this.state.data.seasons[1].posterPath}`}   alt="Alps" style={{
                        width: '29rem',
                        'margin-top': '5rem'
                        }}></img>
                    </div>

                </div>
                
            <div className="row">
                <div className="col-sm-11 EPSIODES">
                 {this.state.data.seasons[1].episodes && this.state.data.seasons[1].episodes.map((val,index)=>{
                        console.log(val)
                        return(
                        <div className="episodes">
                            <div className="row">
                                <div className="col-sm-3">
                                <img src={`https://image.tmdb.org/t/p/original${val.stillPath}`}></img>
                                </div>
                            <div className="col-sm-6">
                            <button className="episode button play col-sm-1 btn btn-primary"><i class="fa fa-play"></i></button>
                                <span className="episodeName">
                                <b>{val.id} : {val.name}</b>
                                </span>
                                <div className="epsidoeOverview">
                                    <b> {val.overview} </b>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            <div className="extraDetails">
                            <div>Rating :    {val.rating}</div>
                            <div>ReleaseDate:   {val.releaseDate}</div>
                            </div>
                            </div>
                            </div>
                            </div>
                        )
                        
                    })}
                </div>

            </div>
            </div>
        }
        return (
            <div className="bgBody">
                {EpsiodeList}
            </div>
        )
    }
}
