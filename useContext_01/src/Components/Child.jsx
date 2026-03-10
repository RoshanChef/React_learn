import { useContext } from 'react'
import UserContext from '../Context/userContext';

function Child() {
    const { data, setData } = useContext(UserContext);

    function hand(e) {
        setData({ message: e.target.value })    
    }
    
    function handler(e) {
        e.preventDefault();
        console.log(data);
    }
    return (
        <div>
            <h2>{data.message}</h2>
            <form>
                <input type="text" onChange={hand}  />
                <button onClick={handler}>submit</button>
            </form>
          
          
        </div>
    )
}

export default Child
