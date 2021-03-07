import React = require("react");
import "./ErrorBoundary.scss";

export default class AppErrorBoundary extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="ErrorBoundary">Something went wrong</div>;
    }

    return this.props.children;
  }
}
