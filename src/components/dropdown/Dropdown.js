import { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import styles from './Dropdown.module.scss'
import Container from '../common/Container'
import searchIcon from '../../asset/search_icon.png'

function Dropdown() {
  const items = [
    { number: 0, item: '선택해주세요' },
    { number: 1, item: '김철수' },
    { number: 2, item: '김영희' },
    { number: 3, item: '박재민' },
    { number: 4, item: '이나영' },
    { number: 5, item: '홍길동' },
    { number: 6, item: '강호동' },
  ]

  const [item, setItem] = useState(items[0].item)
  const [dropDownItems, setDropDownItems] = useState(items)
  const [open, setOpen] = useState(false)
  const [searchText, setSearchText] = useState('')

  const handleClickItem = (key) => {
    setItem(items[key].item)
    setOpen(false)
    setSearchText('')
  }

  const onChangeText = (e) => {
    setSearchText(e.target.value)
  }

  const viewItems = useCallback(() => {
    if (searchText === '') {
      setDropDownItems(items)
    } else {
      setDropDownItems([])

      const dummyItems = items

      dummyItems.forEach((data) => {
        if (data.item.match(searchText)) {
          setDropDownItems((prevItem) => [...prevItem, data])
        }
      })
    }
  }, [searchText])

  useEffect(() => {
    viewItems()
  }, [viewItems])

  const dropdownItemList = dropDownItems.map((v) => {
    return (
      <div className={styles.dropdownItem} key={v.number} onClick={() => handleClickItem(v.number)} role='presentation'>
        {v.item}
      </div>
    )
  })

  return (
    <Container title='DROPDOWN'>
      <>
        <div className={styles.dropdownContainer}>
          <DropdownBtn item={item} open={open} setOpen={setOpen} setSearchText={setSearchText} />
          {open && <DropdownItems searchText={searchText} onChangeText={onChangeText} list={dropdownItemList} />}
        </div>
        <div className={styles.blankContainer}>빈공간</div>
      </>
    </Container>
  )
}

function DropdownBtn({ item, open, setOpen, setSearchText }) {
  const handleDropdown = () => {
    setOpen(!open)
    setSearchText('')
  }

  return (
    <div className={styles.dropdownBtn} onClick={handleDropdown} role='presentation'>
      <div className={styles.dropdownText}>{item}</div>
      <div className={styles.dropdownArrow}>▼</div>
    </div>
  )
}

DropdownBtn.propTypes = {
  item: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setSearchText: PropTypes.func,
}

function DropdownItems({ searchText, onChangeText, list }) {
  return (
    <div className={styles.dropdownItemsContainer}>
      <div className={styles.dropdownSearch}>
        <img src={searchIcon} className={styles.dropdownSearchIcon} alt='search_icon' />
        <input placeholder='Search' className={styles.dropdownSearchInput} value={searchText} onChange={onChangeText} />
      </div>
      {list}
    </div>
  )
}

DropdownItems.propTypes = {
  searchText: PropTypes.string,
  onChangeText: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.element),
}

export default Dropdown
