import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({ item }) {
  return (
    <Card> {/* classNames bring in styling from the stylesheet */}
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>  
  )
}

FeedbackItem.propTypes = {  //careful about the difference between PropTypes and propTypes
    item: PropTypes.object.isRequired,
    
}

export default FeedbackItem
