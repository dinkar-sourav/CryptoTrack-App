
import { ErrorBoundary } from "react-error-boundary"

function ErrorboundaryUi({error,resetErrorBoundary}){
    return (
        <div role="alert" className="alert alert-error">
            <p>Something went wrong</p>
            <pre>{error?.message}</pre>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}

export default function Errorboundary({children}){
    return (
        <ErrorBoundary
           FallbackComponent={ErrorboundaryUi}
           onReset={()=>window.location.reload()}
        >
           {children}
        </ErrorBoundary>
    )
}