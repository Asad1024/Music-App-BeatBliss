import SingerCard from "../cards/SingerCard"

const TopSingers = () => {
  return (
    <div className="singersContainer" id="topSingers">
      <h1 className="shadow">Most Popular Singers</h1>
        <SingerCard/>
    </div>
  )
}

export default TopSingers