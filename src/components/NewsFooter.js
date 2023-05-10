import Ticker, {NewsTicker} from 'nice-react-ticker';
import {useId, useState} from "react";
import {useQuery} from "react-query";
import {noteService} from "../_services";
import {ThreeDots} from "react-loader-spinner";
import Pusher from "pusher-js";
import NotificationSound from "../assets/notification_sound.wav";

const NewsFooter = () => {
    const randomID = useId();

    const {isLoading, data} = useQuery(randomID, () => noteService.getNoteData());
    const noteData = data || {"data": []}

    const [noteId, setNoteId] = useState(0);
    const [noteName, setNoteName] = useState('');
    const [noteDescription, setNoteDescription] = useState('');

    const audio = new Audio(NotificationSound);

    Pusher.logToConsole = false;

    let pusher = new Pusher('5fdf984542cc12f08fb0', {
        cluster: 'eu'
    });

    let channel = pusher.subscribe('sdfm-channel');

    channel.bind('sdfm-note', function (data) {
        setNoteId(data.id);
        setNoteName(data.name);
        setNoteDescription(data.description);
        audio.play();
    });

    if (isLoading) {
        return (
            <div>
                <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="#2068BD"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{justifyContent: "center"}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        );
    }

    if (noteData) {
        return (
            <></>
        )
    } else {
        return (
            <Ticker isNewsTicker={true} slideSpeed="20">
                <NewsTicker id={noteId || noteData[0].id}
                            title={noteDescription || noteData[0].description}
                            meta={noteName || noteData[0].name} url=""/>
            </Ticker>
        );
    }
}

export default NewsFooter;