import { useReducer } from 'react';
import './App.css';
function App() {
  const [arith, dispatch] = useReducer(reducer, [[10, 'Inc', "increament"], [20, 'Dec', 'decreament'], [30, 'Mul', 'multiplication']]);
  function reducer(state, action) {
    switch (action.type) {
      case 'Inc':
        state[0][0] += 10;

        break;
      case "Dec":
        state[1][0] -= 10;
        break;
      case "Mul":
        state[2][0] *= 10;
        break;
      default:
        break;
    }
    console.log('state', state);

    return [...state];
  }
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>

        {
          arith.map(ele => {
            console.log(ele);

            return (
              <div key={ele[1]}>
                <p>{ele[0]}</p>
                <button onClick={() => dispatch({ type: ele[1] })}>{ele[2]}</button >
              </div>

            )
          })
        }
      </div>
    </>
  )
}

export default App
