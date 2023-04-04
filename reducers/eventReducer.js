import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventsList: [],
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
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
}
    = eventSlice.actions;

export default eventSlice.reducer;