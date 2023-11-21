
const Header = ({ search, setSearch }) => {
  return (
    <>
      <div className="header-container">
        <h1 className="heading">
          TECH NEWS
        </h1>
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Here..."
        />
      </div>

    </>
  )
}

export default Header