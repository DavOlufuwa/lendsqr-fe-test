import FilterForm from '../FilterForm/FilterForm'
import Filter from '/assets/icons/filter.svg'
import { useState } from 'react'

const FilterComponent = () => {

  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className='filter'>      
      <img src={Filter} alt='filter button'/>
      <div style={{display: 'none'}}>
        <FilterForm />
      </div>
    </div>
  )
}

export default FilterComponent