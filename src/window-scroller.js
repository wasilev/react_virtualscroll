import React from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  WindowScroller
} from "react-virtualized";

import cn from "classnames";

class MyWindowScroller extends React.Component {
  mostRecentWidth = undefined;
  listRef = undefined;
  cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 150
  });

  render() {
    return (
      <div className="WindowScrollerWrapper">
        <AutoSizer>
          {({ height, width }) => {
            console.log(width, height);

            this.mostRecentWidth = width;
            return (
              <List
                ref={el => {
                  this.listRef = el;
                }}
                width={width}
                height={height}
                rowCount={this.props.data.length}
                rowHeight={this.cache.rowHeight}
                deferredMeasurementCache={this.cache}
                rowRenderer={this.renderRow}
                overscanRowCount={0}
              />
            );
          }}
        </AutoSizer>
      </div>
    );
  }
  renderRow = ({ index, isScrolling, isVisible, key, style, parent }) => {
    let datum = this.props.data[index];
    const className = cn("row", {
      rowScrolling: isScrolling,
      isVisible: isVisible
    });
    return (
      <CellMeasurer
        key={key}
        parent={parent}
        cache={this.cache}
        columnIndex={0}
        rowIndex={index}
        width={this.mostRecentWidth}
      >
        <div style={style} className={className}>
          <div>{datum.name}</div>
          <div>{datum.email}</div>
          <div style={{ height: `${datum.randomHeight}px` }}>
            {datum.randomHeight}px
          </div>
        </div>
      </CellMeasurer>
    );
  };
}

export default MyWindowScroller;
