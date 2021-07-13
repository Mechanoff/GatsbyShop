import { Link } from "@reach/router"
import {default as React } from "react"
import {
    connectStateResults,
    Hits,
    Index,
    PoweredBy,
} from "react-instantsearch-dom"

const HitCount = connectStateResults(({ searchResults}) => {
    const hitCount = searchResults && searchResults.nbHits

    return hitCount > 0 ? (
        <div className="HitCount">
            {hitCount}
        </div>
    ) : null
})

const ProductHit = ({ hit }) => (
    <div>
        <Link to={hit.name}>
          <img src={hit.image} alt={hit.name} />
            <h4>{hit.name}</h4>
            <h5>{hit.description}</h5>
        </Link>
    </div>
)

const HitsInIndex = ({ index }) => (
    <Index indexName={index.name}>
      <HitCount />
      <Hits className="Hits" hitComponent={ProductHit} />
    </Index>
  )

  const SearchResult = ({ indices, className }) => (
    <div className={className}>
      {indices.map(index => (
        <HitsInIndex index={index} key={index.name} />
      ))}
      <PoweredBy />
    </div>
  )
  export default SearchResult