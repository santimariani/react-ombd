const MovieDisplay = ({selectedMovie}) => {
    const info = selectedMovie;

    return (
        <>
            <img src={info.Poster} />
            <p>Title: <br></br>{info.Title}</p>
            <p>Year Released: <br></br>{info.Year}</p>
            <p>Plot: <br></br>{info.Plot}</p>
            <p>Ratings: <br />
                {info.Ratings ? (
                    info.Ratings.map((rating, index) => (
                        <span key={index}>{rating.Source}: {rating.Value}<br /></span>
                    ))
                ) : (
                    ''
                )}
            </p>
        </>
    )
};

export default MovieDisplay;