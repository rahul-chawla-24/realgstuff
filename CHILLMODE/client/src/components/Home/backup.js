{/* <div className="row">
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
                    <h4 className="overview">{this.state.data.overview}</h4>
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
                    <h5>IMDB Rating : {this.state.data.rating}</h5>
                    
                    </div>
                    

                    </div>
                    

                </div> 
                    </div>
                    <div className="col-sm-4">
                    <img src={`https://image.tmdb.org/t/p/original${this.state.data.posterPath}`}   alt="Alps" style={{
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
 */}
