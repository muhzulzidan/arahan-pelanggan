import React from 'react'
import {Link} from "gatsby"
export default function Kembali() {
    return (
        <>
            <Link to="/">
                <form className="contactUs-form">
                    <input type="submit" value="Kembali" className="contactUs-submit" />
                </form>
            </Link>
        </>
    )
}