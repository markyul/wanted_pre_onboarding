import PropTypes from 'prop-types'

import styles from './Container.module.scss'

function Container({ children, title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
}

export default Container
