import { initialState } from "../store/initialState";

export const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case "MOSTRAR_JUGADORES":
            return { ...state, listaJugadores: action.payload };
        case "AGREGAR_JUGADOR":
            return { ...state, listaJugadores: [...state.listaJugadores, { nombre: action.payload }] };
        case "USUARIOS":
            return { ...state, listaUsuarios: action.payload };
        default:
            return state;
    }

}