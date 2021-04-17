import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from "semantic-ui-react";
import Card from "./Card";

const SegmentExamplePlaceholderGrid = () => (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign="center">
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign="middle">
        <Grid.Column>
          <Card
            title="こんばんわ"
            subtitle="天気：快晴"
            description="今日は公園に行きました"
            followerNumber={32}
            image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          />
        </Grid.Column>

        <Grid.Column>
          <Card
            title="おはよう"
            subtitle="天気：雨"
            description="今日は海に行きました"
            followerNumber={100}
            image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default SegmentExamplePlaceholderGrid;
