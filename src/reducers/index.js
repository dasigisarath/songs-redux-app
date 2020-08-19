import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "butabomma", duration: "4:05" },
    { title: "perfect", duration: "4:30" },
    { title: "everybody", duration: "3:20" },
    { title: "backstreetboys", duration: "5:00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
