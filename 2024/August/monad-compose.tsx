import React, { useEffect } from "react";

const Compose = (component) => ({
  chain: (hoc) => Compose(hoc(component)),
  render: () => component,
});

const withLogging = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted.`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

const withErrorBoundary = (WrappedComponent) => {
  return (props) => {
    try {
      return <WrappedComponent {...props} />;
    } catch (error) {
      console.error(error);
      return <h1>Something went wrong.</h1>;
    }
  };
};

const MyComponent = (props) => {
  return <div>Hello, World!</div>;
};

const EnhancedComponent = Compose(MyComponent)
  .chain(withLogging)
  .chain(withErrorBoundary)
  .render();

<EnhancedComponent />;

export default EnhancedComponent;
