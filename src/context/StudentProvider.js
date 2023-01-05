import { createContext, useContext, useReducer, useEffect } from "react";


const studentContext = createContext();

const studentReducer = (state, action) => {
    switch(action.type) {
        case 'CHECKIN': return [...state, action.payload];
        case 'CHECKOUT': return state.map(item => {
            if(item.id === action.id) {
                item.checkOutDateTime = action.payload;
                return item;
            }
            return item;
        });
        case 'REMOVE': return state.filter(item => item.id !== action.id);
        default: return state;
    }
}


const StudentProvider = ({ children }) => {

    const [studentData, setStudentData] = useReducer(studentReducer, [], (initial) => {
        const savedData = localStorage.getItem('StudentData');
        return savedData ? JSON.parse(savedData) : initial;
    });

    useEffect(() => {

        localStorage.setItem('StudentData', JSON.stringify(studentData));
      
    }, [studentData])
    


    return <studentContext.Provider value={{studentData, setStudentData}}>
        {children}
    </studentContext.Provider>
}


export const useStudent = () => {
    return useContext(studentContext);
}

export default StudentProvider;
