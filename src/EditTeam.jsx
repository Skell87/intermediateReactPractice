import { Link } from "react-router-dom"
import React, {createContext, useReducer, useState} from "react"

const initialState = {
    team:[
        // {
        //     name: "",
        //     health: 0,
        //     attack: 0, 
        //     speed: 0
        // },
        
    ]
}

const charReducer = (state, action) => {
    console.log("charReducer:", action  )
    switch(action.type) {
        case "addChar":
            console.log("addChar:", action)
            return {
                ...state, 
                team: [...state.team,
                {
                    name: action.name
                    
                } ]
            }
        case "healthCounterAdd":
            console.log("healthCounterAdd", action)
            return {
                ...state,
                team: [...state.team,
                {
                    health: action.health + 1
                }]
            }
        case "healthCounterMinus":
            console.log("healthCounterMinus", action)
            return {
                ...state,
                team: [...state.team,
                {
                    health: action.health - 1
                }]
                }
    }
}


function EditTeam() {
    const [state, dispatch] = useReducer(charReducer, initialState)

    const [nameText, setNameText] = useState("")
    const [pointsCount, setPointsCount] = useState(10)
    const [healthCount, setHealthCount] = useState(0)
    const [attackCount, setAttackCount] = useState(0)
    const [speedCount, setSpeedCount] = useState(0)

console.log("state", state)
    return (
    <div className="p-5">
        <Link to='/'>{'<- Back'}</Link>
        <h1>Edit Team</h1>
        <div>
            <div>Character Name: 
                <input type="text" value={nameText} onChange={event => setNameText(event.target.value)}>
                </input>
                <button onClick= {()=> dispatch ({ name: nameText , type: 'addChar'})}>add character</button>
            </div>
            <br></br>
            <div>available points:
                
            </div>
            <br></br>
            <div>Health: {state.health}
                <button onClick= {()=> dispatch ({health: healthCount, type: 'healthCounterAdd'})}>+</button>
                <button onClick= {()=> dispatch ({health: healthCount, type: 'healthCounterMinus'})}>-</button>
            </div>
            <br></br>
            <div>Attack:
                <button>+</button>
                <button>-</button>
            </div>
            <br></br>
            <div>Speed:
                <button>+</button>
                <button>-</button>
            </div>
            
        </div>
        <div>character is: {
                state.team.map((teamMember, index) => (
                    <div key={index}>
                        {teamMember.name}
                    </div>
                ))
            }

        </div>
    </div>
    
    )
}

export default EditTeam
