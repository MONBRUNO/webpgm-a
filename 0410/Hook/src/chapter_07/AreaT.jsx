import { useState } from "react";

const Area = () => {
    const [size, setSize] = useState({ width: 100, height: 100 });

    return (
        <div className='componentContainer'>
            <h1>
                너비: {size.width}, 높이: {size.height}
            </h1>

            <div style={{ marginBottom: '10px' }}>
                <button
                    onClick={() => {
                        setSize(prev => ({
                            ...prev,
                            width: prev.width >= 150 ? 150 : prev.width + 20
                        }));
                    }}
                >
                    너비증가
                </button>
                <button
                    onClick={() => {
                        setSize(prev => ({
                            ...prev,
                            width: prev.width <= 0 ? 0 : prev.width - 20
                        }));
                    }}
                >
                    너비감소
                </button>
                <button
                    onClick={() => {
                        setSize(prev => ({
                            ...prev,
                            height: prev.height >= 150 ? 150 : prev.height + 20
                        }));
                    }}
                >
                    높이증가
                </button>
                <button
                    onClick={() => {
                        setSize(prev => ({
                            ...prev,
                            height: prev.height <= 0 ? 0 : prev.height - 20
                        }));
                    }}
                >
                    높이감소
                </button>
            </div>

        </div>
    );
};

export default Area;
