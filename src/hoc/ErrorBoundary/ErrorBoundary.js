import React from "react";
import MessageBox from "../../components/UI/MessageBox/MessageBox";
class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    };
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: error };
    }
    componentDidCatch() {
        //
    }

    render() {
        if (this.state.hasError) return <MessageBox />;
        return this.props.children;
    }
}

export default ErrorBoundary;
