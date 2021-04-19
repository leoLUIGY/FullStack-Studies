import Hero from './Hero';

const SearchView = ({keyword, searchResults}) =>{
    const title = `Ỳou are searching for ${keyword}`;

    const resultsHtml = searchResults.map((obj, i) =>{
        return <div key={i}>{obj.original_title}</div>
    })
    return(
        <>
            <Hero text={title} />
            {resultsHtml}
        </>
    )
}

export default SearchView;