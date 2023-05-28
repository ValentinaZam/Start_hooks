import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    // WithOut Callback
    const validationWithOutCallback = (data) => {
        console.log(data);
    };

    useEffect(() => { withOutCallback.current++; }, [validationWithOutCallback]);

    // With Callback
    const validationWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => { withCallback.current++; }, [validationWithCallback]);

    useEffect(() => {
        validationWithOutCallback(data);
        validationWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <p>Render withOutCallback: {withOutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <SmallTitle>Example</SmallTitle>
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={handleChange} type="email" className="form-control" id="email" name="email" value={data.email || ""} />
        </CardWrapper>
    );
};

export default UseCallBackExample;
