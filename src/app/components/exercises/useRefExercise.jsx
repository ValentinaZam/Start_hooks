import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockChange = useRef();
    const blockTextChange = useRef();
    const toggleBlock = () => {
        blockTextChange.current.textContent = "text";
        blockChange.current.style.width = "150px";
        blockChange.current.style.height = "80px";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={blockChange}
            >
                <small ref={blockTextChange}>Блок</small>
            </div>
            <button className="btn btn-primary my-2" onClick={toggleBlock}>Изменить блок</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
