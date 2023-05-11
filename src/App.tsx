import React, { Suspense } from "react";
import { Router } from "@/services/router";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
