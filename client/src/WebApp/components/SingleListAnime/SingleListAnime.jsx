function SingleListAnime({listName, listCoverImage,animeInList, activeListId, setActiveListId, id}) {
  return ( 
    <div
    onClick={()=>{
      setActiveListId(id)
    }}
    tabIndex={0} 
    className={activeListId == id? "single-list active" : "single-list"}>
              <img src={`https://image.tmdb.org/t/p/w1280/${listCoverImage}`} alt="list background image" className="bg" />

            <div className="list-inner">
              <div className="list-name-number">
                <h2 className="sub-sub-heading">{listName}</h2>
                <p className="sub-body-style">{animeInList.length} Movie
                {animeInList.length > 1?
                 "s" : 
                 ""}</p>
              </div>
            </div>
    </div>
  )
}

export default SingleListAnime