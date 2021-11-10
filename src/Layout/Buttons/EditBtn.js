import React from "react";
import { Link } from "react-router-dom";

export default function EditBtn( deckId) {
    return (
        <Link to={`decks/${deckId}`} className="btn btn-secondary mr-2">
            <span className="oi oi-pencil mr-1"></span>
            Edit
        </Link>
    );
}