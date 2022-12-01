function FeedbackItem({ item }) {
  return (
    <div className='card'> {/* classNames bring in styling from the stylesheet */}
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  )
}

export default FeedbackItem
