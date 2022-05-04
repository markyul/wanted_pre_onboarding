import { useCallback, useEffect, useState } from 'react'

import './Dropdown.css'
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
      <div
        className='dropdown-item'
        key={v.number}
        onClick={() => handleClickItem(v.number)}
        // 일단 해놓음
        role='presentation'
      >
        {v.item}
      </div>
    )
  })

  return (
    <Container title='DROPDOWN'>
      <div className='dropdown-container'>
        <DropdownBtn item={item} open={open} setOpen={setOpen} setSearchText={setSearchText} />
        {open && <DropdownItems searchText={searchText} onChangeText={onChangeText} list={dropdownItemList} />}
      </div>
      <div className='blank-container'>빈공간</div>
    </Container>
  )
}

function DropdownBtn({ item, open, setOpen, setSearchText }) {
  const handleDropdown = () => {
    setOpen(!open)
    setSearchText('')
  }

  return (
    <div
      className='dropdown-btn'
      onClick={handleDropdown}
      // 일단 해놓음
      role='presentation'
    >
      <div className='dropdown-text'>{item}</div>
      <div className='dropdown-arrow'>▼</div>
    </div>
  )
}

function DropdownItems({ searchText, onChangeText, list }) {
  return (
    <div className='dropdown-items-container'>
      <div className='dropdown-search'>
        <img src={searchIcon} className='dropdown-search-icon' alt='search_icon' />
        <input placeholder='Search' className='dropdown-search-input' value={searchText} onChange={onChangeText} />
      </div>
      {list}
    </div>
  )
}

export default Dropdown
