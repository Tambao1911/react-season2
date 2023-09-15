import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import classNames from "classnames/bind";

import styles from "./YoutubeSearch.module.scss";
import { LogoIcon, SearchIcon } from "~/assets/icons";

const cx = classNames.bind(styles);

function YoutubeSearch() {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => { }, []);

    const handleSearchYt = async () => {
        let res = await axios({
            method: "GET",
            url: `https://www.googleapis.com/youtube/v3/search`,
            params: {
                part: "snippet",
                maxResults: "20",
                key: "AIzaSyBtjc_VVQsTuSMjGqHMgLEW5fxU1HOux1Q",
                q: query,
            },
        });
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            console.log(raw)
            let result = [];
            if (raw && raw.length > 0) {
                // eslint-disable-next-line array-callback-return
                raw.map((item) => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.time = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object);
                });
            }
            console.log(result)
            setVideos(result);
            setQuery('')
        }
    };

    return (
        <div className={cx("container")}>
            <div className={cx("yt-search")}>
                <div className={cx('logo-search')}><LogoIcon className={cx('logo')} /></div>
                <input
                    value={query}
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="button" onClick={handleSearchYt}>
                    <SearchIcon className={cx('icon-search')} />
                </button>
            </div>

            {videos &&
                videos.length > 0 &&
                videos.map(item => {
                    return (
                        <div className={cx("yt-result")} key={item.id}>
                            <div className={cx("content-left")}>
                                <iframe
                                    className={cx("ifram")}
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className={cx("content-rigth")}>
                                <div className={cx("title")}>{item.title}</div>
                                <div className={cx("time")}>
                                    {moment(item.time).format("DD/MM/YYYY HH:mm:ss A")}
                                </div>
                                <div className={cx("author")}>{item.author}</div>
                                <div className={cx("decs")}>{item.description}</div>
                                <button>News</button>
                            </div>
                        </div>
                    )
                })}
        </div>
    );
}

export default YoutubeSearch;
