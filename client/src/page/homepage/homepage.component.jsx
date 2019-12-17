import React, {Profiler} from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
        <Profiler id="directory" onRender={(id, phase, actualDuration) =>
        console.log({id, phase, actualDuration})}>
            <Directory />
        </Profiler>
    </div>
  </div>
);

export default HomePage;
