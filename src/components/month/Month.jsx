export const Month = ({year, month, color}) => {
    const {
    monthNames, 
    monthNamesShort,
    dayNames,
    dayNamesShort,
    dayNamesMin  
    } = {monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Пн','Вт','Ср','Чт','Пт','Сб', 'Вс']}
    const current = new Date(year, month)
    const next = new Date(year, month + 1)
    const diff = (next - current) / (1000 * 3600 * 24)
    const index = (current.getDay() + 6 ) % 7
    const ROWS = Math.ceil((index + diff) /7) + 1
    const COLS = 7

    const getDay = (wek, day) => {
        const k = 7 * wek + ((day + 1) - index)
        return k > 0 && k <= diff ? k : ''
    }
    
    return (
        <div className={'gaps'} >
            <table border="1">
                <caption>
                    {`${monthNames[month]} ${year}`}
                </caption>
                {
                    new Array(ROWS).fill(null).map((_, wek) => 
                        (
                        <tr>
                        {
                            new Array(COLS).fill(null).map((_, day) => wek ? 
                            (<td className={getDay(wek - 1, day) && 'date_day'} style={{border: `1px solid rgb(${color()})`}}>{ getDay(wek - 1, day) }</td>) : 
                            (<th>{dayNamesMin[day]}</th>))
                        }
                        </tr>
                        )
                )
                }
            </table>
        </div>
    )
}