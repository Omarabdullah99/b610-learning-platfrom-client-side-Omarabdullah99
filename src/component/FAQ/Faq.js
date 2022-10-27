import React from "react";

const faq = () => {
  return (
    <div className="w-2/4 mx-auto">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          what is the purpose of react router?
        </div>
        <div className="collapse-content">
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL. By default, routes are inclusive which means more
            than one Route component can match the URL path and render at the
            same time. If we want to render a single component, we need to use
            routes.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-10"
      >
        <div className="collapse-title text-xl font-medium">
        How dose Context API work?
        </div>
        <div className="collapse-content">
          <p>
            Firebase provides tools to grow your app and business, for startups
            & global enterprises. Get your app up and running quickly & securely
            with fully managed backend infrastructure. Build Extraordinary Apps.
            Boost App Engagement. Release Apps Confidently. <br /> <br />
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

          React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-10"
      >
        <div className="collapse-title text-xl font-medium">
        What is JavaScript Even Loop
        </div>
        <div className="collapse-content">
          <p>
          Even Loop:JavaScript has a runtime modal based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.
          An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty
          </p>
        </div>
      </div>
    </div>
  );
};

export default faq;
