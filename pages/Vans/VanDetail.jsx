import React, { Suspense } from "react"
import { Link, useParams, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import { getVan } from "../../api"

export function loader({ params }) {
    try {
        return defer({van: getVan(params.id)})
    } catch(err) {
        throw err
    }
}

export default function VanDetail() {
    const location = useLocation()
    const dataPromise = useLoaderData()

    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            <Suspense fallback={<h1>Loading van...</h1>}>
                <Await resolve={dataPromise.van}>{
                    van => {
                        return (
                            <div className="van-detail">
                                <img src={van.imageUrl} />
                                <i className={`van-type ${van.type} selected`}>
                                    {van.type}
                                </i>
                                <h2>{van.name}</h2>
                                <p className="van-price"><span>${van.price}</span>/day</p>
                                <p>{van.description}</p>
                                <button className="link-button">Rent this van</button>
                            </div>
                        )
                    }
                }
                </Await>
            </Suspense>
        </div>
    )
}