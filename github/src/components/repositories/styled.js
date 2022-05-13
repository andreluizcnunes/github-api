import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  margin: 0 auto;
  font-size: 1rem;
  width: 60%;
  color: #c9d1d9;
`
export const WrapperTabList = styled(TabList)`
  padding: 0.5rem;

  display: flex;
  gap: 1rem;
`
WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border-radius: 1rem;
  border: 0.1rem #c9d1d9 solid;
  padding: 1rem 2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  z-index: 999;

  &:hover {
    background-color: #c9d1d9;
    color: #161b22;
  }
  */ &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0.5rem solid #c9d1d9;
  }
`

// WrapperTabList.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  padding: 1rem;
  border: 0.2rem solid #ccc;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
  display: none;
  margin-top: -0.5rem;

  &.is-selected {
    display: block;
  }
`
// WrapperTabList.tabsRole = 'TabPanel'
