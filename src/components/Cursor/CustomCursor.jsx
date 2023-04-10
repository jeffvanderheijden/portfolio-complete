import React, { useContext } from "react"
import useMousePosition from "../../helpers/hooks/useMousePosition"
import { MouseContext } from "../../helpers/context/mouseContext"
import aboutImage from "./../About/Homepage/about.png"
import './CustomCursor.scss'

const CustomCursor = () => {
    const cursorColor = '#eba10e'
    const { cursorType } = useContext(MouseContext)
    const { position, visible } = useMousePosition()
    const { x, y } = position

    return (
        <div style={{ opacity: visible ? 1 : 0}}>
            <div
                style={{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)` }}
                className={"cursorRing " + cursorType}
            />

            {cursorType === 'left' && (
                <div
                    className={"dot " + cursorType}
                    style={{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)` }}
                >
                    <svg>
                        <path fill={cursorColor} d="M10.29,0L.29,10c-.39,.39-.39,1.02,0,1.41l10,10,1.41-1.41L3.41,11.71h28.59v-2H3.41L11.7,1.42l-1.41-1.42Z"/>
                    </svg>
                </div>
            )}

            {cursorType === 'right' && (
                <div
                    className={"dot " + cursorType}
                    style={{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)` }}
                >
                    <svg>
                        <path fill={cursorColor} d="M21.71,21.41l10-10c.39-.39,.39-1.02,0-1.41L21.71,0l-1.41,1.41,8.29,8.29H0v2H28.59l-8.29,8.29,1.41,1.42Z"/>
                    </svg>
                </div>
            )}

            {cursorType === 'slider' && (
                <div
                    className={"dot " + cursorType}
                    style={{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)` }}
                >
                    <svg>
                        <g>
                            <polygon fill={cursorColor} points="12,18 6,18 6,22 0,16 6,10 6,14 12,14" />
                            <polygon fill={cursorColor} points="20,14 26,14 26,10 32,16 26,22 26,18 20,18" />
                        </g>
                    </svg>
                </div>
            )}

            {cursorType === 'view' && (
                <div
                    className={"dot " + cursorType}
                    style={{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)` }}
                >
                    <svg viewBox="0 0 456.8 456.8">
                        <g>
                            <path d="M448.947,218.475c-0.922-1.168-23.055-28.933-61-56.81c-50.705-37.253-105.877-56.944-159.551-56.944
                                c-53.672,0-108.844,19.691-159.551,56.944c-37.944,27.876-60.077,55.642-61,56.81L0,228.397l7.846,9.923
                                c0.923,1.168,23.056,28.934,61,56.811c50.707,37.252,105.879,56.943,159.551,56.943c53.673,0,108.845-19.691,159.55-56.943
                                c37.945-27.877,60.078-55.643,61-56.811l7.848-9.923L448.947,218.475z M228.396,315.039c-47.774,0-86.642-38.867-86.642-86.642
                                c0-7.485,0.954-14.751,2.747-21.684l-19.781-3.329c-1.938,8.025-2.966,16.401-2.966,25.013c0,30.86,13.182,58.696,34.204,78.187
                                c-27.061-9.996-50.072-24.023-67.439-36.709c-21.516-15.715-37.641-31.609-46.834-41.478c9.197-9.872,25.32-25.764,46.834-41.478
                                c17.367-12.686,40.379-26.713,67.439-36.71l13.27,14.958c15.498-14.512,36.312-23.412,59.168-23.412
                                c47.774,0,86.641,38.867,86.641,86.642C315.037,276.172,276.17,315.039,228.396,315.039z M368.273,269.875
                                c-17.369,12.686-40.379,26.713-67.439,36.709c21.021-19.49,34.203-47.326,34.203-78.188s-13.182-58.697-34.203-78.188
                                c27.061,9.997,50.07,24.024,67.439,36.71c21.516,15.715,37.641,31.609,46.834,41.477
                                C405.91,238.269,389.787,254.162,368.273,269.875z"/>
                            <path d="M173.261,211.555c-1.626,5.329-2.507,10.982-2.507,16.843c0,31.834,25.807,57.642,57.642,57.642
                                c31.834,0,57.641-25.807,57.641-57.642s-25.807-57.642-57.641-57.642c-15.506,0-29.571,6.134-39.932,16.094l28.432,32.048
                                L173.261,211.555z"/>
                        </g>
                    </svg>
                </div>
            )}

            {cursorType === 'about' && (
                <div
                    className={"imageCursor " + cursorType}
                    style={{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)` }}
                >
                    <img
                        className="aboutImage" 
                        src={aboutImage} 
                        alt="about" 
                    />
                </div>
            )}

            {
                cursorType !== 'slider' && 
                cursorType !== 'view' && 
                cursorType !== 'left' && 
                cursorType !== 'right' && (
                    <div
                        className={"dot " + cursorType}
                        style={{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)` }}
                    />
                )
            }
        </div>
    );
};

export default CustomCursor