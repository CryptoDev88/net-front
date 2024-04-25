import { useTheme } from '@mui/system'

function Achievements () {
  const theme = useTheme()

  return (
    <div
      className={
        theme.palette.mode === 'light'
          ? 'achievements_container__PvIf8 false'
          : 'achievements_container__PvIf8 undefined'
      }
    >
      <div className='achievements_section__Kl_43'>
        <div className='achievements_years__OpGW_'>
          <div className='achievements_all___HaeG'>
            <h1>2+</h1>
            <div className='achievements_industry__InDkq'>
              <span></span>
              <p>Years in industry</p>
            </div>
          </div>
          <div className='achievements_divider__h8PP_ undefined'></div>
        </div>
        <div className='achievements_years__OpGW_'>
          <div className='achievements_all___HaeG'>
            <h1>100+</h1>
            <div className='achievements_industry__InDkq'>
              <span>Projects</span>
              <p>successfully done</p>
            </div>
          </div>
          <div className='achievements_divider__h8PP_ achievements_Projects__HO1Tq'></div>
        </div>
        <div className='achievements_years__OpGW_'>
          <div className='achievements_all___HaeG'>
            <h1>70+</h1>
            <div className='achievements_industry__InDkq'>
              <span>Employees</span>
              <p> </p>
            </div>
          </div>
          <div className='achievements_divider__h8PP_ undefined'></div>
        </div>
        <div className='achievements_years__OpGW_'>
          <div className='achievements_all___HaeG'>
            <h1>40+</h1>
            <div className='achievements_industry__InDkq'>
              <span>Ongoing Partners</span>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
