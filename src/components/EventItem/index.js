import './index.css'

const EventItem = props => {
  const {eventsListDetails, onClickImg} = props
  const {imageUrl, name, location, id} = eventsListDetails

  const onClickImgItem = () => {
    onClickImg(id)
  }

  return (
    <li className="event-item-container">
      <button type="button" onClick={onClickImgItem} className="btn">
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
