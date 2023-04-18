import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventsList: [],
    originalEventsList: [],
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        getOriginalEventsList(state, action) {
            return state.originalEventsList;
        },

        updateOriginalEventsList(state, action) {
            const newOriginalEventsList = action.payload;
            state.originalEventsList = newOriginalEventsList;
        },

        getEventsList(state, action) {
            const newEventsList = action.payload;
            state.eventsList = newEventsList;
        },

        updateConfirmStatusEvent(state, action) {
            let currentEvents = state.eventsList;
            currentEvents = currentEvents.map((event, idx) => {
                if (event.id == action.payload.id) {
                    event.confirm_status = "done";
                    return event;
                } else {
                    return event;
                }
            })
            state.eventsList = currentEvents;
        }
    }
})

export const {
    getEventsList,
    updateConfirmStatusEvent,
    getOriginalEventsList,
    updateOriginalEventsList,
}
    = eventSlice.actions;

export default eventSlice.reducer;