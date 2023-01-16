import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);

/**
 * This layout demonstrates how to use static grid elements.
 * Static elements are not draggable or resizable, and cannot be moved.
 */
export default class StaticElementsLayout extends React.PureComponent {
    render() {
        return (
            <ReactGridLayout className="layout" rowHeight={50}>
                <div key="0" data-grid={{ x: 0, y: 0, w: 12, h: 1 }}>
                    <span className="text">Header Key 0</span>
                </div>
                <div key="1" data-grid={{ x: 0, y: 1, w: 2, h: 2 }}>
                    <span className="text">1</span>
                </div>
                <div key="2" data-grid={{ x: 0, y: 2, w: 2, h: 2 }}>
                    <span className="text">2</span>
                </div>
                <div key="3" data-grid={{ x: 0, y: 3, w: 2, h: 2 }}>
                    <span className="text">3</span>
                </div>
                <div key="4" data-grid={{ x: 0, y: 4, w: 2, h: 2 }}>
                    <span className="text">4</span>
                </div>
                <div key="5" data-grid={{ x: 0, y: 5, w: 2, h: 2 }}>
                    <span className="text">5 Static</span>
                </div>
                <div key="6" data-grid={{ x: 0, y: 6, w: 2, h: 2 }}>
                    <span className="text">6</span>
                </div>
                <div key="7" data-grid={{ x: 0, y: 7, w: 2, h: 2 }}>
                    <span className="text">7</span>
                </div>
                <div key="8" data-grid={{ x: 0, y: 8, w: 2, h: 2 }}>
                    <span className="text">8</span>
                </div>
                <div key="9" data-grid={{ x: 0, y: 9, w: 2, h: 2 }}>
                    <span className="text">9 Static</span>
                </div>
                <div key="10" data-grid={{ x: 0, y: 10, w: 2, h: 2 }}>
                    <span className="text">10</span>
                </div>
                <div key="11" data-grid={{ x: 0, y: 11, w: 2, h: 2 }}>
                    <span className="text">11</span>
                </div>
                <div key="12" data-grid={{ x: 0, y: 12, w: 2, h: 2 }}>
                    <span className="text">12</span>
                </div>
                <div key="13" data-grid={{ x: 12, y: 1, w: 2, h: 2 }}>
                    <span className="text">13</span>
                </div>
                <div key="14" data-grid={{ x: 12, y: 2, w: 2, h: 2 }}>
                    <span className="text">14</span>
                </div>
                <div key="15" data-grid={{ x: 12, y: 3, w: 2, h: 2 }}>
                    <span className="text">15</span>
                </div>
                <div key="16" data-grid={{ x: 12, y: 4, w: 2, h: 2 }}>
                    <span className="text">16</span>
                </div>
                <div key="17" data-grid={{ x: 12, y: 4, w: 2, h: 2 }}>
                    <span className="text">17</span>
                </div>
                <div key="18" data-grid={{ x: 12, y: 6, w: 2, h: 2 }}>
                    <span className="text">18</span>
                </div>
                <div key="19" data-grid={{ x: 12, y: 7, w: 2, h: 2 }}>
                    <span className="text">19</span>
                </div>
                <div key="20" data-grid={{ x: 12, y: 8, w: 2, h: 2 }}>
                    <span className="text">20</span>
                </div>
                <div key="21" data-grid={{ x: 12, y: 9, w: 2, h: 2 }}>
                    <span className="text">21</span>
                </div>
                <div key="22" data-grid={{ x: 12, y: 10, w: 2, h: 2 }}>
                    <span className="text">22</span>
                </div>
                <div key="23" data-grid={{ x: 12, y: 11, w: 2, h: 2 }}>
                    <span className="text">23</span>
                </div>
                <div key="24" data-grid={{ x: 12, y: 12, w: 2, h: 2 }}>
                    <span className="text">24</span>
                </div>
                <div key="25" data-grid={{ x: 0, y: 24, w: 12, h: 1 }}>
                    <span className="text">Footer Key 25</span>
                </div>
            </ReactGridLayout>
        );
    }
}
