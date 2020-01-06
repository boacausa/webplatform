import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideComponentHandler(ref, onClickOutside) {
    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside();
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

/**
 * Component that do something if you click outside of it
 */
function OutsideComponentHandler(props) {
    const wrapperRef = useRef(null);
    useOutsideComponentHandler(wrapperRef, props.onClickOutside);

    return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideComponentHandler.propTypes = {
    children: PropTypes.element.isRequired
};

export default OutsideComponentHandler;
