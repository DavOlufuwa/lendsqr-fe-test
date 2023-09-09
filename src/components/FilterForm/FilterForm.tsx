import Button from '../Button/Button'
import './filterform.styles.scss'




const FilterForm = () => {
  return (
    <div className='form-container'>
      <form>
        <div className='form-control-group'>
          <div>
            <label htmlFor='organization' className='label'>Organization</label>
          </div>
          <div>
            <select className='form-select' id='organization'>
              <option value=''>Select</option>
            </select>
          </div>
        </div>
        <div className='form-control-group'>
          <div>
            <label htmlFor='username' className='label'>Username</label>
          </div>
          <div>
            <input type='text' className='form-input' placeholder='User' id='user'/>
          </div>        
        </div>
        <div className='form-control-group'>
          <div>
            <label htmlFor='email' className='label'>Email</label>
          </div>
          <div>
            <input type='text' className='form-input' placeholder='Email' id='email'/>
          </div>        
        </div>
        <div className='form-control-group'>
          <div>
            <label htmlFor='date' className='label'>Date</label>
          </div>
          <div>
            <input type='date' className='form-input' id='date' placeholder='Date'/>
          </div>
        </div>
        <div className='form-control-group'>
          <div>
            <label htmlFor='phone' className='label'>Phone Number</label>
          </div>
          <div>
            <input type='tel' className='form-input' id='phone' placeholder='Phone Number'/>
          </div>
        </div>
        <div className='form-control-group'>
          <div>
            <label htmlFor='' className='label'>Status</label>
          </div>
          <div>
            <select className='form-select'>
              <option value=''>All</option>
            </select>
          </div>
        </div>
        <div>
          <Button buttonType="reset">Reset</Button>
          <Button buttonType='filter'>Filter</Button>
        </div>      
      </form>
    </div>
  )
}

export default FilterForm
