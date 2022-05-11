import React from "react";
import JenssenContext from "./JenssenContext";

const withJenssenConfig = (Component) => {
    const displayName = `withJenssenConfig(${Component.displayName || Component.name})`;
    const C = props => {
        const { wrappedComponentRef, ...remainingProps } = props;
        return (
            <JenssenContext.Consumer>
                { context => {
                    return (
                        <Component
                            {...remainingProps}
                            {...context}
                            ref={wrappedComponentRef}
                            />
                    )
                }}
            </JenssenContext.Consumer>
        )
    }
    C.displayName = displayName;
    C.WrappedComponent = Component;
    return C;
}

export default withJenssenConfig;