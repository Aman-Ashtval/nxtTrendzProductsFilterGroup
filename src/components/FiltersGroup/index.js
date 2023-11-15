import {IoMdSearch} from 'react-icons/io'
import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    searchForItem,
    selectCategory,
    ratingUp,
    clearSearches,
  } = props

  const clearAllSearch = () => {
    clearSearches()
  }

  const onSearchItem = event => {
    if (event.key === 'Enter') {
      searchForItem(event.target.value)
    }
  }

  const onSelectCategory = event => {
    const id = categoryOptions.filter(
      each => each.name === event.target.textContent,
    )[0].categoryId
    selectCategory(id)
  }

  const onSelectRating = event => {
    ratingUp(event.target.value)
  }

  const getRatingsContainer = item => {
    const {ratingId, imageUrl} = item
    return (
      <div className="rating-up-container" key={ratingId}>
        <img src={imageUrl} alt={`rating ${ratingId}`} className="str-img" />
        <button
          type="button"
          className="up-btn"
          value={ratingId}
          onClick={onSelectRating}
        >
          & up
        </button>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="searchInput">
        <input
          type="search"
          className="filter-input"
          onKeyDown={onSearchItem}
        />
        <div className="search-icon-container">
          <IoMdSearch />
        </div>
      </div>
      <div className="type-section">
        <h1 className="category-h1">Category</h1>

        {categoryOptions.map(each => (
          <p
            className="type-btn"
            key={each.categoryId}
            id={each.categoryId}
            onClick={onSelectCategory}
          >
            {each.name}
          </p>
        ))}

        <h1 className="category-h1">Rating</h1>
        {ratingsList.map(each => getRatingsContainer(each))}
      </div>
      <button
        type="button"
        className="clear-filter-btn"
        onClick={clearAllSearch}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
