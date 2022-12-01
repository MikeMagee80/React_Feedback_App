import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) { //catches props from App.js @5:00 Lecture 12
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  } 

  return (
    <header style={ headerStyles }> {/* CSS in JS uses camelCase, instead of hyphens */}
      <div className="container">
        <h2>{text}</h2> {/* {} because it's outputting something dynamic */}
      </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    Color: PropTypes.string, 
}

export default Header

