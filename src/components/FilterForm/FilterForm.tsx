import Button from '../Button/Button'
import './filterform.styles.scss'
import SelectArrow from '/assets/icons/select-down.svg'




const FilterForm = () => {
  return (
    <div className='form-container'>
      <form>
        <div className='form-control-group'>    
          <label htmlFor='organization' className='label'>Organization</label>
            <div className='select-container'>
              <img src={SelectArrow} alt='select'/>
              <select className='form-select' id='organization'>
                <option value=''>Select</option>
              </select>
            </div>
        </div>
        <div className='form-control-group'>
          <label htmlFor='username' className='label'>Username</label> 
          <input type='text' className='form-input' placeholder='User' id='user'/>
        </div>
        <div className='form-control-group'>         
          <label htmlFor='email' className='label'>Email</label>   
          <input type='text' className='form-input' placeholder='Email' id='email'/>            
        </div>
        <div className='form-control-group'>
          <label htmlFor='date' className='label'>Date</label>
          <input type='date' className='form-input' id='date' placeholder='Date' />
        </div>
        <div className='form-control-group'>       
          <label htmlFor='phone' className='label'>Phone Number</label>
          <input type='tel' className='form-input' id='phone' placeholder='Phone Number'/>
        </div>
        <div className='form-control-group'>       
          <label htmlFor='' className='label'>Status</label>
          <div className='select-container'>
              <img src={SelectArrow} alt='select'/>
              <select className='form-select' id='organization'>
                <option value=''>Select</option>
              </select>
            </div>
        </div>
        <div className='buttons'>
          <Button buttonType="reset">Reset</Button>
          <Button buttonType='filter'>Filter</Button>
        </div>      
      </form>
    </div>
  )
}

export default FilterForm
