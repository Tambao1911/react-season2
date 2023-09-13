import classNames from "classnames/bind";

import FetchApi from "~/components/FetchApi";
import styles from "./TableUser.module.scss";

const cx = classNames.bind(styles);

function TableUser() {

    const { data: dataCovid, isLoading, isErr, message } = FetchApi(`https://covid-api.com/api/reports`, true)

    return (
        <>
            <h3>Covid 19 tracking in world </h3>
            <table className={cx("customers")}>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {!isErr && !isLoading &&
                        dataCovid &&
                        dataCovid.length > 0 &&
                        dataCovid.map((data, index) => (
                            <tr key={index}>
                                <td>{data.region.name}</td>
                                <td>{data.confirmed}</td>
                                <td>{data.active}</td>
                                <td>{data.deaths}</td>
                                <td>{data.recovered}</td>
                            </tr>
                        ))}
                    {isLoading && (
                        <tr>
                            <td colSpan="5" >Loading...</td>
                        </tr>
                    )}

                    {isErr && (
                        <tr>
                            <td colSpan="5" >{message}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </>
    );
}

export default TableUser;
