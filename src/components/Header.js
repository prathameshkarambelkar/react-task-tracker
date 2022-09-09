
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1 style={{color: 'black'}}>{title}</h1>
            <Button text={showAdd ? 'close' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={onAdd} />

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS in JS
// const headingStyle = {
//     color: 'red', backgroundColor: 'Black',
// }

export default Header