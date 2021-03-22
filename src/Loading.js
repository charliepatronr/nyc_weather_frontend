import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

export default function Loading(props) {
  return (
    <Segment tyle={{ height: "100vh" }}>
      <Dimmer active style={{ height: "100vh", opacity: 0.8 }}>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
    </Segment>
  );
}