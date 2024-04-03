
import {useSelector} from 'react-redux'

export default function List() {
const {list} = useSelector ((state)=>state.todo)

  return (
    <ol>
        {
            list.map((item, i)=>(
                <li key={i}>{item}</li>
            ))
        }
    </ol>
  )
}
