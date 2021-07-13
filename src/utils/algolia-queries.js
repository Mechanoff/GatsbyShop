
const indexName = `Products`

const productQuery = `{
  products: allFile(filter: {absolutePath: {regex: "/products/"}}) {
    nodes {
      childrenRecordsJson {
        id
        brand
        categories
        description
        image
        name
        popularity
        price
        rating
      }
    }
  }
}
`

function productToAlgoliaRecord({ childrenRecordsJson: {id, ...rest } }) {
  return {
    objectID : id,
    ...rest
  }
}

const queries = [
  {
    query: productQuery,
    transformer: ({ data }) => data.products.nodes.map(productToAlgoliaRecord),
    indexName,
  },
]

module.exports = queries