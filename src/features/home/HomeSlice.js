import { createSlice } from '@reduxjs/toolkit';
import { PUBLIC_API } from '../../config';

export const HomeSlice = createSlice({
    name: 'home',
    initialState: {
        places: {
            isLoading: false,
            success: false,
            error: false,
            errors: '',
            data: [],
            place: {}
        }
    },
    reducers: {
        getPlaces: (state, action) => {
            state.places = {
                ...state.places,
                data: action.payload
            }
        },
        getPlace: (state, action) => {
            state.places = {
                ...state.places,
                place: action.payload
            }
        },
        placesRequest: (state) => {
            state.places = {
                ...state.places,
                isLoading: true,
            }
        },
        placesSuccess: (state) => {
            state.places = {
                ...state.places,
                isLoading: false,
                success: true,
                error: false
            }
        },
        placesError: (state, action) => {
            state.places = {
                ...state.places,
                isLoading: false,
                success: false,
                error: true,
                errors: action.payload
            }
        }
    }
});

export const {
    getPlaces, getPlace, placesRequest, placesSuccess, placesError
} = HomeSlice.actions;

export const getPlacesThunk = () => dispatch => {
    dispatch(placesRequest())
    PUBLIC_API.get('/places').then((res) => {
        dispatch(getPlaces(res.data))
        dispatch(placesSuccess())
    }).catch((e) => {
        console.log("e.error")
        dispatch(placesError(e.error))
    })
}

export const getPlaceThunk = (id) => dispatch => {
    dispatch(placesRequest())
    PUBLIC_API.get(`/places/${id}`).then((res) => {
        dispatch(getPlace(res.data))
        dispatch(placesSuccess())
    }).catch((e) => {
        console.log("e.error")
        dispatch(placesError(e.error))
    })
}

export const postPlaceThunk = (postData, history) => dispatch => {
    PUBLIC_API.post(`/places`, postData).then((res) => {
        dispatch(getPlacesThunk())
        history.push('/properties')
    }).catch((e) => {
        console.log("e.error")
    })
}
export default HomeSlice.reducer;