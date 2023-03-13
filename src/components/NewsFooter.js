import Ticker, {NewsTicker} from 'nice-react-ticker';
import {useId} from "react";
import {useQuery} from "react-query";
import {noteService} from "../_services";
import {ThreeDots} from "react-loader-spinner";

const NewsFooter = () => {
    const randomID = useId();

    const {isLoading, data} = useQuery(randomID, () => noteService.getNoteData());
    const noteData = data || {"data": []}

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

    return (
        <Ticker isNewsTicker={true} slideSpeed="20">
            {
                Object.values(noteData).map(ele =>
                    <NewsTicker key={ele.id} id={ele.id}
                                title={ele.description}
                                meta={ele.name} url=""/>
                )

            }
        </Ticker>
    );
}

export default NewsFooter;